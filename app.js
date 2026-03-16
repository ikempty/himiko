(function () {
  "use strict";

  const storyData =
    window.STORY_DATA || (typeof STORY_DATA !== "undefined" ? STORY_DATA : null);

  const state = {
    currentPostIndex: 0,
    previewMode: "normal",
    isAutoplaying: false,
    autoplayRevealedCount: 0,
    autoplayDelayMs: 1600
  };

  let autoplayTimerId = null;

  const elements = {
    workTitle: document.getElementById("work-title"),
    workSummary: document.getElementById("work-summary"),
    groupName: document.getElementById("group-name"),
    statusTime: document.getElementById("status-time"),
    postCounter: document.getElementById("post-counter"),
    postTabs: document.getElementById("post-tabs"),
    chatScroll: document.getElementById("chat-scroll"),
    chatMessages: document.getElementById("chat-messages"),
    captureToggle: document.getElementById("capture-toggle"),
    captureHint: document.getElementById("capture-hint"),
    autoplayToggle: document.getElementById("autoplay-toggle"),
    speedSelect: document.getElementById("speed-select"),
    prevPostButton: document.getElementById("prev-post-button"),
    nextPostButton: document.getElementById("next-post-button")
  };

  init();

  function init() {
    if (!isValidStoryData(storyData)) {
      renderError("story-data.js の構造が見つかりません。README の形式を確認してください。");
      return;
    }

    sortPostsByIndex(storyData);
    applyTheme(storyData.theme || {});
    bindEvents();
    render();
  }

  function bindEvents() {
    elements.captureToggle.addEventListener("click", toggleCaptureMode);
    elements.autoplayToggle.addEventListener("click", toggleAutoplay);
    elements.speedSelect.addEventListener("change", handleSpeedChange);
    elements.prevPostButton.addEventListener("click", function () {
      stepPost(-1);
    });
    elements.nextPostButton.addEventListener("click", function () {
      stepPost(1);
    });

    document.addEventListener("keydown", handleKeydown);
  }

  function handleKeydown(event) {
    if (event.defaultPrevented || isTypingTarget(event.target)) {
      return;
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      stepPost(-1);
      return;
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      stepPost(1);
      return;
    }

    if (event.key === "c" || event.key === "C") {
      event.preventDefault();
      toggleCaptureMode();
      return;
    }

    if (event.key === "p" || event.key === "P") {
      event.preventDefault();
      toggleAutoplay();
      return;
    }

    if (event.key === "Escape" && state.previewMode === "capture") {
      event.preventDefault();
      toggleCaptureMode(false);
      return;
    }

    if (/^[1-9]$/.test(event.key)) {
      const targetIndex = Number(event.key) - 1;
      if (targetIndex < storyData.posts.length) {
        event.preventDefault();
        setCurrentPost(targetIndex);
      }
    }
  }

  function handleSpeedChange() {
    const nextDelay = Number(elements.speedSelect.value);
    if (!Number.isFinite(nextDelay) || nextDelay <= 0) {
      return;
    }

    state.autoplayDelayMs = nextDelay;

    if (state.isAutoplaying) {
      startAutoplayTimer();
    }
  }

  function isTypingTarget(target) {
    if (!target) {
      return false;
    }

    const tagName = target.tagName ? target.tagName.toLowerCase() : "";
    return tagName === "input" || tagName === "textarea" || target.isContentEditable;
  }

  function render() {
    const post = getCurrentPost();

    if (!post) {
      renderError("投稿データが不足しています。story-data.js を確認してください。");
      return;
    }

    updateHeader(post);
    updateCounter();
    renderPostTabs();
    renderMessages(post);
    updateAutoplayUI();
    updateNavigationButtons();
    updateCaptureUI();
    updateSpeedUI();
  }

  function updateHeader(post) {
    const totalMessages = storyData.posts.reduce(function (total, item) {
      return total + item.messages.length;
    }, 0);

    elements.workTitle.textContent = storyData.workTitle;
    elements.workSummary.textContent =
      storyData.posts.length +
      "投稿 / " +
      totalMessages +
      "メッセージ";
    elements.groupName.textContent = post.groupName;
    elements.statusTime.textContent = pickStatusTime(post);
  }

  function updateCounter() {
    elements.postCounter.textContent =
      "投稿 " + (state.currentPostIndex + 1) + " / " + storyData.posts.length;
  }

  function renderPostTabs() {
    clearElement(elements.postTabs);

    storyData.posts.forEach(function (post, index) {
      const button = createChipButton({
        title: "投稿 " + post.postIndex,
        meta: post.groupName,
        isActive: index === state.currentPostIndex,
        onClick: function () {
          setCurrentPost(index);
        }
      });

      button.setAttribute("aria-label", "投稿 " + post.postIndex + " " + post.groupName);
      elements.postTabs.appendChild(button);
    });
  }

  function renderMessages(post) {
    clearElement(elements.chatMessages);

    getVisibleMessages(post).forEach(function (message, index, messages) {
      const previousMessage = index > 0 ? messages[index - 1] : null;
      elements.chatMessages.appendChild(createMessageNode(message, previousMessage));
    });

    requestAnimationFrame(function () {
      if (state.isAutoplaying) {
        elements.chatScroll.scrollTo({
          top: elements.chatScroll.scrollHeight,
          behavior: "smooth"
        });
      } else {
        elements.chatScroll.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
    });
  }

  function getVisibleMessages(post) {
    if (!state.isAutoplaying) {
      return post.messages;
    }

    return post.messages.slice(0, state.autoplayRevealedCount);
  }

  function createMessageNode(message, previousMessage) {
    if (message.type === "system") {
      return createSystemChip(message);
    }

    if (message.type === "date") {
      return createDateChip(message);
    }

    return createChatBubble(message, previousMessage);
  }

  function createSystemChip(message) {
    const chip = document.createElement("div");
    chip.className = "system-chip";

    const text = document.createElement("span");
    text.className = "system-chip__text";
    text.textContent = message.text || "";
    chip.appendChild(text);

    return chip;
  }

  function createDateChip(message) {
    const chip = document.createElement("div");
    chip.className = "date-chip";
    chip.textContent = message.text || "";
    return chip;
  }

  function createChatBubble(message, previousMessage) {
    const row = document.createElement("div");
    const isSelf = Boolean(message.isSelf);
    const isStacked = isSameSpeaker(previousMessage, message);

    row.className =
      "message-row " +
      (isSelf ? "message-row--self" : "message-row--other") +
      (isStacked ? " message-row--stacked" : "");

    if (!isSelf) {
      row.appendChild(isStacked ? createAvatarPlaceholder() : createAvatar(message));
    }

    const cluster = document.createElement("div");
    cluster.className = "message-cluster";

    if (!isSelf && !isStacked) {
      const sender = document.createElement("p");
      sender.className = "sender-name";
      sender.textContent = message.sender || "不明";
      cluster.appendChild(sender);
    }

    const bubble = document.createElement("div");
    bubble.className =
      "bubble " + (isSelf ? "bubble--self" : "bubble--other") +
      (message.emphasis ? " bubble--emphasis" : "");
    bubble.textContent = message.text || "";
    cluster.appendChild(bubble);

    if (message.time) {
      const meta = document.createElement("div");
      meta.className = "bubble-meta";
      meta.textContent = message.time;
      cluster.appendChild(meta);
    }

    row.appendChild(cluster);
    return row;
  }

  function createAvatar(message) {
    const avatar = document.createElement("div");
    avatar.className = "avatar";
    avatar.textContent = getAvatarText(message);
    avatar.setAttribute("aria-hidden", "true");
    return avatar;
  }

  function createAvatarPlaceholder() {
    const placeholder = document.createElement("div");
    placeholder.className = "avatar-placeholder";
    placeholder.setAttribute("aria-hidden", "true");
    return placeholder;
  }

  function createChipButton(config) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "chip-tab" + (config.isActive ? " is-active" : "");

    const title = document.createElement("span");
    title.className = "chip-tab__title";
    title.textContent = config.title;

    const meta = document.createElement("span");
    meta.className = "chip-tab__meta";
    meta.textContent = config.meta;

    button.appendChild(title);
    button.appendChild(meta);
    button.addEventListener("click", config.onClick);
    return button;
  }

  function updateAutoplayUI() {
    elements.autoplayToggle.textContent = state.isAutoplaying ? "停止" : "自動再生";
    elements.autoplayToggle.classList.toggle("is-active", state.isAutoplaying);
  }

  function updateNavigationButtons() {
    elements.prevPostButton.disabled = !getPostTarget(-1);
    elements.nextPostButton.disabled = !getPostTarget(1);
  }

  function updateCaptureUI() {
    const isCapture = state.previewMode === "capture";

    document.body.classList.toggle("capture-mode", isCapture);
    elements.captureToggle.textContent = isCapture ? "通常プレビュー" : "クリーン表示";
    elements.captureHint.hidden = !isCapture;
  }

  function updateSpeedUI() {
    elements.speedSelect.value = String(state.autoplayDelayMs);
  }

  function setCurrentPost(index) {
    stopAutoplay(false);
    state.currentPostIndex = clamp(index, 0, storyData.posts.length - 1);
    state.autoplayRevealedCount = 0;
    render();
  }

  function stepPost(direction) {
    const target = getPostTarget(direction);
    if (target === null) {
      return;
    }

    setCurrentPost(target);
  }

  function getPostTarget(direction) {
    const nextIndex = state.currentPostIndex + direction;
    if (nextIndex < 0 || nextIndex >= storyData.posts.length) {
      return null;
    }

    return nextIndex;
  }

  function toggleCaptureMode(forceNormal) {
    if (forceNormal === false) {
      state.previewMode = "normal";
    } else {
      state.previewMode = state.previewMode === "capture" ? "normal" : "capture";
    }

    render();
  }

  function toggleAutoplay() {
    if (state.isAutoplaying) {
      stopAutoplay();
      return;
    }

    startAutoplay();
  }

  function startAutoplay() {
    stopAutoplay(false);
    state.isAutoplaying = true;
    state.autoplayRevealedCount = 0;
    updateAutoplayUI();
    advanceAutoplayStep();
    startAutoplayTimer();
  }

  function startAutoplayTimer() {
    if (autoplayTimerId) {
      window.clearInterval(autoplayTimerId);
    }

    autoplayTimerId = window.setInterval(function () {
      advanceAutoplayStep();
    }, state.autoplayDelayMs);
  }

  function stopAutoplay(shouldRender) {
    if (autoplayTimerId) {
      window.clearInterval(autoplayTimerId);
      autoplayTimerId = null;
    }

    state.isAutoplaying = false;

    if (shouldRender !== false) {
      render();
    }
  }

  function advanceAutoplayStep() {
    const post = getCurrentPost();

    if (!post) {
      stopAutoplay();
      return;
    }

    if (state.autoplayRevealedCount < post.messages.length) {
      state.autoplayRevealedCount += 1;
      render();
      return;
    }

    const nextPostIndex = getPostTarget(1);
    if (nextPostIndex === null) {
      stopAutoplay();
      return;
    }

    state.currentPostIndex = nextPostIndex;
    state.autoplayRevealedCount = 1;
    render();
  }

  function getCurrentPost() {
    return storyData.posts[state.currentPostIndex];
  }

  function getAvatarText(message) {
    if (message.avatarText) {
      return message.avatarText;
    }

    if (!message.sender) {
      return "?";
    }

    return message.sender.slice(0, 2);
  }

  function isSameSpeaker(previousMessage, currentMessage) {
    if (!previousMessage || !currentMessage) {
      return false;
    }

    return (
      previousMessage.type === "message" &&
      currentMessage.type === "message" &&
      previousMessage.sender === currentMessage.sender &&
      Boolean(previousMessage.isSelf) === Boolean(currentMessage.isSelf)
    );
  }

  function pickStatusTime(post) {
    const messages = getVisibleMessages(post);

    for (let index = messages.length - 1; index >= 0; index -= 1) {
      if (messages[index].time) {
        return messages[index].time;
      }
    }

    return "09:41";
  }

  function sortPostsByIndex(data) {
    data.posts.sort(function (a, b) {
      return a.postIndex - b.postIndex;
    });
  }

  function clearElement(element) {
    element.textContent = "";
  }

  function clamp(value, min, max) {
    return Math.min(Math.max(value, min), max);
  }

  function isValidStoryData(data) {
    return Boolean(
      data &&
        typeof data.workTitle === "string" &&
        Array.isArray(data.posts) &&
        data.posts.length > 0 &&
        data.posts.every(function (post) {
          return Array.isArray(post.messages);
        })
    );
  }

  function getUniqueParticipantCount(posts) {
    const names = new Set();

    posts.forEach(function (post) {
      (post.participants || []).forEach(function (name) {
        names.add(name);
      });
    });

    return names.size;
  }

  function renderError(message) {
    if (autoplayTimerId) {
      window.clearInterval(autoplayTimerId);
      autoplayTimerId = null;
    }

    state.isAutoplaying = false;
    elements.workTitle.textContent = "設定エラー";
    elements.workSummary.textContent = message;
    elements.groupName.textContent = "story-data.js を確認してください";
    elements.statusTime.textContent = "--:--";
    clearElement(elements.postTabs);
    clearElement(elements.chatMessages);

    const errorNode = document.createElement("div");
    errorNode.className = "system-chip";

    const text = document.createElement("span");
    text.className = "system-chip__text";
    text.textContent = message;
    errorNode.appendChild(text);

    elements.chatMessages.appendChild(errorNode);
  }

  function applyTheme(theme) {
    const accent = theme.accentColor || "#79dd67";
    const background = theme.backgroundColor || "#2d2f30";
    const root = document.documentElement;

    root.style.setProperty("--accent-color", accent);
    root.style.setProperty("--accent-soft", mixColor(accent, "#1e261f", 0.78));
    root.style.setProperty("--accent-deep", mixColor(accent, "#eef8eb", 0.62));
    root.style.setProperty("--accent-line", hexToRgba(accent, 0.24));
    root.style.setProperty("--chat-bg", background);
    root.style.setProperty("--chat-bg-deep", mixColor(background, "#121314", 0.38));
    root.style.setProperty("--bubble-self", mixColor(accent, "#9af185", 0.12));
    root.style.setProperty("--page-bg", mixColor(background, "#232524", 0.42));
    root.style.setProperty("--page-bg-deep", mixColor(background, "#0d0e0e", 0.66));
  }

  function mixColor(colorA, colorB, ratio) {
    const rgbA = hexToRgb(colorA);
    const rgbB = hexToRgb(colorB);

    if (!rgbA || !rgbB) {
      return colorA;
    }

    return rgbToHex(
      Math.round(rgbA.r + (rgbB.r - rgbA.r) * ratio),
      Math.round(rgbA.g + (rgbB.g - rgbA.g) * ratio),
      Math.round(rgbA.b + (rgbB.b - rgbA.b) * ratio)
    );
  }

  function hexToRgb(value) {
    const hex = String(value || "").replace("#", "").trim();
    if (!/^[0-9a-fA-F]{3}$|^[0-9a-fA-F]{6}$/.test(hex)) {
      return null;
    }

    const normalized =
      hex.length === 3
        ? hex
            .split("")
            .map(function (char) {
              return char + char;
            })
            .join("")
        : hex;

    return {
      r: parseInt(normalized.slice(0, 2), 16),
      g: parseInt(normalized.slice(2, 4), 16),
      b: parseInt(normalized.slice(4, 6), 16)
    };
  }

  function hexToRgba(value, alpha) {
    const rgb = hexToRgb(value);
    if (!rgb) {
      return "rgba(121, 221, 103, " + alpha + ")";
    }

    return "rgba(" + rgb.r + ", " + rgb.g + ", " + rgb.b + ", " + alpha + ")";
  }

  function rgbToHex(r, g, b) {
    return (
      "#" +
      [r, g, b]
        .map(function (value) {
          return value.toString(16).padStart(2, "0");
        })
        .join("")
    );
  }
})();
