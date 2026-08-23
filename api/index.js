export const config = { runtime: 'edge' };

const UNIT_DATABASE = {
  "SU1": {
    id: "SU1", title: "Starter Unit 1: Hello!", zh: "你好！",
    vocab: ["hello", "greet", "spell", "name", "fine", "thanks", "everyone", "teacher"],
    grammar: "be 动词 (am/is/are) 基础用法与姓名拼写"
  },
  "SU2": {
    id: "SU2", title: "Starter Unit 2: Keep Tidy!", zh: "保持整洁！",
    vocab: ["bottle", "eraser", "key", "tidy", "schoolbag", "cap", "under", "desk"],
    grammar: "方位介词 in / on / under 与 Where is/are 句型"
  },
  "SU3": {
    id: "SU3", title: "Starter Unit 3: Welcome!", zh: "欢迎！",
    vocab: ["welcome", "country", "China", "UK", "Canada", "live", "city", "age"],
    grammar: "be from 与 live in 表达籍贯与年龄"
  },
  "U1": {
    id: "U1", title: "Unit 1: You and Me", zh: "你和我",
    vocab: ["friendship", "classmate", "grade", "hobbies", "both", "band", "guitar"],
    grammar: "人称代词主格与形容词性物主代词综合运用"
  },
  "U2": {
    id: "U2", title: "Unit 2: We're Family!", zh: "我们是一家人！",
    vocab: ["member", "grandfather", "parent", "cousin", "uncle", "aunt", "photo", "together"],
    grammar: "名词所有格 ('s) 与指示代词 this/that/these/those"
  },
  "U3": {
    id: "U3", title: "Unit 3: My School", zh: "我的学校",
    vocab: ["building", "library", "hall", "sports field", "modern", "across", "between"],
    grammar: "There be 句型与学校场所方位表达"
  },
  "U4": {
    id: "U4", title: "Unit 4: My Favourite Subject", zh: "我最喜欢的学科",
    vocab: ["subject", "biology", "history", "geography", "useful", "exciting", "reason", "future"],
    grammar: "Why 疑问句与 because 原因状语从句（禁止 because/so 连用）"
  }
};

async function callSandboxedAI(message, unitId) {
  const unit = UNIT_DATABASE[unitId] || UNIT_DATABASE["SU1"];
  const apiKey = process.env.OPENAI_API_KEY || process.env.MOONSHOT_API_KEY;
  const baseURL = process.env.OPENAI_BASE_URL || process.env.MOONSHOT_BASE_URL || 'https://api.openai.com/v1';
  const model = process.env.AI_MODEL || 'gpt-3.5-turbo';

  const systemPrompt = `你叫 Ms. Smith，是人教版七年级上册英语老师。
当前学生正在学习：【${unit.title} - ${unit.zh}】
本单元目标词汇：[${unit.vocab.join(', ')}]
本单元核心语法：[${unit.grammar}]

【强制教学规则】：
1. 严禁回答与七年级上册【${unit.id}】无关的话题或超纲语法（如虚拟语气、高中句型等）。
2. 若学生提问偏离，必须使用如下句式拉回课文："That sounds interesting! But today let's master ${unit.id}. Can you try using '${unit.vocab[0]}' to make a sentence?"
3. 回复中必须包含本单元 1-2 个目标生词，并在最后留下一个初一难度的造句或口语任务。`;

  if (!apiKey) {
    const lower = message.toLowerCase();
    if (lower.includes("be") || lower.includes("am") || lower.includes("is") || lower.includes("are")) {
      return `🌟 **Ms. Smith 的语法锦囊：**\n记住口诀：我(I)用 **am**，你(you)用 **are**，**is** 连着他(he)她(she)它(it)！试着填空：*She ___ my English teacher.*`;
    }
    if (lower.includes("游戏") || lower.includes("原神") || lower.includes("数学")) {
      return `哈哈，这个话题很有趣！但现在是我们的英语探险时间，我们必须先攻克 **${unit.title}**！你可以尝试用本课重点词 <code>${unit.vocab[0]}</code> 来造个句子吗？`;
    }
    return `Good job! 结合我们正在学习的 **${unit.title}**，你可以尝试用单词 <code>${unit.vocab[0]}</code> 造一个简单的英语句子发给老师吗？`;
  }

  try {
    const res = await fetch(baseURL + '/chat/completions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + apiKey },
      body: JSON.stringify({
        model,
        messages: [{ role: 'system', content: systemPrompt }, { role: 'user', content: message }],
        temperature: 0.6,
        max_tokens: 500
      })
    });
    const data = await res.json();
    return data.choices[0].message.content;
  } catch (e) {
    return `Ms. Smith 听到了你的问题！在 **${unit.title}** 中，请记得多运用单词 <code>${unit.vocab[0]}</code> 哦！`;
  }
}

export default async function handler(request) {
  const url = new URL(request.url);
  const path = url.pathname;

  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
  };

  if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: corsHeaders });
  const json = (data, status = 200) => new Response(JSON.stringify(data), { status, headers: corsHeaders });

  try {
    if (path === '/api/units') {
      return json(Object.keys(UNIT_DATABASE).map(k => UNIT_DATABASE[k]));
    }

    if (path === '/api/chat' && request.method === 'POST') {
      const body = await request.json();
      const reply = await callSandboxedAI(body.message, body.unitId);
      return json({ reply });
    }

    return json({ ok: true, version: "5.0.0" });
  } catch (err) {
    return json({ error: err.message }, 500);
  }
}
