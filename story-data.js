// `STORY_DATA` を差し替えるだけで、別作品にそのまま転用できます。
// この版では「投稿」のみを使い、各投稿の中に messages を直接並べます。

const STORY_DATA = {
  workId: "jugemu",
  workTitle: "寿限無",
  theme: {
    accentColor: "#79dd67",
    backgroundColor: "#2d2f30"
  },
  posts: [
    {
      postIndex: 1,
      groupName: "子の名をどうする",
      participants: ["父", "母", "ご隠居", "寿限無"],
      messages: [
        { type: "system", text: "父がグループ「子の名をどうする」を作成しました" },
        { type: "system", text: "母がグループに参加しました" },
        { type: "message", sender: "父", text: "子が生まれた", isSelf: false, time: "09:02", avatarText: "父" },
        { type: "message", sender: "母", text: "めでたいねえ", isSelf: false, time: "09:03", avatarText: "母" },
        { type: "message", sender: "父", text: "さて、名をどうするかだ", isSelf: false, time: "09:04", avatarText: "父" },
        { type: "message", sender: "母", text: "丈夫で、長生きしそうな名がいいね", isSelf: false, time: "09:05", avatarText: "母" },
        { type: "message", sender: "父", text: "なら、ご隠居に知恵を借りよう", isSelf: false, time: "09:05", avatarText: "父" },
        { type: "system", text: "ご隠居がグループに参加しました" },
        { type: "message", sender: "ご隠居", text: "呼ばれたので来た", isSelf: false, time: "09:07", avatarText: "隠" },
        { type: "message", sender: "父", text: "この子に、めでたい名をつけたいんです", isSelf: false, time: "09:08", avatarText: "父" },
        { type: "message", sender: "母", text: "なるべく縁起のいい名をお願いします", isSelf: false, time: "09:08", avatarText: "母" },
        { type: "message", sender: "ご隠居", text: "なら、よい名がいくつもある", isSelf: false, time: "09:09", avatarText: "隠" },
        { type: "message", sender: "父", text: "いくつも", isSelf: false, time: "09:09", avatarText: "父" },
        { type: "message", sender: "ご隠居", text: "寿限無", isSelf: false, time: "09:10", avatarText: "隠" },
        { type: "message", sender: "母", text: "ほう", isSelf: false, time: "09:10", avatarText: "母" },
        {
          type: "message",
          sender: "ご隠居",
          text: "五劫の擦り切れ",
          isSelf: false,
          time: "09:11",
          avatarText: "隠"
        },
        { type: "message", sender: "父", text: "もうめでたそうだ", isSelf: false, time: "09:11", avatarText: "父" },
        {
          type: "message",
          sender: "ご隠居",
          text:
            "海砂利水魚\n水行末 雲来末 風来末\n食う寝るところに住むところ\nやぶらこうじのぶらこうじ",
          isSelf: false,
          time: "09:12",
          emphasis: true,
          avatarText: "隠"
        },
        { type: "message", sender: "母", text: "急に長いねえ", isSelf: false, time: "09:13", avatarText: "母" },
        { type: "message", sender: "ご隠居", text: "まだある", isSelf: false, time: "09:13", avatarText: "隠" },
        { type: "message", sender: "父", text: "まだあるんですか", isSelf: false, time: "09:13", avatarText: "父" },
        {
          type: "message",
          sender: "ご隠居",
          text:
            "パイポパイポ\nパイポのシューリンガン\nシューリンガンのグーリンダイ\nグーリンダイのポンポコピーのポンポコナーの\n長久命の長助",
          isSelf: false,
          time: "09:14",
          emphasis: true,
          avatarText: "隠"
        },
        { type: "message", sender: "母", text: "どれもめでたいねえ", isSelf: false, time: "09:15", avatarText: "母" },
        { type: "message", sender: "父", text: "一つに決めるのが惜しい", isSelf: false, time: "09:15", avatarText: "父" },
        { type: "message", sender: "母", text: "惜しいけど、一つにしないとね", isSelf: false, time: "09:16", avatarText: "母" },
        { type: "message", sender: "父", text: "いや、全部つければよくないか", isSelf: false, time: "09:16", avatarText: "父" },
        { type: "message", sender: "ご隠居", text: "よくはない", isSelf: false, time: "09:17", avatarText: "隠" },
        { type: "message", sender: "父", text: "全部めでたいんだから\n全部つければ、全部めでたい", isSelf: false, time: "09:18", avatarText: "父" },
        { type: "message", sender: "母", text: "理屈がだいぶ強引だよ", isSelf: false, time: "09:18", avatarText: "母" },
        { type: "message", sender: "ご隠居", text: "呼ぶ者の苦労を考えなさい", isSelf: false, time: "09:19", avatarText: "隠" },
        { type: "message", sender: "父", text: "よし、決まりだ", isSelf: false, time: "09:19", avatarText: "父" },
        { type: "system", text: "寿限無がグループに参加しました" },
        { type: "message", sender: "寿限無", text: "おぎゃ", isSelf: true, time: "09:20", avatarText: "寿" },
        { type: "message", sender: "母", text: "異議はなさそうだね", isSelf: false, time: "09:20", avatarText: "母" }
      ]
    },
    {
      postIndex: 2,
      groupName: "名が決まった",
      participants: ["父", "母", "ご隠居", "寿限無", "隣の者"],
      messages: [
        {
          type: "system",
          text:
            "グループ名が「寿限無寿限無五劫の擦り切れ海砂利水魚水行末雲来末風来末食う寝るところに住むところやぶらこうじのぶらこうじパイポパイポパイポのシューリンガンシューリンガンのグーリンダイグーリンダイのポンポコピーのポンポコナーの長久命の長助」に変更されました"
        },
        { type: "message", sender: "母", text: "長い", isSelf: false, time: "10:03", avatarText: "母" },
        { type: "message", sender: "父", text: "めでたい", isSelf: false, time: "10:03", avatarText: "父" },
        { type: "message", sender: "ご隠居", text: "長い", isSelf: false, time: "10:04", avatarText: "隠" },
        { type: "message", sender: "父", text: "めでたいからよし", isSelf: false, time: "10:04", avatarText: "父" },
        { type: "message", sender: "寿限無", text: "長くない？", isSelf: true, time: "10:05", avatarText: "寿" },
        { type: "message", sender: "母", text: "本人が気づいたよ", isSelf: false, time: "10:05", avatarText: "母" },
        { type: "message", sender: "父", text: "立派な名だぞ", isSelf: false, time: "10:06", avatarText: "父" },
        { type: "message", sender: "寿限無", text: "呼ばれてるうちに用事終わりそう", isSelf: true, time: "10:06", avatarText: "寿" },
        { type: "message", sender: "ご隠居", text: "ほれ見なさい", isSelf: false, time: "10:07", avatarText: "隠" },
        { type: "message", sender: "父", text: "試しに呼んでみるか", isSelf: false, time: "10:07", avatarText: "父" },
        {
          type: "message",
          sender: "父",
          text:
            "寿限無寿限無\n五劫の擦り切れ\n海砂利水魚\n水行末 雲来末 風来末\n食う寝るところに住むところ\nやぶらこうじのぶらこうじ\nパイポパイポ\nパイポのシューリンガン\nシューリンガンのグーリンダイ\nグーリンダイのポンポコピーのポンポコナーの\n長久命の長助ー",
          isSelf: false,
          time: "10:08",
          emphasis: true,
          avatarText: "父"
        },
        { type: "message", sender: "寿限無", text: "なに", isSelf: true, time: "10:09", avatarText: "寿" },
        { type: "message", sender: "母", text: "何の用だったの", isSelf: false, time: "10:09", avatarText: "母" },
        { type: "message", sender: "父", text: "まだ考えてなかった", isSelf: false, time: "10:10", avatarText: "父" },
        { type: "message", sender: "寿限無", text: "呼ぶだけで終わった", isSelf: true, time: "10:10", avatarText: "寿" },
        { type: "message", sender: "ご隠居", text: "予想どおりだ", isSelf: false, time: "10:10", avatarText: "隠" },
        { type: "system", text: "隣の者がグループに参加しました" },
        { type: "message", sender: "隣の者", text: "お子の名が決まったと聞いて", isSelf: false, time: "10:14", avatarText: "隣" },
        { type: "message", sender: "父", text: "決まった", isSelf: false, time: "10:14", avatarText: "父" },
        { type: "message", sender: "隣の者", text: "なんという名で", isSelf: false, time: "10:15", avatarText: "隣" },
        { type: "message", sender: "母", text: "覚悟して聞きな", isSelf: false, time: "10:15", avatarText: "母" },
        {
          type: "message",
          sender: "父",
          text:
            "寿限無寿限無\n五劫の擦り切れ\n海砂利水魚\n水行末 雲来末 風来末\n食う寝るところに住むところ\nやぶらこうじのぶらこうじ\nパイポパイポ\nパイポのシューリンガン\nシューリンガンのグーリンダイ\nグーリンダイのポンポコピーのポンポコナーの\n長久命の長助",
          isSelf: false,
          time: "10:16",
          emphasis: true,
          avatarText: "父"
        },
        { type: "message", sender: "隣の者", text: "名というより経文だねえ", isSelf: false, time: "10:17", avatarText: "隣" },
        { type: "message", sender: "寿限無", text: "自分の名なのに途中で見失う", isSelf: true, time: "10:17", avatarText: "寿" }
      ]
    },
    {
      postIndex: 3,
      groupName: "池のほとり",
      participants: ["隣の者", "父", "母", "ご隠居", "寿限無"],
      messages: [
        { type: "system", text: "隣の者がグループ「池のほとり」を作成しました" },
        { type: "system", text: "父がグループに参加しました" },
        { type: "system", text: "母がグループに参加しました" },
        { type: "system", text: "ご隠居がグループに参加しました" },
        { type: "message", sender: "隣の者", text: "大変だ", isSelf: false, time: "14:01", avatarText: "隣" },
        { type: "message", sender: "母", text: "どうしたんだい", isSelf: false, time: "14:01", avatarText: "母" },
        { type: "message", sender: "隣の者", text: "寿限無寿限無", isSelf: false, time: "14:02", avatarText: "隣" },
        { type: "message", sender: "父", text: "うちの子だな", isSelf: false, time: "14:02", avatarText: "父" },
        { type: "message", sender: "隣の者", text: "五劫の擦り切れ", isSelf: false, time: "14:03", avatarText: "隣" },
        { type: "message", sender: "母", text: "それはそうなんだけど", isSelf: false, time: "14:03", avatarText: "母" },
        { type: "message", sender: "隣の者", text: "海砂利水魚\n水行末 雲来末 風来末", isSelf: false, time: "14:04", avatarText: "隣" },
        { type: "message", sender: "ご隠居", text: "先を急げ", isSelf: false, time: "14:04", avatarText: "隠" },
        { type: "message", sender: "隣の者", text: "食う寝るところに住むところ\nやぶらこうじのぶらこうじ\nパイポパイポ\nパイポのシューリンガン", isSelf: false, time: "14:05", avatarText: "隣" },
        { type: "message", sender: "父", text: "名は分かった\n何があった", isSelf: false, time: "14:06", avatarText: "父" },
        { type: "message", sender: "隣の者", text: "シューリンガンのグーリンダイ\nグーリンダイのポンポコピーのポンポコナーの", isSelf: false, time: "14:06", avatarText: "隣" },
        { type: "message", sender: "母", text: "そこは後でもいいよ", isSelf: false, time: "14:07", avatarText: "母" },
        { type: "message", sender: "隣の者", text: "長久命の長助が", isSelf: false, time: "14:07", avatarText: "隣" },
        { type: "message", sender: "父", text: "だから何があった", isSelf: false, time: "14:08", avatarText: "父" },
        { type: "message", sender: "隣の者", text: "池に落ちた", isSelf: false, time: "14:08", emphasis: true, avatarText: "隣" },
        { type: "message", sender: "父", text: "それを先に言わんか", isSelf: false, time: "14:09", avatarText: "父" },
        { type: "message", sender: "母", text: "無事なのかい", isSelf: false, time: "14:09", avatarText: "母" },
        { type: "message", sender: "隣の者", text: "もう引き上げた\n無事だ", isSelf: false, time: "14:10", avatarText: "隣" },
        { type: "message", sender: "寿限無", text: "今びしょびしょ", isSelf: true, time: "14:10", avatarText: "寿" },
        { type: "message", sender: "父", text: "無事ならよかった", isSelf: false, time: "14:11", avatarText: "父" },
        { type: "message", sender: "ご隠居", text: "だから長い名はよせと言ったのだ", isSelf: false, time: "14:11", avatarText: "隠" },
        { type: "message", sender: "寿限無", text: "呼ばれてる間に沈むかと思った", isSelf: true, time: "14:12", avatarText: "寿" },
        { type: "message", sender: "母", text: "笑いごとじゃないよ", isSelf: false, time: "14:12", avatarText: "母" },
        { type: "message", sender: "父", text: "でも無事だったし", isSelf: false, time: "14:13", avatarText: "父" },
        { type: "message", sender: "寿限無", text: "無事だったから言えるんだよ", isSelf: true, time: "14:13", avatarText: "寿" },
        { type: "message", sender: "ご隠居", text: "少し縮めぬか", isSelf: false, time: "14:14", avatarText: "隠" },
        { type: "message", sender: "父", text: "せっかく全部入れたしなあ", isSelf: false, time: "14:14", avatarText: "父" },
        { type: "message", sender: "寿限無", text: "そこだけは妙に執念深いね", isSelf: true, time: "14:15", avatarText: "寿" }
      ]
    }
  ]
};

window.STORY_DATA = STORY_DATA;
