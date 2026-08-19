const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());

const defaultUser = { id: 1, name: '环球客', stars: 0, streak: 1, level: 1, completedStories: 0, completedMissions: 0 };

const defaultStories = [
  {
    id: 1,
    title: "The Lost Key",
    titleZh: "丢失的钥匙",
    emoji: "🔑",
    desc: "你在爷爷的旧阁楼里发现了一把神秘的钥匙，它通向一个你从未见过的世界……",
    difficulty: "初级",
    color: "#4A90D9",
    locked: false,
    progress: 0,
    chapters: [
      {
        title: "第一章：阁楼里的秘密",
        content: "It was a rainy Saturday afternoon. Emma climbed up the narrow stairs to her grandfather's attic. The air smelled of old books and dust. Suddenly, she noticed a small wooden box under a pile of blankets.\n\nInside the box, there was a golden key with strange symbols carved on it. Emma's heart beat faster. \"What does this key open?\" she wondered.\n\nShe ran downstairs to ask her grandfather, but he only smiled mysteriously and said, \"Some doors are meant to be opened by brave hearts.\"",
        words: [
          { w: "attic", p: "/ˈætɪk/", m: "n. 阁楼，顶楼", e: "The old photos were stored in the attic." },
          { w: "narrow", p: "/ˈnærəʊ/", m: "adj. 狭窄的", e: "The street was too narrow for cars." },
          { w: "carved", p: "/kɑːvd/", m: "adj. 雕刻的", e: "The wooden statue was beautifully carved." },
          { w: "mysteriously", p: "/mɪˈstɪəriəsli/", m: "adv. 神秘地", e: "He smiled mysteriously and said nothing." }
        ],
        choices: ["去花园寻找锁孔", "在阁楼继续搜索", "问奶奶这把钥匙的来历"]
      },
      {
        title: "第二章：花园的迷宫",
        content: "Emma decided to search the garden. Behind the rose bushes, she found a small iron gate she had never seen before. The key fit perfectly into the lock.\n\nWith a soft click, the gate swung open. Beyond it lay a beautiful garden full of glowing flowers and butterflies that shimmered like stars.\n\nA friendly fox approached her and spoke in perfect English: \"Welcome, Emma. We've been waiting for someone with a kind heart.\"",
        words: [
          { w: "bushes", p: "/ˈbʊʃɪz/", m: "n. 灌木丛（bush的复数）", e: "Rabbits often hide in the bushes." },
          { w: "glowing", p: "/ˈɡləʊɪŋ/", m: "adj. 发光的", e: "The glowing embers kept us warm." },
          { w: "shimmered", p: "/ˈʃɪməd/", m: "v. 闪烁，微微发光", e: "The lake shimmered in the moonlight." },
          { w: "approached", p: "/əˈprəʊtʃt/", m: "v. 靠近，接近", e: "The dog approached me slowly." }
        ],
        choices: ["跟随狐狸进入森林", "先摘一朵发光的花", "询问狐狸这里是什么地方"]
      },
      {
        title: "第三章：星光下的约定",
        content: "The fox led Emma to a crystal lake. In the center of the lake stood a magnificent tree with silver leaves. \"This is the Tree of Languages,\" the fox explained. \"Every word you learn here becomes a leaf on this tree.\"\n\nEmma reached out and touched a leaf. Suddenly, she could understand the songs of the birds and the whispers of the wind. She realized that learning English was not just about words—it was about opening doors to new worlds.\n\nWhen she returned home, the key had vanished, but the knowledge remained in her heart forever.",
        words: [
          { w: "crystal", p: "/ˈkrɪstl/", m: "n. 水晶；adj. 清澈透明的", e: "The crystal vase was very expensive." },
          { w: "magnificent", p: "/mæɡˈnɪfɪsnt/", m: "adj. 壮丽的，宏伟的", e: "The sunset over the ocean was magnificent." },
          { w: "whispers", p: "/ˈwɪspəz/", m: "n. 低语，耳语", e: "I could hear whispers from the next room." },
          { w: "vanished", p: "/ˈvænɪʃt/", m: "v. 消失", e: "The magician made the rabbit vanished." }
        ],
        ending: true
      }
    ]
  },
  {
    id: 2,
    title: "Space Station Alpha",
    titleZh: "阿尔法空间站",
    emoji: "🚀",
    desc: "你是阿尔法空间站最年轻的工程师，一场太阳风暴即将来临，你必须用英语与国际团队协作拯救空间站……",
    difficulty: "中级",
    color: "#9F7AEA",
    locked: true,
    progress: 0,
    chapters: [
      {
        title: "第一章：红色警报",
        content: "Red alarms blared across Space Station Alpha. Commander Zhang's voice came through the intercom: \"All crew to emergency stations. Solar storm detected. ETA: 45 minutes.\"\n\nYou grabbed your toolkit and rushed to the control room. Dr. Patel from India was already there, looking worried. \"The shield generator is offline,\" he said. \"We need to reroute power from Module B.\"\n\nYou looked at the complex control panel. Every button was labeled in English. This was the moment all your English lessons had prepared you for.",
        words: [
          { w: "blared", p: "/bleəd/", m: "v. 发出刺耳的声音", e: "The car horns blared in the traffic jam." },
          { w: "intercom", p: "/ˈɪntəkɒm/", m: "n. 对讲机，内部通话系统", e: "The principal spoke to us through the intercom." },
          { w: "reroute", p: "/ˌriːˈruːt/", m: "v. 改变路线，重新定向", e: "We had to reroute the flight due to bad weather." },
          { w: "module", p: "/ˈmɒdjuːl/", m: "n. 模块，组件", e: "This software module handles user login." }
        ],
        choices: ["尝试手动重启护盾", "联系地球指挥中心", "检查Module B的电路"]
      },
      {
        title: "第二章：跨洋协作",
        content: "You opened a video call with NASA engineer Sarah. \"Hey, we have a situation here,\" you said. Sarah nodded. \"I've seen this before. Check the auxiliary power grid—look for a red switch labeled 'Emergency Override'.\"\n\nYou found the switch and flipped it. The lights flickered, then stabilized. \"It's working!\" you shouted.\n\nDr. Patel gave you a high-five. \"Excellent teamwork. Your English really saved us today.\"\n\nThe storm hit, but the station held strong. Through the window, you watched the aurora dance across Earth's atmosphere—green, purple, and gold.",
        words: [
          { w: "auxiliary", p: "/ɔːɡˈzɪliəri/", m: "adj. 辅助的，备用的", e: "The auxiliary engine started when the main one failed." },
          { w: "override", p: "/ˌəʊvəˈraɪd/", m: "v./n. 推翻，覆盖", e: "The manager can override any decision." },
          { w: "flickered", p: "/ˈflɪkəd/", m: "v. 闪烁，摇曳", e: "The candle flickered in the wind." },
          { w: "aurora", p: "/ɔːˈrɔːrə/", m: "n. 极光", e: "We traveled to Iceland to see the aurora." }
        ],
        ending: true
      }
    ]
  },
  {
    id: 3,
    title: "The Chef's Secret",
    titleZh: "大厨的秘密",
    emoji: "🍳",
    desc: "你在伦敦的一家餐厅打工，主厨突然病倒，今晚有一位美食评论家要来，你必须用英语完成菜单并拯救餐厅……",
    difficulty: "中级",
    color: "#F6AD55",
    locked: true,
    progress: 0,
    chapters: [
      {
        title: "第一章：厨房危机",
        content: "\"The chef is in hospital!\" Maria cried, running into the kitchen. \"And the food critic from The London Times arrives in two hours!\"\n\nEveryone panicked. You were just a dishwasher, but you had been secretly watching the chef cook every night. You took a deep breath and stepped forward.\n\n\"I can do it,\" you said in English. \"But I need everyone to work together. Maria, you handle the appetizers. Tom, you're on desserts. I'll do the main courses.\"",
        words: [
          { w: "critic", p: "/ˈkrɪtɪk/", m: "n. 评论家，批评家", e: "The film critic gave the movie five stars." },
          { w: "appetizers", p: "/ˈæpɪtaɪzəz/", m: "n. 开胃菜", e: "We ordered some appetizers before the main course." },
          { w: "desserts", p: "/dɪˈzɜːts/", m: "n. 甜点", e: "Chocolate cake is my favorite dessert." },
          { w: "courses", p: "/kɔːsɪz/", m: "n. 一道菜（course的复数）", e: "The dinner had three courses." }
        ],
        choices: ["先做招牌牛排", "准备海鲜拼盘", "设计创意甜点"]
      },
      {
        title: "第二章：完美晚餐",
        content: "Two hours later, the critic sat at the best table. You served the first course: a delicate soup with edible flowers.\n\n\"Exquisite,\" the critic wrote in his notebook. The main course was your masterpiece—seared duck with berry sauce.\n\nWhen dessert arrived, a chocolate volcano that flowed like lava, the critic smiled. \"Young chef, where did you learn to cook like this?\"\n\nYou smiled and replied, \"I learned from the best—and I practiced my English recipes every night.\"\n\nThe next day, the review headline read: \"A Star Is Born in London's Kitchen.\"",
        words: [
          { w: "delicate", p: "/ˈdelɪkət/", m: "adj. 精致的，精美的", e: "She wore a delicate silk scarf." },
          { w: "edible", p: "/ˈedəbl/", m: "adj. 可食用的", e: "These berries are edible and delicious." },
          { w: "seared", p: "/sɪəd/", m: "adj. 煎的，烤的", e: "The seared salmon was perfectly cooked." },
          { w: "masterpiece", p: "/ˈmɑːstəpiːs/", m: "n. 杰作", e: "The Mona Lisa is a true masterpiece." }
        ],
        ending: true
      }
    ]
  }
];

const defaultMissions = [
  { id: 1, title: "早餐词汇挑战", emoji: "🍳", desc: "写出3个早餐食物的英文单词", color: "#F6AD55", reward: 15, completed: false, answer: ["bread", "egg", "milk", "cereal", "bacon", "pancake", "toast", "yogurt", "coffee", "tea", "juice", "butter"] },
  { id: 2, title: "自我介绍", emoji: "👋", desc: "用英语写一段自我介绍，至少30个词", color: "#4A90D9", reward: 20, completed: false, type: "input" },
  { id: 3, title: "颜色词汇", emoji: "🎨", desc: "写出5种颜色的英文单词", color: "#9F7AEA", reward: 15, completed: false, answer: ["red", "blue", "green", "yellow", "black", "white", "purple", "orange", "pink", "brown", "gray", "gold", "silver"] },
  { id: 4, title: "动物词汇", emoji: "🐾", desc: "写出4种动物的英文单词", color: "#48BB78", reward: 15, completed: false, answer: ["dog", "cat", "bird", "fish", "rabbit", "tiger", "lion", "elephant", "monkey", "panda", "bear", "wolf", "fox", "deer"] },
  { id: 5, title: "完成一个故事", emoji: "📖", desc: "在「故事冒险」中完成任意一个故事", color: "#FF6B35", reward: 30, completed: false }
];

const defaultBadges = [
  { id: 1, name: "初出茅庐", desc: "完成第1个故事", emoji: "🌱", unlocked: false, condition: "stories>=1" },
  { id: 2, name: "词汇收集者", desc: "收藏10个单词", emoji: "📚", unlocked: false, condition: "vocab>=10" },
  { id: 3, name: "任务达人", desc: "完成3个每日任务", emoji: "🎯", unlocked: false, condition: "missions>=3" },
  { id: 4, name: "英语新星", desc: "累计获得100颗星", emoji: "⭐", unlocked: false, condition: "stars>=100" },
  { id: 5, name: "故事大师", desc: "完成所有故事", emoji: "📖", unlocked: false, condition: "stories>=3" },
  { id: 6, name: "AI 好友", desc: "与AI对话10次", emoji: "🤖", unlocked: false, condition: "chats>=10" },
  { id: 7, name: "坚持不懈", desc: "连续学习7天", emoji: "🔥", unlocked: false, condition: "streak>=7" },
  { id: 8, name: "英语大师", desc: "达到Lv.5", emoji: "🏆", unlocked: false, condition: "level>=5" }
];

const defaultRoles = {
  teacher: { avatar: "👩‍🏫", name: "Ms. Smith", status: "你的专属英语老师" },
  penpal: { avatar: "🌍", name: "Tom", status: "来自英国的外国笔友" },
  grammar: { avatar: "📚", name: "Dr. Grammar", status: "语法专家，专治各种语法难题" }
};

let user = JSON.parse(JSON.stringify(defaultUser));
let stories = JSON.parse(JSON.stringify(defaultStories));
let missions = JSON.parse(JSON.stringify(defaultMissions));
let vocab = [];
let badges = JSON.parse(JSON.stringify(defaultBadges));
let chatHistory = [];
let roles = JSON.parse(JSON.stringify(defaultRoles));
let chatCount = 0;

function checkBadges() {
  const conditions = { stories: user.completedStories, vocab: vocab.length, missions: user.completedMissions, stars: user.stars, chats: chatCount, streak: user.streak, level: user.level };
  badges.forEach(b => { if (!b.unlocked) { const [k, v] = b.condition.split('>='); if (conditions[k] >= parseInt(v)) b.unlocked = true; } });
  return badges;
}

function calcLevel(stars) {
  const levels = [{ min: 0, name: 'Lv.1 探险新手', level: 1 }, { min: 50, name: 'Lv.2 词汇学徒', level: 2 }, { min: 120, name: 'Lv.3 故事猎人', level: 3 }, { min: 250, name: 'Lv.4 口语勇士', level: 4 }, { min: 400, name: 'Lv.5 英语大师', level: 5 }];
  for (let i = levels.length - 1; i >= 0; i--) if (stars >= levels[i].min) return levels[i];
  return levels[0];
}

// ==================== ROUTES (NO /api PREFIX!) ====================
app.get('/health', (req, res) => res.json({ ok: true, time: new Date().toISOString() }));
app.get('/me', (req, res) => { checkBadges(); res.json(user); });
app.get('/stories', (req, res) => res.json(stories));
app.post('/stories/:id/done', (req, res) => {
  const story = stories.find(s => s.id === parseInt(req.params.id));
  if (!story) return res.status(404).json({ error: 'Story not found' });
  if (story.progress < 100) { story.progress = 100; user.completedStories++; user.stars += 30; user.level = calcLevel(user.stars).level; const next = stories.find(s => s.id === story.id + 1); if (next) next.locked = false; }
  checkBadges(); res.json({ user, stories });
});
app.get('/missions', (req, res) => res.json(missions));
app.post('/missions/:id/complete', (req, res) => {
  const mission = missions.find(m => m.id === parseInt(req.params.id));
  if (!mission) return res.status(404).json({ error: 'Mission not found' });
  if (!mission.completed) { mission.completed = true; user.completedMissions++; user.stars += mission.reward || 10; user.level = calcLevel(user.stars).level; }
  checkBadges(); res.json({ user, missions });
});
app.get('/vocab', (req, res) => res.json(vocab));
app.post('/vocab', (req, res) => {
  const word = req.body;
  if (!word || !word.word) return res.status(400).json({ error: 'Invalid word data' });
  if (!vocab.find(v => v.word === word.word)) { vocab.push(word); user.stars += 3; user.level = calcLevel(user.stars).level; }
  checkBadges(); res.json({ vocab, user });
});
app.get('/badges', (req, res) => res.json(checkBadges()));
app.get('/roles', (req, res) => res.json(roles));
app.get('/chat/history', (req, res) => res.json(chatHistory));

async function callAI(messages, roleKey) {
  // 兼容 OpenAI / Moonshot / 其他兼容 OpenAI 格式的 API
  const apiKey = process.env.OPENAI_API_KEY || process.env.MOONSHOT_API_KEY || process.env["Moonshot API Key"];
  const baseURL = process.env.OPENAI_BASE_URL || process.env.MOONSHOT_BASE_URL || 'https://api.openai.com/v1';
  const model = process.env.AI_MODEL || 'gpt-3.5-turbo';
  const systemPrompts = {
    teacher: '你是一位耐心友好的初中英语老师，名叫 Ms. Smith。请用中文和英文混合回答（先给中文解释，再给英文例句）。回答要简洁、鼓励性强，适合初二学生理解。',
    penpal: '你是一个来自英国伦敦的14岁男孩Tom，正在和一个中国初中生做笔友。请用简单友好的英语回复，偶尔夹杂一点中文解释。语气要像朋友一样自然、活泼。',
    grammar: '你是一位严格的英语语法专家 Dr. Grammar。请专门解答英语语法问题，给出清晰的规则说明、常见错误对比和练习题。用中文解释语法概念，用英文给出例句。'
  };
  const system = systemPrompts[roleKey] || systemPrompts.teacher;
  if (!apiKey) return mockAIResponse(messages[messages.length - 1].content, roleKey);
  try {
    const response = await fetch(baseURL + '/chat/completions', {
      method: 'POST', headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + apiKey },
      body: JSON.stringify({ model, messages: [{ role: 'system', content: system }, ...messages], temperature: 0.7, max_tokens: 800 })
    });
    if (!response.ok) throw new Error('AI API error');
    const data = await response.json();
    return data.choices[0].message.content;
  } catch (err) { return mockAIResponse(messages[messages.length - 1].content, roleKey); }
}

function mockAIResponse(userMsg, roleKey) {
  const msg = userMsg.toLowerCase();
  if (msg.includes('完成') || msg.includes('have done') || msg.includes('present perfect')) return '**现在完成时 (Present Perfect Tense)**\\n\\n📌 **结构**：have/has + 过去分词 (done)\\n\\n📌 **用法**：\\n1. 表示过去发生的动作对现在有影响\\n   - I **have lost** my key. (我现在进不了门)\\n2. 表示从过去持续到现在的动作\\n   - She **has lived** here for 10 years.\\n\\n📌 **标志词**：already, yet, ever, never, since, for\\n\\n✅ **例句**：\\n- Have you **finished** your homework?\\n- I **have never been** to Paris.\\n\\n💡 **小练习**：\\n"She _______ (study) English _______ three years."\\n答案：She **has studied** English **for** three years.';
  if (msg.includes('作文') || msg.includes('writing') || msg.includes('essay')) return '好的！我来帮你改作文。请把你的作文发给我，我会：\\n\\n1. **标出语法错误**并解释原因\\n2. **给出更地道的表达**\\n3. **提供修改后的完整版本**\\n\\n📝 **初二作文常见错误**：\\n- 时态混乱\\n- 冠词遗漏（a/an/the）\\n- 主谓不一致\\n- 中式英语直译\\n\\n把你的作文粘贴到下面，我马上帮你改！✍️';
  if (msg.includes('词汇') || msg.includes('vocabulary') || msg.includes('单词')) return '📚 **初二英语高频词汇 Top 5**\\n\\n1. **achieve** /əˈtʃiːv/ — 达到，实现\\n   - If you work hard, you will **achieve** your goal.\\n\\n2. **environment** /ɪnˈvaɪrənmənt/ — 环境\\n   - We should protect the **environment**.\\n\\n3. **experience** /ɪkˈspɪəriəns/ — 经历，经验\\n   - Traveling gives you valuable **experience**.\\n\\n4. **opportunity** /ˌɒpəˈtjuːnəti/ — 机会\\n   - Don\\'t miss this great **opportunity**.\\n\\n5. **responsibility** /rɪˌspɒnsəˈbɪləti/ — 责任\\n   - It\\'s your **responsibility** to finish homework.';
  if (msg.includes('口语') || msg.includes('speaking') || msg.includes('爱好') || msg.includes('hobby')) return '🎤 **口语练习：介绍爱好**\\n\\n**模板**：\\n> My hobby is **___**. I have been interested in it since I was **___** years old. I usually **___** on weekends. It makes me feel **___** because **___.**\\n\\n**示例**：\\n> My hobby is **playing basketball**. I have been interested in it since I was **ten** years old. I usually **play with my friends** on weekends. It makes me feel **happy and energetic** because **exercise is good for health**.\\n\\n🎯 **你的任务**：用这个模板介绍你的爱好，发给我，我来帮你润色！';
  if (msg.includes('阅读') || msg.includes('reading') || msg.includes('技巧')) return '📖 **英语阅读题解题技巧**\\n\\n**1. 先看题目，再找答案**\\n**2. 找关键词 (Key Words)**\\n**3. 同义替换是考点**\\n**4. 主旨题看首尾段**\\n**5. 猜词题看上下文**\\n\\n💡 **实战演练**：\\n如果题目问 "What does \'abundant\' mean?"\\n看原文："The forest was abundant with fruits and animals."\\n→ 答案是 **rich / plentiful（丰富的）**\\n\\n试试用这些技巧做一篇阅读题吧！';
  const defaults = { teacher: '你好！我是你的英语老师 Ms. Smith。😊\\n\\n你可以问我：\\n• 语法问题（如：现在完成时怎么用？）\\n• 单词意思和用法\\n• 作文修改\\n• 阅读理解技巧\\n\\n请把你的问题发给我吧！', penpal: 'Hey there! 👋 I\\'m Tom from London. Nice to meet you!\\n\\nI love playing football and listening to music. What about you? Do you have any hobbies?\\n\\nFeel free to ask me anything about life in the UK or practice English with me!', grammar: 'Greetings! I am Dr. Grammar. 📚\\n\\nI specialize in analyzing English grammar structures and correcting common mistakes.\\n\\nYou may ask me about:\\n• Tense usage\\n• Sentence structures\\n• Prepositions\\n• Clause analysis\\n\\nState your grammar question clearly, and I shall provide a thorough explanation.' };
  return defaults[roleKey] || defaults.teacher;
}

app.post('/chat', async (req, res) => {
  const { message, role } = req.body;
  if (!message) return res.status(400).json({ error: 'Message is required' });
  const roleKey = role || 'teacher';
  chatHistory.push({ role: 'user', content: message });
  if (chatHistory.length > 20) chatHistory = chatHistory.slice(-20);
  const reply = await callAI(chatHistory.map(m => ({ role: m.role, content: m.content })), roleKey);
  chatHistory.push({ role: 'assistant', content: reply });
  chatCount++;
  if (chatCount % 5 === 0) { user.stars += 1; user.level = calcLevel(user.stars).level; }
  checkBadges(); res.json({ reply, user });
});

app.post('/reset', (req, res) => {
  user = JSON.parse(JSON.stringify(defaultUser));
  stories = JSON.parse(JSON.stringify(defaultStories));
  missions = JSON.parse(JSON.stringify(defaultMissions));
  vocab = [];
  badges = JSON.parse(JSON.stringify(defaultBadges));
  chatHistory = [];
  chatCount = 0;
  res.json({ ok: true });
});

module.exports = app;
