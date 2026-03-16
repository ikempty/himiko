// `STORY_DATA` を差し替えるだけで、別作品にそのまま転用できます。
// この版では「投稿」のみを使い、各投稿の中に messages を直接並べます。

const STORY_DATA = {
  workId: "momotaro",
  workTitle: "桃太郎",
  theme: {
    accentColor: "#79dd67",
    backgroundColor: "#2d2f30"
  },
  posts: [
    {
      postIndex: 1,
      groupName: "川で拾った桃の件",
      participants: ["おばあ", "おじい", "桃太郎"],
      messages: [
        { type: "system", text: "位置情報: 川辺ルートが共有されました" },
        { type: "message", sender: "おばあ", text: "ちょっと川行ってくる", isSelf: false, time: "08:12", avatarText: "お" },
        { type: "message", sender: "おじい", text: "いってらっしゃい", isSelf: false, time: "08:12", avatarText: "じ" },
        { type: "message", sender: "おばあ", text: "ちょっと待って", isSelf: false, time: "08:16", avatarText: "お" },
        { type: "message", sender: "おじい", text: "どうした", isSelf: false, time: "08:16", avatarText: "じ" },
        { type: "message", sender: "おばあ", text: "でっかい桃流れてきた", isSelf: false, time: "08:17", emphasis: true, avatarText: "お" },
        { type: "message", sender: "おじい", text: "桃？", isSelf: false, time: "08:17", avatarText: "じ" },
        { type: "message", sender: "おばあ", text: "うん\nかなり大きい", isSelf: false, time: "08:18", avatarText: "お" },
        { type: "message", sender: "おじい", text: "そんなことある？", isSelf: false, time: "08:18", avatarText: "じ" },
        { type: "message", sender: "おばあ", text: "私もそう思ったけど、今目の前にある", isSelf: false, time: "08:19", avatarText: "お" },
        { type: "message", sender: "おじい", text: "持てそうか", isSelf: false, time: "08:20", avatarText: "じ" },
        { type: "message", sender: "おばあ", text: "重いけど、なんとかなる", isSelf: false, time: "08:20", avatarText: "お" },
        { type: "message", sender: "おじい", text: "気をつけてな", isSelf: false, time: "08:21", avatarText: "じ" },
        { type: "message", sender: "おばあ", text: "今持って帰った", isSelf: false, time: "08:33", avatarText: "お" },
        { type: "message", sender: "おじい", text: "早いな", isSelf: false, time: "08:33", avatarText: "じ" },
        { type: "message", sender: "おばあ", text: "割るよ", isSelf: false, time: "08:34", avatarText: "お" },
        { type: "message", sender: "おじい", text: "頼む", isSelf: false, time: "08:34", avatarText: "じ" },
        { type: "message", sender: "桃太郎", text: "はじめまして", isSelf: true, time: "08:35", emphasis: true, avatarText: "桃" },
        { type: "message", sender: "おじい", text: "え？", isSelf: false, time: "08:35", avatarText: "じ" },
        { type: "message", sender: "おばあ", text: "桃の中にいた", isSelf: false, time: "08:35", avatarText: "お" },
        { type: "message", sender: "おじい", text: "いや待て\n話が急すぎる", isSelf: false, time: "08:36", avatarText: "じ" },
        { type: "message", sender: "おばあ", text: "名前どうする？", isSelf: false, time: "08:36", avatarText: "お" }
      ]
    },
    {
      postIndex: 2,
      groupName: "鬼ヶ島行くらしい",
      participants: ["桃太郎", "おじい", "おばあ", "イッヌ", "サル", "キジ"],
      messages: [
        { type: "message", sender: "おじい", text: "桃から来たし、桃太郎でいいんじゃないか", isSelf: false, time: "09:02", avatarText: "じ" },
        { type: "message", sender: "おばあ", text: "分かりやすくていいね", isSelf: false, time: "09:03", avatarText: "お" },
        { type: "message", sender: "桃太郎", text: "それでいこう", isSelf: true, time: "09:03", avatarText: "桃" },
        { type: "message", sender: "おじい", text: "納得も早いな", isSelf: false, time: "09:04", avatarText: "じ" },
        { type: "message", sender: "桃太郎", text: "じゃあ鬼ヶ島行ってくる", isSelf: true, time: "09:07", emphasis: true, avatarText: "桃" },
        { type: "message", sender: "おばあ", text: "急に話が大きいのよ", isSelf: false, time: "09:07", avatarText: "お" },
        { type: "message", sender: "おじい", text: "なんでまた", isSelf: false, time: "09:08", avatarText: "じ" },
        { type: "message", sender: "桃太郎", text: "鬼が村のもの取ってるらしいし", isSelf: true, time: "09:08", avatarText: "桃" },
        { type: "message", sender: "おばあ", text: "いきなり頼もしいこと言うね", isSelf: false, time: "09:09", avatarText: "お" },
        { type: "message", sender: "おじい", text: "これ持ってけ\nきびだんご", isSelf: false, time: "09:10", avatarText: "じ" },
        { type: "message", sender: "桃太郎", text: "助かる", isSelf: true, time: "09:10", avatarText: "桃" },
        { type: "message", sender: "イッヌ", text: "そのきびだんご、もらえますか", isSelf: false, time: "09:14", avatarText: "犬" },
        { type: "message", sender: "桃太郎", text: "1個でいいなら", isSelf: true, time: "09:15", avatarText: "桃" },
        { type: "message", sender: "イッヌ", text: "では、お供します", isSelf: false, time: "09:15", avatarText: "犬" },
        { type: "system", text: "イッヌがグループに参加しました" },
        { type: "message", sender: "サル", text: "自分も行ける", isSelf: false, time: "09:18", avatarText: "猿" },
        { type: "message", sender: "桃太郎", text: "じゃあ来て", isSelf: true, time: "09:18", avatarText: "桃" },
        { type: "system", text: "サルがグループに参加しました" },
        { type: "message", sender: "キジ", text: "上から見張れる", isSelf: false, time: "09:20", avatarText: "キ" },
        { type: "message", sender: "桃太郎", text: "それは強い", isSelf: true, time: "09:20", avatarText: "桃" },
        { type: "system", text: "キジがグループに参加しました" },
        { type: "message", sender: "おじい", text: "思ったよりしっかりした隊になってきたな", isSelf: false, time: "09:22", avatarText: "じ" },
        { type: "message", sender: "おばあ", text: "みんな気をつけるんだよ", isSelf: false, time: "09:23", avatarText: "お" },
        { type: "system", text: "位置情報: 鬼ヶ島ルートが共有されました" },
        { type: "message", sender: "桃太郎", text: "着いたら連絡する", isSelf: true, time: "09:24", avatarText: "桃" }
      ]
    },
    {
      postIndex: 3,
      groupName: "鬼退治隊",
      participants: ["桃太郎", "イッヌ", "サル", "キジ", "鬼", "おばあ", "おじい"],
      messages: [
        { type: "system", text: "位置情報: 鬼ヶ島付近が共有されました" },
        { type: "message", sender: "桃太郎", text: "着いた", isSelf: true, time: "11:42", avatarText: "桃" },
        { type: "message", sender: "イッヌ", text: "上陸完了です", isSelf: false, time: "11:42", avatarText: "犬" },
        { type: "message", sender: "サル", text: "行ける", isSelf: false, time: "11:43", avatarText: "猿" },
        { type: "message", sender: "キジ", text: "入口問題なさそう", isSelf: false, time: "11:43", avatarText: "キ" },
        { type: "message", sender: "鬼", text: "誰だお前ら", isSelf: false, time: "11:45", avatarText: "鬼" },
        { type: "message", sender: "桃太郎", text: "桃太郎", isSelf: true, time: "11:45", avatarText: "桃" },
        { type: "message", sender: "鬼", text: "知らん", isSelf: false, time: "11:45", avatarText: "鬼" },
        { type: "message", sender: "桃太郎", text: "村から取ったもの、返してもらう", isSelf: true, time: "11:46", avatarText: "桃" },
        { type: "message", sender: "鬼", text: "急に何なんだ", isSelf: false, time: "11:46", avatarText: "鬼" },
        { type: "message", sender: "イッヌ", text: "行きます", isSelf: false, time: "11:47", avatarText: "犬" },
        { type: "message", sender: "サル", text: "突っ込む", isSelf: false, time: "11:47", avatarText: "猿" },
        { type: "message", sender: "キジ", text: "上は押さえてる", isSelf: false, time: "11:48", avatarText: "キ" },
        { type: "message", sender: "鬼", text: "待て待て\n思ったより本気じゃないか", isSelf: false, time: "11:49", avatarText: "鬼" },
        { type: "message", sender: "桃太郎", text: "返すか？", isSelf: true, time: "11:49", avatarText: "桃" },
        { type: "message", sender: "鬼", text: "返す\n返すからやめてくれ", isSelf: false, time: "11:50", avatarText: "鬼" },
        { type: "message", sender: "桃太郎", text: "じゃあ今後は荒らすなよ", isSelf: true, time: "11:50", avatarText: "桃" },
        { type: "message", sender: "鬼", text: "もうしません", isSelf: false, time: "11:51", avatarText: "鬼" },
        { type: "message", sender: "おばあ", text: "どうだった", isSelf: false, time: "12:08", avatarText: "お" },
        { type: "message", sender: "桃太郎", text: "終わった", isSelf: true, time: "12:08", avatarText: "桃" },
        { type: "message", sender: "おじい", text: "無事か", isSelf: false, time: "12:08", avatarText: "じ" },
        { type: "message", sender: "桃太郎", text: "無事\n宝も回収した", isSelf: true, time: "12:09", avatarText: "桃" },
        { type: "message", sender: "おじい", text: "でかした", isSelf: false, time: "12:09", avatarText: "じ" },
        { type: "message", sender: "おばあ", text: "立派になったね", isSelf: false, time: "12:10", avatarText: "お" },
        { type: "message", sender: "桃太郎", text: "自分でもびっくりしてる", isSelf: true, time: "12:10", avatarText: "桃" }
      ]
    }
  ]
};

window.STORY_DATA = STORY_DATA;
