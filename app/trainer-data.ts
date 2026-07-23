export type Level = "beginner" | "intermediate" | "advanced";

export type TrainerItem = {
  jp: string;
  en: string;
  romaji?: string;
  note?: string;
  example?: string;
};

export type Category =
  | "starter"
  | "pattern"
  | "ender"
  | "scene"
  | "wildcard"
  | "idiom";

export const categoryMeta: Record<
  Category,
  { number: string; eyebrow: string; title: string; optional?: boolean }
> = {
  starter: {
    number: "一",
    eyebrow: "文の始まり",
    title: "Sentence starter",
  },
  pattern: {
    number: "二",
    eyebrow: "文型・構文",
    title: "Grammar construction",
  },
  ender: {
    number: "三",
    eyebrow: "結び方",
    title: "Sentence ending",
  },
  scene: {
    number: "四",
    eyebrow: "場面・レジスター",
    title: "Scene & register",
    optional: true,
  },
  wildcard: {
    number: "五",
    eyebrow: "ワイルドカード",
    title: "Wild-card word",
    optional: true,
  },
  idiom: {
    number: "六",
    eyebrow: "慣用句・ことわざ",
    title: "Japanese idiom",
    optional: true,
  },
};

export const levelMeta: Record<
  Level,
  { jp: string; en: string; descriptor: string }
> = {
  beginner: {
    jp: "初級",
    en: "Beginner",
    descriptor: "Build a clear, useful everyday sentence.",
  },
  intermediate: {
    jp: "中級",
    en: "Intermediate",
    descriptor: "Connect ideas and make your stance felt.",
  },
  advanced: {
    jp: "上級",
    en: "Advanced",
    descriptor: "Control implication, register, and rhythm.",
  },
};

const beginner = {
  starter: [
    {
      jp: "今日は、",
      romaji: "Kyō wa,",
      en: "Today…",
      note: "Set today as the topic.",
    },
    {
      jp: "私はよく、",
      romaji: "Watashi wa yoku,",
      en: "I often…",
      note: "Describe a habit.",
    },
    {
      jp: "今、",
      romaji: "Ima,",
      en: "Right now…",
      note: "Continue with an action in progress.",
    },
    {
      jp: "週末に、",
      romaji: "Shūmatsu ni,",
      en: "On the weekend…",
      note: "Use a time marker.",
    },
    {
      jp: "日本では、",
      romaji: "Nihon de wa,",
      en: "In Japan…",
      note: "Contrast Japan with another place.",
    },
    {
      jp: "子どものころ、",
      romaji: "Kodomo no koro,",
      en: "When I was a child…",
      note: "Tell a brief memory.",
    },
    {
      jp: "実は、",
      romaji: "Jitsu wa,",
      en: "Actually…",
      note: "Reveal something mildly unexpected.",
    },
    {
      jp: "たとえば、",
      romaji: "Tatoeba,",
      en: "For example…",
      note: "Give one concrete example.",
    },
    {
      jp: "最近、",
      romaji: "Saikin,",
      en: "Recently…",
      note: "Talk about a recent change.",
    },
    {
      jp: "もし時間があれば、",
      romaji: "Moshi jikan ga areba,",
      en: "If I have time…",
      note: "Make a simple conditional sentence.",
    },
  ],
  pattern: [
    {
      jp: "〜たいです",
      romaji: "…tai desu",
      en: "want to do…",
      note: "Attach たい to the verb stem.",
      example: "もっと自然に話したいです。",
    },
    {
      jp: "〜たことがあります",
      romaji: "…ta koto ga arimasu",
      en: "have done… before",
      note: "Use a past-tense verb before こと.",
      example: "沖縄に住んだことがあります。",
    },
    {
      jp: "〜ながら",
      romaji: "…nagara",
      en: "while doing…",
      note: "Two actions by the same person.",
      example: "音楽を聞きながら書きます。",
    },
    {
      jp: "〜ので",
      romaji: "…node",
      en: "because…",
      note: "Give a gentle, explanatory reason.",
      example: "暑いので、水を飲みます。",
    },
    {
      jp: "〜てもいいです",
      romaji: "…te mo ii desu",
      en: "it is okay to…",
      note: "Ask or give permission.",
      example: "ここに座ってもいいです。",
    },
    {
      jp: "〜なければなりません",
      romaji: "…nakereba narimasen",
      en: "must do…",
      note: "Express an obligation.",
      example: "明日、早く起きなければなりません。",
    },
    {
      jp: "〜ほうがいいです",
      romaji: "…hō ga ii desu",
      en: "it is better to…",
      note: "Offer direct advice.",
      example: "少し休んだほうがいいです。",
    },
    {
      jp: "〜つもりです",
      romaji: "…tsumori desu",
      en: "intend to…",
      note: "State a plan or intention.",
      example: "今年、小説を完成するつもりです。",
    },
    {
      jp: "〜と思います",
      romaji: "…to omoimasu",
      en: "I think that…",
      note: "Place a plain-form clause before と.",
      example: "この方法は役に立つと思います。",
    },
    {
      jp: "〜たり、〜たりします",
      romaji: "…tari, …tari shimasu",
      en: "do things such as… and…",
      note: "List representative actions.",
      example: "読んだり、書いたりします。",
    },
  ],
  ender: [
    {
      jp: "〜です。",
      romaji: "…desu.",
      en: "Finish politely and neutrally.",
    },
    {
      jp: "〜ます。",
      romaji: "…masu.",
      en: "Finish a polite action.",
    },
    {
      jp: "〜ですよ。",
      romaji: "…desu yo.",
      en: "Offer the information with emphasis.",
    },
    {
      jp: "〜ですね。",
      romaji: "…desu ne.",
      en: "Invite agreement or share a feeling.",
    },
    {
      jp: "〜ませんか。",
      romaji: "…masen ka.",
      en: "End with a polite invitation.",
    },
    {
      jp: "〜たいです。",
      romaji: "…tai desu.",
      en: "End by stating what you want.",
    },
    {
      jp: "〜と思います。",
      romaji: "…to omoimasu.",
      en: "Soften the claim as your opinion.",
    },
    {
      jp: "〜かもしれません。",
      romaji: "…kamo shiremasen.",
      en: "End with “might / perhaps.”",
    },
  ],
  scene: [
    {
      jp: "友だちとの会話",
      romaji: "Tomodachi to no kaiwa",
      en: "Casual conversation with a friend",
      note: "Keep it relaxed and concrete.",
    },
    {
      jp: "初対面の人と",
      romaji: "Shotaimen no hito to",
      en: "Speaking to someone you just met",
      note: "Use です／ます forms.",
    },
    {
      jp: "カフェで",
      romaji: "Kafe de",
      en: "At a café",
      note: "Make the sentence useful in the moment.",
    },
    {
      jp: "家族に",
      romaji: "Kazoku ni",
      en: "Speaking to family",
      note: "Natural, warm, and direct.",
    },
    {
      jp: "旅行中",
      romaji: "Ryokō-chū",
      en: "While traveling",
      note: "Ask, explain, or react.",
    },
    {
      jp: "仕事の場で",
      romaji: "Shigoto no ba de",
      en: "In a work setting",
      note: "Be clear and polite.",
    },
  ],
  wildcard: [
    {
      jp: "推し",
      romaji: "oshi",
      en: "favorite person / character you support",
      note: "Fandom language used far beyond anime.",
    },
    {
      jp: "めっちゃ",
      romaji: "meccha",
      en: "super / really",
      note: "Very casual intensifier.",
    },
    {
      jp: "アプリ",
      romaji: "apuri",
      en: "app",
      note: "A common clipped English loanword.",
    },
    {
      jp: "コンビニ",
      romaji: "konbini",
      en: "convenience store",
      note: "A daily-life English abbreviation.",
    },
    {
      jp: "やばい",
      romaji: "yabai",
      en: "wild / awful / amazing",
      note: "Meaning depends heavily on tone.",
    },
    {
      jp: "レベルアップ",
      romaji: "reberu appu",
      en: "level up / improve",
      note: "Game language used metaphorically.",
    },
    {
      jp: "ネタバレ",
      romaji: "netabare",
      en: "spoiler",
      note: "Literally revealing the story material.",
    },
    {
      jp: "マイペース",
      romaji: "mai pēsu",
      en: "at one’s own pace",
      note: "Wasei-eigo: Japanese-made English.",
    },
    {
      jp: "ガチ",
      romaji: "gachi",
      en: "serious / legit / for real",
      note: "Casual emphasis.",
    },
    {
      jp: "キャラ",
      romaji: "kyara",
      en: "character / persona",
      note: "Can mean a fictional character or public persona.",
    },
  ],
  idiom: [
    {
      jp: "一石二鳥",
      romaji: "isseki nichō",
      en: "kill two birds with one stone",
      note: "One action produces two benefits.",
      example: "歩いて通勤すれば、一石二鳥です。",
    },
    {
      jp: "七転び八起き",
      romaji: "nanakorobi yaoki",
      en: "fall seven times, rise eight",
      note: "Keep recovering from failure.",
      example: "七転び八起きの気持ちで続けます。",
    },
    {
      jp: "口が軽い",
      romaji: "kuchi ga karui",
      en: "unable to keep a secret",
      note: "Literally “the mouth is light.”",
      example: "彼は口が軽いから、気をつけて。",
    },
    {
      jp: "頭が切れる",
      romaji: "atama ga kireru",
      en: "be sharp-minded",
      note: "Used for someone clever and quick.",
      example: "彼女は本当に頭が切れます。",
    },
    {
      jp: "猫の手も借りたい",
      romaji: "neko no te mo karitai",
      en: "be desperately busy",
      note: "So busy you would even borrow a cat’s paw.",
      example: "締め切り前で、猫の手も借りたいです。",
    },
    {
      jp: "石の上にも三年",
      romaji: "ishi no ue ni mo sannen",
      en: "perseverance pays off",
      note: "Even a cold stone warms after three years.",
      example: "石の上にも三年だと思って、練習します。",
    },
  ],
};

const intermediate = {
  starter: [
    { jp: "とはいえ、", en: "That said…", note: "Qualify the previous idea." },
    { jp: "せっかくなので、", en: "Since we have the chance…", note: "Use an opportunity fully." },
    { jp: "考えてみれば、", en: "Come to think of it…", note: "Reconsider from a new angle." },
    { jp: "その一方で、", en: "On the other hand…", note: "Set up a contrast." },
    { jp: "どうやら、", en: "Apparently…", note: "Make an evidence-based inference." },
    { jp: "念のため、", en: "Just in case…", note: "Mention a precaution." },
    { jp: "正直に言うと、", en: "To be honest…", note: "Offer a candid reaction." },
    { jp: "〜に関して言えば、", en: "As for…", note: "Narrow the topic deliberately." },
    { jp: "今になって思うと、", en: "Looking back now…", note: "Reflect on the past." },
    { jp: "必ずしもそうとは限らず、", en: "That is not necessarily always so…", note: "Challenge an overgeneralization." },
  ],
  pattern: [
    { jp: "〜わけではない", en: "it is not that…", note: "Partially deny or qualify.", example: "嫌いなわけではないが、毎日は食べない。" },
    { jp: "〜ことになっている", en: "it is arranged / stipulated that…", note: "Rule or standing arrangement.", example: "会議は九時に始まることになっている。" },
    { jp: "〜ようにしている", en: "make a point of doing…", note: "Deliberate ongoing habit.", example: "毎日、日本語で日記を書くようにしている。" },
    { jp: "〜ばかりか", en: "not only… but also…", note: "Add a stronger second fact.", example: "彼は読むばかりか、自分でも小説を書く。" },
    { jp: "〜に違いない", en: "must surely be…", note: "Strong inference.", example: "あの反応を見ると、何か知っているに違いない。" },
    { jp: "〜ものの", en: "although…", note: "Written or measured concession.", example: "完成したものの、まだ納得していない。" },
    { jp: "〜おかげで／〜せいで", en: "thanks to… / because of…", note: "Choose positive or negative attribution.", example: "早く始めたおかげで、余裕ができた。" },
    { jp: "〜たびに", en: "every time…", note: "Repeated trigger and result.", example: "この曲を聞くたびに、沖縄を思い出す。" },
    { jp: "〜ことから", en: "from the fact that…", note: "Derive a conclusion or naming reason.", example: "形が星に似ていることから、この名がついた。" },
    { jp: "〜に対して", en: "toward / in contrast to…", note: "Target, opposition, or comparison.", example: "兄が慎重なのに対して、弟は大胆だ。" },
  ],
  ender: [
    { jp: "〜んじゃないかな。", en: "End with a casual, softened guess." },
    { jp: "〜という気がします。", en: "Frame it as an impression." },
    { jp: "〜と言えるでしょう。", en: "Offer a measured conclusion." },
    { jp: "〜わけです。", en: "Conclude with “which means…”" },
    { jp: "〜てみてはどうですか。", en: "End with a gentle suggestion." },
    { jp: "〜ざるを得ません。", en: "End with “have no choice but…”" },
    { jp: "〜に越したことはありません。", en: "End with “nothing beats…”" },
    { jp: "〜ということになります。", en: "State the resulting implication." },
  ],
  scene: [
    { jp: "親しい同僚との雑談", en: "Chatting with a close coworker", note: "Polite-casual, not textbook-stiff." },
    { jp: "SNSへの短い投稿", en: "A short social post", note: "Compact, current, and voice-forward." },
    { jp: "やんわり断る場面", en: "Turning something down gently", note: "Protect the relationship." },
    { jp: "作品について語る", en: "Talking about a creative work", note: "Give a specific interpretation." },
    { jp: "会議で意見を補足する", en: "Adding nuance in a meeting", note: "Clear but not absolute." },
    { jp: "昔の経験を振り返る", en: "Reflecting on an old experience", note: "Contrast then and now." },
    { jp: "パートナーとの相談", en: "Discussing a choice with your partner", note: "Natural, collaborative language." },
    { jp: "旅先で事情を説明する", en: "Explaining a situation while traveling", note: "Useful and socially aware." },
  ],
  wildcard: [
    { jp: "沼る", en: "fall deep into a fandom / obsession", note: "Internet and fan slang from 沼, “swamp.”" },
    { jp: "エモい", en: "emotionally evocative", note: "From English “emotional,” with broader Japanese use." },
    { jp: "詰んだ", en: "I’m stuck / it’s game over", note: "From a checkmated position in shogi." },
    { jp: "コスパ", en: "cost performance / value for money", note: "Clipped wasei-eigo." },
    { jp: "タイパ", en: "time performance / value for time", note: "A newer analogue to コスパ." },
    { jp: "解像度", en: "depth or clarity of understanding", note: "Literally “resolution,” now used abstractly." },
    { jp: "モブ", en: "background character / NPC-like person", note: "From English “mob,” common in anime/game talk." },
    { jp: "ワンチャン", en: "there’s a chance / maybe", note: "From “one chance,” casual slang." },
    { jp: "リスケ", en: "reschedule", note: "Business clipping of English." },
    { jp: "テンション", en: "energy / mood / excitement", note: "Not the English meaning of tension." },
    { jp: "尊い", en: "precious / too wonderful for words", note: "Common fan reaction; literally “noble.”" },
    { jp: "チート", en: "overpowered / unfairly strong", note: "Game and anime language from “cheat.”" },
  ],
  idiom: [
    { jp: "目から鱗が落ちる", en: "have one’s eyes opened", note: "A revelation changes how you see something.", example: "その説明を聞いて、目から鱗が落ちた。" },
    { jp: "釘を刺す", en: "give a firm warning in advance", note: "Prevent a future problem.", example: "遅れないように、彼に釘を刺しておいた。" },
    { jp: "腹を割って話す", en: "speak frankly and openly", note: "Drop the social armor.", example: "今夜は腹を割って話そう。" },
    { jp: "手を焼く", en: "have trouble handling someone or something", note: "A situation is difficult to manage.", example: "このバグにはずいぶん手を焼いた。" },
    { jp: "顔が広い", en: "be well-connected", note: "Know many people across a field.", example: "彼は出版業界で顔が広い。" },
    { jp: "話に花が咲く", en: "conversation becomes lively", note: "Usually around a shared topic or memory.", example: "昔の映画の話に花が咲いた。" },
    { jp: "郷に入っては郷に従え", en: "when in Rome, do as the Romans do", note: "Adapt to local customs.", example: "郷に入っては郷に従えで、まず周りを見よう。" },
    { jp: "出る杭は打たれる", en: "the nail that sticks out gets hammered down", note: "Visible nonconformity attracts pressure.", example: "出る杭は打たれるという空気がまだ残っている。" },
  ],
};

const advanced = {
  starter: [
    { jp: "皮肉なことに、", en: "Ironically…", note: "Set up an outcome contrary to intention." },
    { jp: "あえて言うなら、", en: "If I had to put it bluntly…", note: "Signal a deliberate, potentially risky claim." },
    { jp: "翻って考えると、", en: "Viewed from the reverse perspective…", note: "Pivot the frame of analysis." },
    { jp: "その是非はさておき、", en: "Leaving aside whether that is right or wrong…", note: "Bracket the normative question." },
    { jp: "ひるがえって現状を見れば、", en: "Turning back to the present situation…", note: "Return from context to current analysis." },
    { jp: "誤解を恐れずに言えば、", en: "At the risk of being misunderstood…", note: "Preface a provocative compression." },
    { jp: "一見したところ、", en: "At first glance…", note: "Prepare to complicate appearances." },
    { jp: "何をもって〜とするかはともかく、", en: "Setting aside what counts as…", note: "Question a category before proceeding." },
    { jp: "往々にして、", en: "More often than not…", note: "Make a literary generalization." },
    { jp: "つまるところ、", en: "When all is said and done…", note: "Compress the argument to its core." },
  ],
  pattern: [
    { jp: "〜ないまでも", en: "even if not quite…", note: "Offer a weaker but still significant degree.", example: "傑作とは言わないまでも、読む価値は十分にある。" },
    { jp: "〜を禁じ得ない", en: "cannot help but feel…", note: "Formal written reaction.", example: "その結末には同情を禁じ得ない。" },
    { jp: "〜と相まって", en: "coupled with…", note: "Two forces produce a combined effect.", example: "巧みな演出と音楽が相まって、忘れがたい場面になった。" },
    { jp: "〜にひきかえ", en: "in sharp contrast to…", note: "Often critical or evaluative.", example: "前作が大胆だったのにひきかえ、今回は手堅い。" },
    { jp: "〜を皮切りに", en: "starting with…", note: "First event in a continuing sequence.", example: "東京公演を皮切りに、全国を回る。" },
    { jp: "〜にかこつけて", en: "using… as a pretext", note: "The stated reason masks another motive.", example: "取材にかこつけて、昔の友人を訪ねた。" },
    { jp: "〜とて", en: "even / although…", note: "Literary concession.", example: "専門家とて、判断を誤ることはある。" },
    { jp: "〜ずにはおかない", en: "will inevitably / is bound to…", note: "A force compels a reaction.", example: "その告白は読者の胸を打たずにはおかない。" },
    { jp: "〜ともなく／〜ともなしに", en: "without consciously…", note: "Unintentional perception or action.", example: "見るともなく窓の外を眺めていた。" },
    { jp: "〜をよそに", en: "in disregard of…", note: "Act while ignoring concern or expectation.", example: "周囲の心配をよそに、本人は平然としていた。" },
  ],
  ender: [
    { jp: "〜と言わざるを得ない。", en: "Conclude reluctantly but firmly." },
    { jp: "〜にほかならない。", en: "Assert “is nothing other than…”" },
    { jp: "〜の謗りを免れない。", en: "Say it cannot escape the criticism of…" },
    { jp: "〜と見るのが妥当だろう。", en: "Offer a defensible analytical reading." },
    { jp: "〜という余地は残されている。", en: "Leave interpretive possibility open." },
    { jp: "〜かどうかは、なお検討を要する。", en: "Reserve judgment pending examination." },
    { jp: "〜と言っても過言ではあるまい。", en: "Make a formal “not an exaggeration” claim." },
    { jp: "〜という逆説が成り立つ。", en: "End by naming the paradox." },
  ],
  scene: [
    { jp: "批評文の一節", en: "A sentence of cultural criticism", note: "Precise judgment with room for complexity." },
    { jp: "小説の地の文", en: "Narrative prose in a novel", note: "Let syntax carry atmosphere." },
    { jp: "研究発表での留保", en: "A caveat in an academic presentation", note: "Control certainty and scope." },
    { jp: "丁寧だが厳しい反論", en: "A polite but forceful rebuttal", note: "Attack the claim, not the person." },
    { jp: "組織への提言", en: "A recommendation to an institution", note: "Name consequence and remedy." },
    { jp: "回想録の語り", en: "Memoir-like reflection", note: "Let present knowledge reshape the past." },
    { jp: "作品の帯文", en: "Promotional copy for a book", note: "Compressed, vivid, and memorable." },
    { jp: "歴史的類推", en: "A historical analogy", note: "Clarify both the parallel and its limit." },
  ],
  wildcard: [
    { jp: "世界観", en: "worldview / fictional world and its aesthetic logic", note: "Especially important in creative and fan discourse." },
    { jp: "伏線回収", en: "payoff of planted foreshadowing", note: "Literally “collecting foreshadowing.”" },
    { jp: "解釈一致", en: "your interpretation matches mine", note: "Fan shorthand for character fidelity." },
    { jp: "黒歴史", en: "embarrassing past best forgotten", note: "Coined through anime, now mainstream." },
    { jp: "オワコン", en: "has-been / no longer relevant", note: "Clipping of 終わったコンテンツ." },
    { jp: "メタい", en: "meta / self-referential", note: "Casual adjectival form of “meta.”" },
    { jp: "炎上", en: "online firestorm", note: "Literally “burst into flames.”" },
    { jp: "地雷", en: "deal-breaker / triggering disliked trope or person", note: "Literally “land mine”; context matters." },
    { jp: "アップデートする", en: "update one’s knowledge or assumptions", note: "English technical verb used conceptually." },
    { jp: "ナラティブ", en: "narrative / strategic framing", note: "Often used in criticism, policy, and business." },
    { jp: "余白", en: "interpretive or emotional negative space", note: "Aesthetic vocabulary used metaphorically." },
    { jp: "刺さる", en: "hit home / resonate deeply", note: "Literally “pierce” or “stick.”" },
  ],
  idiom: [
    { jp: "木を見て森を見ず", en: "miss the forest for the trees", note: "Fixate on details and lose the whole.", example: "数字だけを追うのは、木を見て森を見ずになりかねない。" },
    { jp: "風が吹けば桶屋が儲かる", en: "a distant event produces an unlikely chain of effects", note: "Often invokes indirect or dubious causality.", example: "まるで「風が吹けば桶屋が儲かる」式の論理だ。" },
    { jp: "毒を食らわば皿まで", en: "in for a penny, in for a pound", note: "Having gone this far, see it through—even recklessly.", example: "毒を食らわば皿までと、全資料を公開した。" },
    { jp: "仏作って魂入れず", en: "build the form but omit the soul", note: "A project lacks its essential finishing element.", example: "運用を考えない制度設計は、仏作って魂入れずだ。" },
    { jp: "鹿を追う者は山を見ず", en: "obsession with the prize blinds one to the surroundings", note: "Single-minded pursuit erases context.", example: "成長だけを求める姿勢は、鹿を追う者は山を見ずである。" },
    { jp: "喉元過ぎれば熱さを忘れる", en: "danger past, lesson forgotten", note: "People forget pain once the crisis passes.", example: "喉元過ぎれば熱さを忘れるでは、同じ失敗を繰り返す。" },
    { jp: "ミイラ取りがミイラになる", en: "the rescuer becomes one of the lost", note: "A person sent to retrieve another is drawn in too.", example: "説得に行った彼まで参加するとは、ミイラ取りがミイラだ。" },
    { jp: "羹に懲りて膾を吹く", en: "once bitten, twice shy—excessively so", note: "Burned by soup, one blows even on cold salad.", example: "一度の失敗で全案を退けるのは、羹に懲りて膾を吹くようなものだ。" },
  ],
};

export const trainerData: Record<
  Level,
  Record<Category, TrainerItem[]>
> = {
  beginner,
  intermediate,
  advanced,
};

