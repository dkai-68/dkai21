export const config = { runtime: 'edge' };

/* ===================== 内联教材数据（人教版七年级上册 SU1-SU3）===================== */
const CONTENT_DATA = {"meta": {"publisher": "人民教育出版社", "grade": "七年级上册", "version": "2024", "total_units": 10, "target_cefr": "A1-A2"}, "gamification": {"checkin": {"rewards": [5, 5, 10, 10, 15, 15, 30], "streak_freeze": {"enabled": true, "max_count": 3, "earn_every": 7}, "milestones": [{"days": 7, "reward": 50, "badge": "坚持不懈", "title": "连续7天"}, {"days": 14, "reward": 100, "badge": "习惯养成", "title": "连续14天"}, {"days": 30, "reward": 200, "badge": "学习达人", "title": "连续30天"}, {"days": 100, "reward": 500, "badge": "百日战神", "title": "连续100天"}]}, "levels": [{"level": 1, "name": "探险新手", "min_stars": 0, "badge": "🌱", "color": "#48BB78"}, {"level": 2, "name": "词汇学徒", "min_stars": 50, "badge": "📖", "color": "#4A90D9"}, {"level": 3, "name": "故事猎人", "min_stars": 120, "badge": "⭐", "color": "#9F7AEA"}, {"level": 4, "name": "口语勇士", "min_stars": 250, "badge": "🔥", "color": "#FF6B35"}, {"level": 5, "name": "英语大师", "min_stars": 400, "badge": "🏆", "color": "#D69E2E"}]}, "units": [{"unit_id": "SU1", "title_en": "Hello!", "title_zh": "你好！", "emoji": "👋", "difficulty": "starter", "grammar_focus": ["问候语", "自我介绍", "be动词: am/is/are"], "is_locked": false, "unlock_condition": null, "vocab": [{"word": "hello", "phonetic": "/həˈləʊ/", "meaning": "int. 你好；喂", "example": "Hello, I'm Tom. 你好，我是汤姆。", "image_hint": "挥手"}, {"word": "hi", "phonetic": "/haɪ/", "meaning": "int. 嗨；喂", "example": "Hi, nice to meet you. 嗨，很高兴认识你。", "image_hint": "微笑"}, {"word": "I", "phonetic": "/aɪ/", "meaning": "pron. 我", "example": "I am a student. 我是一名学生。", "image_hint": "指自己"}, {"word": "you", "phonetic": "/juː/", "meaning": "pron. 你；你们", "example": "How are you? 你好吗？", "image_hint": "指对方"}, {"word": "am", "phonetic": "/æm/", "meaning": "v. 是（用于I之后）", "example": "I am fine. 我很好。", "image_hint": "等号"}, {"word": "is", "phonetic": "/ɪz/", "meaning": "v. 是（用于he/she/it之后）", "example": "She is my friend. 她是我的朋友。", "image_hint": "等号"}, {"word": "are", "phonetic": "/ɑː(r)/", "meaning": "v. 是（用于you/we/they之后）", "example": "You are kind. 你很友善。", "image_hint": "等号"}, {"word": "name", "phonetic": "/neɪm/", "meaning": "n. 名字", "example": "My name is Gina. 我的名字是吉娜。", "image_hint": "姓名牌"}, {"word": "nice", "phonetic": "/naɪs/", "meaning": "adj. 令人愉快的；友好的", "example": "Nice to meet you! 很高兴认识你！", "image_hint": "笑脸"}, {"word": "meet", "phonetic": "/miːt/", "meaning": "v. 遇见；相逢", "example": "Nice to meet you too. 我也很高兴认识你。", "image_hint": "握手"}, {"word": "too", "phonetic": "/tuː/", "meaning": "adv. 也；又；太", "example": "I like English too. 我也喜欢英语。", "image_hint": "加号"}, {"word": "Ms", "phonetic": "/mɪz/", "meaning": "n. 女士（不指明婚否）", "example": "Ms Wang is our teacher. 王老师是我们的老师。", "image_hint": "女士"}, {"word": "Mr", "phonetic": "/ˈmɪstə(r)/", "meaning": "n. 先生", "example": "Mr Li is my father. 李先生是我的爸爸。", "image_hint": "先生"}, {"word": "Miss", "phonetic": "/mɪs/", "meaning": "n. 小姐；女士（未婚）", "example": "Miss Green is nice. 格林小姐很友好。", "image_hint": "年轻女士"}, {"word": "goodbye", "phonetic": "/ˌɡʊdˈbaɪ/", "meaning": "int. 再见", "example": "Goodbye! See you tomorrow. 再见！明天见。", "image_hint": "挥手告别"}, {"word": "bye", "phonetic": "/baɪ/", "meaning": "int. 再见", "example": "Bye! Have a good day. 再见！祝你今天愉快。", "image_hint": "挥手"}, {"word": "fine", "phonetic": "/faɪn/", "meaning": "adj. 健康的；美好的", "example": "I'm fine, thanks. 我很好，谢谢。", "image_hint": "竖起大拇指"}, {"word": "thanks", "phonetic": "/θæŋks/", "meaning": "int. 谢谢", "example": "Thanks a lot. 非常感谢。", "image_hint": "鞠躬"}, {"word": "how", "phonetic": "/haʊ/", "meaning": "adv. 怎样；如何", "example": "How do you do? 你好！", "image_hint": "问号"}, {"word": "do", "phonetic": "/duː/", "meaning": "aux. 助动词", "example": "How do you spell it? 你怎么拼写它？", "image_hint": "做动作"}, {"word": "spell", "phonetic": "/spel/", "meaning": "v. 拼写", "example": "Can you spell your name? 你能拼写你的名字吗？", "image_hint": "字母"}], "key_sentences": [{"en": "Hello! I'm Tom.", "zh": "你好！我是汤姆。", "audio_mark": "hello_intro"}, {"en": "Hi, my name is Gina.", "zh": "嗨，我的名字是吉娜。", "audio_mark": "hi_name"}, {"en": "Nice to meet you!", "zh": "很高兴认识你！", "audio_mark": "nice_meet"}, {"en": "Nice to meet you too.", "zh": "我也很高兴认识你。", "audio_mark": "nice_meet_too"}, {"en": "How are you?", "zh": "你好吗？", "audio_mark": "how_are_you"}, {"en": "I'm fine, thanks.", "zh": "我很好，谢谢。", "audio_mark": "fine_thanks"}, {"en": "Goodbye! See you.", "zh": "再见！回头见。", "audio_mark": "goodbye"}], "lessons": [{"type": "story", "id": "SU1_STORY", "title": "开学第一天 · First Day", "emoji": "📖", "duration_min": 8, "chapters": [{"chapter_id": 1, "title_zh": "第一章：开学第一天", "title_en": "Chapter 1: First Day at School", "content": "今天是开学的第一天。\n\nToday is the first day of school.\n\n李明走进教室，看见一位新同学。\n\nLi Ming walks into the classroom and sees a new classmate.\n\n他微笑着说：\"你好！我是李明。\"\n\nHe smiles and says, \"Hello! I'm Li Ming.\"\n\n新同学回答：\"嗨，很高兴认识你！我是王芳。\"\n\nThe new classmate replies, \"Hi, nice to meet you! I'm Wang Fang.\"", "words_highlight": ["hello", "nice", "meet", "I", "am"], "quiz": {"question": "\"Nice to meet you\" 是什么意思？", "options": ["再见", "很高兴认识你", "你好吗", "谢谢"], "answer": 1}}, {"chapter_id": 2, "title_zh": "第二章：新来的外教老师", "title_en": "Chapter 2: The New Foreign Teacher", "content": "上课铃响了。\n\nThe bell rings.\n\n一位金发女士走进教室。\n\nA lady with blonde hair walks into the classroom.\n\n她说：\"大家好！我是史密斯女士，你们的英语老师。\"\n\nShe says, \"Hello everyone! I'm Ms Smith, your English teacher.\"\n\n同学们齐声回答：\"您好，史密斯女士！\"\n\nThe students answer together, \"Hello, Ms Smith!\"\n\n史密斯女士笑着说：\"你们可以叫我 Ms S。\"\n\nMs Smith smiles and says, \"You can call me Ms S.\"", "words_highlight": ["Ms", "teacher", "everyone", "your", "call"], "quiz": {"question": "Ms 用于称呼？", "options": ["男士", "已婚女士", "不指明婚否的女士", "小女孩"], "answer": 2}}, {"chapter_id": 3, "title_zh": "第三章：放学后的友谊", "title_en": "Chapter 3: Friendship After School", "content": "放学了，天空下起了小雨。\n\nSchool is over, and it's raining lightly.\n\n王芳忘记带伞，站在教学楼门口。\n\nWang Fang forgot her umbrella and stands at the school gate.\n\n李明走过来说：\"我们一起走吧！\"\n\nLi Ming comes over and says, \"Let's go together!\"\n\n王芳开心地说：\"太好了，谢谢你！\"\n\nWang Fang says happily, \"Great, thank you!\"\n\n两人在雨中走着，李明说：\"明天见！\"\n\nThey walk in the rain, and Li Ming says, \"See you tomorrow!\"\n\n王芳挥手：\"再见！明天见！\"\n\nWang Fang waves, \"Goodbye! See you tomorrow!\"", "words_highlight": ["thank", "together", "see", "tomorrow", "goodbye"], "ending": true}]}, {"type": "grammar", "id": "SU1_GRAM", "title": "be动词入门 · 我是/你是/他是", "emoji": "📚", "duration_min": 5, "content": {"rule_summary": "我(I)用 am，你(you)用 are，is 跟着他(he)她(she)它(it)", "formula": [{"subject": "I", "be": "am", "example_en": "I am a student.", "example_zh": "我是一名学生。"}, {"subject": "You", "be": "are", "example_en": "You are nice.", "example_zh": "你很友好。"}, {"subject": "He/She/It", "be": "is", "example_en": "She is my teacher.", "example_zh": "她是我的老师。"}], "tips": ["am 只能和 I 搭配使用", "are 可以和 you/we/they 搭配", "记住口诀：我用am，你用are，is连着他她它"], "common_mistakes": [{"wrong": "I is a boy.", "correct": "I am a boy.", "explain": "I 后面必须用 am"}, {"wrong": "You is good.", "correct": "You are good.", "explain": "You 后面必须用 are"}]}, "quiz": [{"q": "I ___ a student.", "options": ["am", "is", "are", "be"], "a": 0, "explain": "I 后面用 am"}, {"q": "She ___ my friend.", "options": ["am", "is", "are", "be"], "a": 1, "explain": "She 后面用 is"}, {"q": "You ___ very kind.", "options": ["am", "is", "are", "be"], "a": 2, "explain": "You 后面用 are"}]}, {"type": "listening", "id": "SU1_LISTEN", "title": "听力练习：初次见面", "emoji": "🎧", "duration_min": 5, "audio_text": "W: Hello! I'm Jenny. What's your name?\nM: Hi, Jenny! My name is Tom. Nice to meet you.\nW: Nice to meet you too. Are you a new student?\nM: Yes, I am. I'm in Class 3.\nW: Great! I'm in Class 3 too.\nM: Oh, we are classmates!", "questions": [{"q": "What's the girl's name?", "options": ["Tom", "Jenny", "Mary", "Linda"], "a": 1}, {"q": "What class are they in?", "options": ["Class 1", "Class 2", "Class 3", "Class 4"], "a": 2}, {"q": "Are they classmates?", "options": ["Yes, they are.", "No, they aren't.", "We don't know.", "Maybe."], "a": 0}]}, {"type": "exam", "id": "SU1_EXAM", "title": "你好！ · 单元小测", "emoji": "📝", "duration_min": 10, "question_count": 15}]}, {"unit_id": "SU2", "title_en": "Keep Tidy!", "title_zh": "保持整洁！", "emoji": "🎒", "difficulty": "starter", "grammar_focus": ["方位介词 in/on/under", "颜色词汇", "文具名称"], "is_locked": true, "unlock_condition": {"type": "previous_unit_score", "min_score": 60}, "vocab": [{"word": "keep", "phonetic": "/kiːp/", "meaning": "v. 保持", "example": "Keep your room tidy. 保持你的房间整洁。", "image_hint": "整理"}, {"word": "tidy", "phonetic": "/ˈtaɪdi/", "meaning": "adj. 整洁的", "example": "My desk is tidy. 我的书桌很整洁。", "image_hint": "干净桌面"}, {"word": "schoolbag", "phonetic": "/ˈskuːlbæɡ/", "meaning": "n. 书包", "example": "This is my schoolbag. 这是我的书包。", "image_hint": "书包"}, {"word": "cap", "phonetic": "/kæp/", "meaning": "n. 帽子", "example": "I have a red cap. 我有一顶红色的帽子。", "image_hint": "帽子"}, {"word": "bottle", "phonetic": "/ˈbɒtl/", "meaning": "n. 瓶子", "example": "A bottle of water. 一瓶水。", "image_hint": "水瓶"}, {"word": "eraser", "phonetic": "/ɪˈreɪzə(r)/", "meaning": "n. 橡皮", "example": "I need an eraser. 我需要一块橡皮。", "image_hint": "橡皮"}, {"word": "key", "phonetic": "/kiː/", "meaning": "n. 钥匙", "example": "Where is my key? 我的钥匙在哪里？", "image_hint": "钥匙"}, {"word": "thing", "phonetic": "/θɪŋ/", "meaning": "n. 东西；事情", "example": "What thing is this? 这是什么东西？", "image_hint": "问号"}, {"word": "need", "phonetic": "/niːd/", "meaning": "v. 需要", "example": "I need a pen. 我需要一支钢笔。", "image_hint": "需要"}, {"word": "where", "phonetic": "/weə(r)/", "meaning": "adv. 在哪里", "example": "Where is my book? 我的书在哪里？", "image_hint": "地图标记"}, {"word": "in", "phonetic": "/ɪn/", "meaning": "prep. 在……里面", "example": "The pen is in the box. 钢笔在盒子里。", "image_hint": "里面"}, {"word": "on", "phonetic": "/ɒn/", "meaning": "prep. 在……上面", "example": "The book is on the desk. 书在书桌上。", "image_hint": "上面"}, {"word": "under", "phonetic": "/ˈʌndə(r)/", "meaning": "prep. 在……下面", "example": "The cat is under the chair. 猫在椅子下面。", "image_hint": "下面"}, {"word": "desk", "phonetic": "/desk/", "meaning": "n. 书桌", "example": "Sit at your desk. 坐在你的书桌旁。", "image_hint": "书桌"}, {"word": "chair", "phonetic": "/tʃeə(r)/", "meaning": "n. 椅子", "example": "This is my chair. 这是我的椅子。", "image_hint": "椅子"}, {"word": "ruler", "phonetic": "/ˈruːlə(r)/", "meaning": "n. 尺子", "example": "I have a long ruler. 我有一把长尺子。", "image_hint": "尺子"}, {"word": "pen", "phonetic": "/pen/", "meaning": "n. 钢笔", "example": "This pen is blue. 这支钢笔是蓝色的。", "image_hint": "钢笔"}, {"word": "pencil", "phonetic": "/ˈpensl/", "meaning": "n. 铅笔", "example": "I write with a pencil. 我用铅笔写字。", "image_hint": "铅笔"}, {"word": "orange", "phonetic": "/ˈɒrɪndʒ/", "meaning": "n. 橙子；adj. 橙色的", "example": "An orange orange. 一个橙色的橙子。", "image_hint": "橙子"}, {"word": "colour", "phonetic": "/ˈkʌlə(r)/", "meaning": "n. 颜色", "example": "What colour is it? 它是什么颜色的？", "image_hint": "调色盘"}], "key_sentences": [], "lessons": [{"type": "story", "id": "SU2_STORY", "title": "整洁小达人 · Tidy Master", "emoji": "📖", "duration_min": 8, "chapters": [{"chapter_id": 1, "title_zh": "第一章：凌乱的书包", "title_en": "Chapter 1: The Messy Schoolbag", "content": "早上，小明找不到他的橡皮。\n\nIn the morning, Xiaoming can't find his eraser.\n\n他翻遍了整个书包。\n\nHe searches through his whole schoolbag.\n\n\"我的橡皮在哪里？\" 他自言自语。\n\n\"Where is my eraser?\" he says to himself.\n\n妈妈走过来说：\"保持整洁，东西才好找。\"\n\nMom comes over and says, \"Keep tidy, then things are easy to find.\"\n\n小明低下头，看见橡皮就在椅子下面！\n\nXiaoming looks down and sees the eraser is right under the chair!", "words_highlight": ["where", "schoolbag", "eraser", "under", "chair", "keep", "tidy"], "quiz": {"question": "小明的橡皮在哪里？", "options": ["在书包里", "在椅子上", "在椅子下面", "在桌子上"], "answer": 2}}, {"chapter_id": 2, "title_zh": "第二章：颜色密码", "title_en": "Chapter 2: The Colour Code", "content": "课堂上，老师让大家整理文具。\n\nIn class, the teacher asks everyone to tidy up their stationery.\n\n\"把红色的东西放在桌子上，\"老师说。\n\n\"Put red things on the desk,\" says the teacher.\n\n小红举起她的红帽子说：\"我的帽子是红色的！\"\n\nXiaohong raises her red cap and says, \"My cap is red!\"\n\n小刚举起橙色的水瓶说：\"我的瓶子是橙色的！\"\n\nXiaogang raises his orange bottle and says, \"My bottle is orange!\"\n\n老师笑着说：\"很好！颜色让我们的世界更美丽。\"\n\nThe teacher smiles and says, \"Very good! Colours make our world more beautiful.\"", "words_highlight": ["colour", "red", "orange", "bottle", "cap", "desk"], "quiz": {"question": "什么东西是橙色的？", "options": ["帽子", "水瓶", "橡皮", "书包"], "answer": 1}}, {"chapter_id": 3, "title_zh": "第三章：整洁小达人", "title_en": "Chapter 3: The Tidy Master", "content": "放学后，小明决定整理自己的房间。\n\nAfter school, Xiaoming decides to tidy his room.\n\n他把钢笔和铅笔放进笔盒。\n\nHe puts his pens and pencils into the pencil case.\n\n把尺子放在书包里。\n\nHe puts the ruler in his schoolbag.\n\n把钥匙挂在墙上。\n\nHe hangs the key on the wall.\n\n妈妈看到后惊喜地说：\"哇，你真是个整洁小达人！\"\n\nMom sees this and says surprisingly, \"Wow, you are really a tidy master!\"\n\n小明开心地回答：\"保持整洁，从我做起！\"\n\nXiaoming replies happily, \"Keep tidy, start with me!\"", "words_highlight": ["put", "pencil", "ruler", "key", "wall", "tidy"], "ending": true}]}, {"type": "grammar", "id": "SU2_GRAM", "title": "方位介词 · in / on / under", "emoji": "📚", "duration_min": 5, "content": {"rule_summary": "in 在里面，on 在上面，under 在下面", "formula": [{"word": "in", "meaning": "在……里面", "example_en": "The cat is in the box.", "example_zh": "猫在盒子里面。", "icon": "📦"}, {"word": "on", "meaning": "在……上面", "example_en": "The book is on the desk.", "example_zh": "书在书桌上面。", "icon": "📖"}, {"word": "under", "meaning": "在……下面", "example_en": "The ball is under the chair.", "example_zh": "球在椅子下面。", "icon": "⚽"}], "tips": ["in 像是一个人躲进了房间", "on 像是一本书平放在桌面上", "under 像是一只猫躲在桌子底下"], "common_mistakes": [{"wrong": "The pen is on the box.（钢笔在盒子里）", "correct": "The pen is in the box.", "explain": "在容器内部用 in"}]}, "quiz": [{"q": "The cat is ___ the bed.（猫在床下面）", "options": ["in", "on", "under", "at"], "a": 2, "explain": "under 表示在……下面"}, {"q": "My book is ___ the schoolbag.", "options": ["in", "on", "under", "to"], "a": 0, "explain": "在书包里面用 in"}]}, {"type": "listening", "id": "SU2_LISTEN", "title": "听力练习：找东西", "emoji": "🎧", "duration_min": 5, "audio_text": "M: Mum, where is my cap?\nW: Is it in your schoolbag?\nM: No, it isn't.\nW: Is it on your desk?\nM: No.\nW: Look! It's under your chair.\nM: Oh, yes! Thanks, Mum.", "questions": [{"q": "What is the boy looking for?", "options": ["His schoolbag.", "His cap.", "His desk.", "His chair."], "a": 1}, {"q": "Where is the cap?", "options": ["In the schoolbag.", "On the desk.", "Under the chair.", "On the chair."], "a": 2}]}, {"type": "exam", "id": "SU2_EXAM", "title": "保持整洁！ · 单元小测", "emoji": "📝", "duration_min": 10, "question_count": 15}]}, {"unit_id": "SU3", "title_en": "Welcome!", "title_zh": "欢迎！", "emoji": "🎉", "difficulty": "starter", "grammar_focus": ["自我介绍", "国家名称", "年龄表达"], "is_locked": true, "unlock_condition": {"type": "previous_unit_score", "min_score": 60}, "vocab": [{"word": "welcome", "phonetic": "/ˈwelkəm/", "meaning": "v. 欢迎", "example": "Welcome to our school! 欢迎来到我们学校！", "image_hint": "欢迎"}, {"word": "class", "phonetic": "/klɑːs/", "meaning": "n. 班级；课", "example": "I'm in Class 1. 我在一班。", "image_hint": "教室"}, {"word": "student", "phonetic": "/ˈstjuːdnt/", "meaning": "n. 学生", "example": "I am a student. 我是一名学生。", "image_hint": "学生"}, {"word": "number", "phonetic": "/ˈnʌmbə(r)/", "meaning": "n. 数字；号码", "example": "What's your phone number? 你的电话号码是多少？", "image_hint": "数字"}, {"word": "phone", "phonetic": "/fəʊn/", "meaning": "n. 电话", "example": "I have a new phone. 我有一部新电话。", "image_hint": "电话"}, {"word": "age", "phonetic": "/eɪdʒ/", "meaning": "n. 年龄", "example": "What is your age? 你多大了？", "image_hint": "生日蛋糕"}, {"word": "old", "phonetic": "/əʊld/", "meaning": "adj. 老的；旧的；……岁的", "example": "I am 13 years old. 我13岁。", "image_hint": "老人"}, {"word": "year", "phonetic": "/jɪə(r)/", "meaning": "n. 年", "example": "A year has 12 months. 一年有12个月。", "image_hint": "日历"}, {"word": "friend", "phonetic": "/frend/", "meaning": "n. 朋友", "example": "She is my best friend. 她是我最好的朋友。", "image_hint": "朋友"}, {"word": "people", "phonetic": "/ˈpiːpl/", "meaning": "n. 人们", "example": "Many people are here. 很多人在这里。", "image_hint": "人群"}, {"word": "from", "phonetic": "/frɒm/", "meaning": "prep. 从……来", "example": "I am from China. 我来自中国。", "image_hint": "地图"}, {"word": "China", "phonetic": "/ˈtʃaɪnə/", "meaning": "n. 中国", "example": "China is a big country. 中国是一个大国。", "image_hint": "国旗"}, {"word": "America", "phonetic": "/əˈmerɪkə/", "meaning": "n. 美国", "example": "He is from America. 他来自美国。", "image_hint": "美国"}, {"word": "UK", "phonetic": "/ˌjuːˈkeɪ/", "meaning": "n. 英国", "example": "The UK has a king. 英国有一位国王。", "image_hint": "英国"}, {"word": "Canada", "phonetic": "/ˈkænədə/", "meaning": "n. 加拿大", "example": "Canada is very cold. 加拿大很冷。", "image_hint": "枫叶"}, {"word": "Australia", "phonetic": "/ɒˈstreɪliə/", "meaning": "n. 澳大利亚", "example": "Kangaroos live in Australia. 袋鼠生活在澳大利亚。", "image_hint": "袋鼠"}, {"word": "live", "phonetic": "/lɪv/", "meaning": "v. 居住；生活", "example": "I live in Beijing. 我住在北京。", "image_hint": "房子"}, {"word": "city", "phonetic": "/ˈsɪti/", "meaning": "n. 城市", "example": "Beijing is a big city. 北京是一座大城市。", "image_hint": "城市"}, {"word": "about", "phonetic": "/əˈbaʊt/", "meaning": "prep. 关于", "example": "Tell me about yourself. 告诉我关于你自己的事。", "image_hint": "对话"}, {"word": "favorite", "phonetic": "/ˈfeɪvərɪt/", "meaning": "adj. 最喜欢的", "example": "My favorite colour is blue. 我最喜欢的颜色是蓝色。", "image_hint": "爱心"}], "key_sentences": [], "lessons": [{"type": "story", "id": "SU3_STORY", "title": "世界在我们的教室 · World in Class", "emoji": "📖", "duration_min": 8, "chapters": [{"chapter_id": 1, "title_zh": "第一章：欢迎新同学", "title_en": "Chapter 1: Welcome the New Student", "content": "今天，班里来了一位新同学。\n\nToday, a new student comes to the class.\n\n老师笑着说：\"欢迎来到七年级一班！\"\n\nThe teacher smiles and says, \"Welcome to Class 1, Grade 7!\"\n\n新同学用不太流利的中文说：\"谢谢，我来自美国。\"\n\nThe new student says in not very fluent Chinese, \"Thank you, I am from America.\"\n\n同学们都好奇地看着他。\n\nAll the classmates look at him curiously.\n\n李明第一个站起来说：\"你好！我叫李明，住在北京。我们可以做朋友吗？\"\n\nLi Ming is the first to stand up and says, \"Hello! My name is Li Ming, I live in Beijing. Can we be friends?\"", "words_highlight": ["welcome", "from", "America", "live", "friend"], "quiz": {"question": "新同学来自哪里？", "options": ["中国", "美国", "英国", "加拿大"], "answer": 1}}, {"chapter_id": 2, "title_zh": "第二章：自我介绍大会", "title_en": "Chapter 2: Self-Introduction Meeting", "content": "老师让大家用英语自我介绍。\n\nThe teacher asks everyone to introduce themselves in English.\n\n小红站起来说：\"大家好，我13岁。我最喜欢的颜色是红色。\"\n\nXiaohong stands up and says, \"Hello everyone, I am 13 years old. My favorite colour is red.\"\n\n轮到新同学了。他深吸一口气说：\"大家好，我叫杰克。我14岁。我来自美国的纽约市。\"\n\nIt's the new student's turn. He takes a deep breath and says, \"Hello everyone, my name is Jack. I am 14 years old. I am from New York City, America.\"\n\n同学们鼓掌说：\"欢迎，杰克！\"\n\nThe classmates clap and say, \"Welcome, Jack!\"", "words_highlight": ["introduce", "old", "year", "favorite", "city"], "quiz": {"question": "杰克今年几岁？", "options": ["12岁", "13岁", "14岁", "15岁"], "answer": 2}}, {"chapter_id": 3, "title_zh": "第三章：世界在我们的教室", "title_en": "Chapter 3: The World in Our Classroom", "content": "下课后，同学们围着杰克问问题。\n\nAfter class, classmates gather around Jack and ask questions.\n\n\"你住在美国哪里？\" 小明问。\n\n\"Where do you live in America?\" Xiaoming asks.\n\n\"我住在洛杉矶，\"杰克回答，\"那里阳光很好。\"\n\n\"I live in Los Angeles,\" Jack answers, \"The sunshine there is very good.\"\n\n小红兴奋地说：\"我叔叔住在澳大利亚！那里有袋鼠！\"\n\nXiaohong says excitedly, \"My uncle lives in Australia! There are kangaroos there!\"\n\n杰克笑着说：\"世界真小！我们来自不同的地方，但现在是朋友了。\"\n\nJack smiles and says, \"The world is so small! We are from different places, but now we are friends.\"\n\n大家一起说：\"欢迎加入我们的大家庭！\"\n\nEveryone says together, \"Welcome to our big family!\"", "words_highlight": ["live", "Australia", "kangaroo", "different", "family"], "ending": true}]}, {"type": "grammar", "id": "SU3_GRAM", "title": "自我介绍句型 · I am from... / I live in...", "emoji": "📚", "duration_min": 5, "content": {"rule_summary": "介绍自己来自哪里用 from，介绍自己住在哪里用 live in", "formula": [{"pattern": "I am from + 国家/城市", "example_en": "I am from China.", "example_zh": "我来自中国。"}, {"pattern": "I live in + 城市", "example_en": "I live in Beijing.", "example_zh": "我住在北京。"}, {"pattern": "I am + 数字 + years old", "example_en": "I am 13 years old.", "example_zh": "我13岁。"}], "tips": ["from 后面接大地方（国家/城市）", "live in 后面接你实际居住的城市", "years old 可以省略，直接说 I'm 13."]}, "quiz": [{"q": "I ___ from Canada.", "options": ["am", "is", "are", "be"], "a": 0, "explain": "I 后面用 am"}, {"q": "I ___ in Shanghai.", "options": ["am", "live", "from", "is"], "a": 1, "explain": "住在某地用 live in"}, {"q": "___ are you from?", "options": ["What", "Where", "Who", "How"], "a": 1, "explain": "问来自哪里用 Where"}]}, {"type": "listening", "id": "SU3_LISTEN", "title": "听力练习：新朋友", "emoji": "🎧", "duration_min": 5, "audio_text": "W: Hello! Are you the new student?\nM: Yes, I am. My name is Tom.\nW: Nice to meet you, Tom. I'm Lucy. Where are you from?\nM: I'm from Canada. I live in Toronto.\nW: Oh, Canada! How old are you?\nM: I'm 13 years old.\nW: Great! I'm 13 too. Welcome to our class!", "questions": [{"q": "Where is Tom from?", "options": ["America", "China", "Canada", "UK"], "a": 2}, {"q": "How old is Tom?", "options": ["12", "13", "14", "15"], "a": 1}, {"q": "Where does Tom live?", "options": ["Beijing", "Toronto", "New York", "London"], "a": 1}]}, {"type": "exam", "id": "SU3_EXAM", "title": "欢迎！ · 单元小测", "emoji": "📝", "duration_min": 10, "question_count": 15}]}]};

/* ===================== 数据转换层：新格式 → 旧格式兼容 ===================== */
function initDataFromContent() {
  const stories = [];
  const lessons = [];
  const units = [];
  let lessonIdCounter = 201;

  CONTENT_DATA.units.forEach((unit, idx) => {
    const unitNum = idx + 1;
    const baseId = 100 + unitNum;

    // --- 1. 提取故事（映射到旧 phase1Stories 格式）---
    const storyLesson = unit.lessons.find(l => l.type === 'story');
    if (storyLesson) {
      const story = {
        id: baseId + 1, // 101, 102, 103...
        phase: 1,
        title: unit.title_en + ' · ' + unit.title_zh,
        emoji: unit.emoji,
        desc: '同步教材：' + unit.title_zh + ' — ' + unit.grammar_focus.join('、'),
        difficulty: unit.difficulty === 'starter' ? '入门' : (unit.difficulty === 'easy' ? '基础' : '进阶'),
        color: ['#4A90D9', '#9F7AEA', '#48BB78', '#FF6B35', '#38B2AC'][idx % 5],
        locked: unit.is_locked,
        progress: 0,
        chapters: storyLesson.chapters.map((ch, cidx) => ({
          title: ch.title_zh,
          titleEn: ch.title_en,
          content: ch.content,
          contentZh: ch.content.split('\n\n').filter(line => /[\u4e00-\u9fa5]/.test(line)).join('\n'),
          words: unit.vocab.filter(v => ch.words_highlight && ch.words_highlight.includes(v.word)).map(v => ({
            w: v.word,
            p: v.phonetic,
            m: v.meaning,
            e: v.example
          })),
          choices: ch.ending ? [] : ['继续阅读 📖 Continue', '查看词汇 📚 Vocabulary', '返回目录 ↩️ Back'],
          hasQuiz: !!ch.quiz,
          quiz: ch.quiz ? {
            question: ch.quiz.question,
            options: ch.quiz.options,
            answer: ch.quiz.answer
          } : undefined,
          ending: ch.ending || false
        }))
      };
      stories.push(story);
    }

    // --- 2. 提取语法/听力（映射到旧 phase2Lessons 格式）---
    unit.lessons.filter(l => l.type === 'grammar' || l.type === 'listening').forEach(l => {
      if (l.type === 'grammar') {
        lessons.push({
          id: lessonIdCounter++,
          phase: 2,
          type: 'grammar',
          title: l.title,
          emoji: l.emoji,
          desc: unit.grammar_focus.join('、'),
          locked: unit.is_locked,
          completed: false,
          content: {
            rule: l.content.rule_summary,
            examples: (l.content.formula || []).map(f => ({
              en: f.example_en || f.pattern,
              zh: f.example_zh || ''
            })),
            tips: (l.content.tips || []).join('\n')
          },
          quiz: (l.quiz || []).map((q, qidx) => ({
            q: q.q,
            options: q.options,
            a: q.a,
            explain: q.explain
          }))
        });
      }
      if (l.type === 'listening') {
        lessons.push({
          id: lessonIdCounter++,
          phase: 2,
          type: 'listening',
          title: l.title,
          emoji: l.emoji,
          desc: '同步' + unit.title_zh,
          locked: unit.is_locked,
          completed: false,
          audioText: l.audio_text,
          questions: (l.questions || []).map(q => ({
            q: q.q,
            options: q.options,
            a: q.a
          }))
        });
      }
    });

    // --- 3. 提取教材单元（映射到旧 phase3Units 格式）---
    units.push({
      id: 300 + unitNum,
      phase: 3,
      title: unit.title_en + ' · ' + unit.title_zh,
      emoji: unit.emoji,
      book: '人教版七年级上',
      locked: unit.is_locked,
      words: unit.vocab.map(v => ({
        w: v.word,
        p: v.phonetic,
        m: v.meaning,
        e: v.example
      })),
      keySentences: (unit.key_sentences || []).map(s => s.en + ' ' + s.zh),
      grammar: (unit.grammar_focus || []).join('；')
    });
  });

  return { stories, lessons, units };
}

/* ==================== 数据模型（保留原有默认值）==================== */

const defaultUser = {
  id: 1, name: '环球客', stars: 0, streak: 1, level: 1,
  completedStories: 0, completedMissions: 0, completedExams: 0,
  checkInDays: [], lastCheckIn: null, vip: false, chatCount: 0,
  registeredAt: null, grade: '7', englishLevel: 'beginner'
};

// 从 content.json 初始化数据
const { stories: phase1Stories, lessons: phase2Lessons, units: phase3Units } = initDataFromContent();

// ===== 模拟考试题库（保留并扩展）=====
const examBank = {
  "SU1-exam": {
    title: "Starter Unit 1 · 单元小测",
    time: 10,
    questions: [
      {
        type: "choice",
        title: "词汇与语法",
        items: [
          { q: "—How are you?\n—___", options: ["I'm fine, thanks.", "My name is Tom.", "Nice to meet you.", "Goodbye."], a: 0, explain: "How are you? 的回答通常是 I'm fine, thanks." },
          { q: "___ name is Gina.", options: ["I", "My", "Me", "Mine"], a: 1, explain: "name 是名词，前面用形容词性物主代词 My。" },
          { q: "Nice to meet you, ___.", options: ["to", "too", "two", "toe"], a: 1, explain: "too 表示'也'，用于句末。" }
        ]
      },
      {
        type: "listening",
        title: "听力理解",
        audioText: "W: Hello! I'm Jenny. What's your name?\nM: Hi, Jenny! My name is Tom. Nice to meet you.\nW: Nice to meet you too. Are you a new student?\nM: Yes, I am. I'm in Class 3.",
        items: [
          { q: "What's the girl's name?", options: ["Tom", "Jenny", "Mary", "Linda"], a: 1 },
          { q: "What class is the boy in?", options: ["Class 1", "Class 2", "Class 3", "Class 4"], a: 2 }
        ]
      }
    ]
  },
  "SU2-exam": {
    title: "Starter Unit 2 · 单元小测",
    time: 10,
    questions: [
      {
        type: "choice",
        title: "词汇与语法",
        items: [
          { q: "The cat is ___ the box.", options: ["in", "on", "under", "at"], a: 0, explain: "在盒子里面用 in。" },
          { q: "___ is my eraser?", options: ["What", "Where", "Who", "How"], a: 1, explain: "问地点用 Where。" },
          { q: "Keep your room ___.", options: ["tidy", "tidy up", "tidies", "tidying"], a: 0, explain: "keep + 形容词，tidy 作形容词表示整洁的。" }
        ]
      }
    ]
  },
  "SU3-exam": {
    title: "Starter Unit 3 · 单元小测",
    time: 10,
    questions: [
      {
        type: "choice",
        title: "词汇与语法",
        items: [
          { q: "I am ___ China.", options: ["from", "in", "at", "on"], a: 0, explain: "be from 表示来自某地。" },
          { q: "___ old are you?", options: ["What", "Where", "How", "Who"], a: 2, explain: "问年龄用 How old。" },
          { q: "I ___ in Beijing.", options: ["am", "live", "from", "is"], a: 1, explain: "live in + 城市 表示居住在某地。" }
        ]
      }
    ]
  },
  "7-mid": {
    title: "七年级上册期中模拟",
    time: 45,
    questions: [
      {
        type: "listening",
        title: "听力理解",
        audioText: "M: Hi, Alice! Is this your ruler?\nW: No, it isn't. My ruler is blue. This one is green.\nM: Oh, sorry. Is that your dictionary on the desk?\nW: Yes, it is. Thank you!",
        items: [
          { q: "What color is Alice's ruler?", options: ["Green", "Blue", "Red", "Yellow"], a: 1 },
          { q: "What's on the desk?", options: ["A ruler", "A pen", "A dictionary", "A book"], a: 2 }
        ]
      },
      {
        type: "choice",
        title: "单项选择",
        items: [
          { q: "___ name is Mike. ___ is my friend.", options: ["His; He", "He; His", "His; His", "He; He"], a: 0, explain: "第一空修饰name用形容词性物主代词His，第二空作主语用主格He。" },
          { q: "—Is this ___ pen?\n—Yes, it is.", options: ["you", "your", "yours", "my"], a: 1, explain: "修饰名词pen用形容词性物主代词your。" },
          { q: "Those are my ___ .", options: ["parent", "sister", "brother", "parents"], a: 3, explain: "Those are 后接复数名词。" }
        ]
      },
      {
        type: "cloze",
        title: "完形填空",
        passage: "My name is Tom. I am a middle school student. I have a big family. My father is a doctor and my mother is a teacher. I have a sister. ___ name is Lucy. She is 8 years old. We often play ___ together.",
        items: [
          { q: "1. ___ name is Lucy.", options: ["His", "Her", "My", "Your"], a: 1 },
          { q: "2. We often play ___ together.", options: ["games", "game", "the game", "a games"], a: 0 }
        ]
      },
      {
        type: "reading",
        title: "阅读理解",
        passage: "Hello! I'm Gina. I'm 12 years old. I'm in Class 3, Grade 7. I like English very much. My English teacher is Miss Wang. She is kind to us. I have a good friend. Her name is Linda. She likes sports. She has 3 basketballs and 2 soccer balls.",
        items: [
          { q: "How old is Gina?", options: ["10", "11", "12", "13"], a: 2 },
          { q: "What class is Gina in?", options: ["Class 1", "Class 2", "Class 3", "Class 4"], a: 2 },
          { q: "What does Linda like?", options: ["English", "Sports", "Music", "Art"], a: 1 },
          { q: "How many basketballs does Linda have?", options: ["2", "3", "4", "5"], a: 1 }
        ]
      },
      {
        type: "writing",
        title: "书面表达",
        prompt: "请以\"My Friend\"为题，写一篇不少于40词的短文，介绍你的一位朋友（姓名、年龄、爱好等）。",
        sample: "My Friend\nI have a good friend. His name is Li Ming. He is 13 years old. He likes playing basketball and reading books. We often play together after school. He is very kind. I like him very much."
      }
    ]
  }
};

const defaultMissions = [
  { id: 1, phase: 1, title: "首次签到", emoji: "📅", desc: "完成今日签到，开启学习之旅", color: "#4A90D9", reward: 10, completed: false, type: "checkin" },
  { id: 2, phase: 1, title: "故事探险家", emoji: "📖", desc: "完成第一个英语故事", color: "#FF6B35", reward: 20, completed: false, type: "story" },
  { id: 3, phase: 1, title: "词汇收集者", emoji: "⭐", desc: "收藏5个单词到词库", color: "#9F7AEA", reward: 15, completed: false, type: "vocab", target: 5 },
  { id: 4, phase: 2, title: "语法小达人", emoji: "📚", desc: "完成2个语法微课", color: "#48BB78", reward: 20, completed: false, type: "grammar", target: 2 },
  { id: 5, phase: 2, title: "听力练习生", emoji: "🎧", desc: "完成1个听力练习", color: "#F6AD55", reward: 15, completed: false, type: "listening" },
  { id: 6, phase: 3, title: "模拟考试", emoji: "📝", desc: "完成一次模拟考试", color: "#E53E3E", reward: 30, completed: false, type: "exam" },
  { id: 7, phase: 3, title: "单元通关", emoji: "🎯", desc: "学完一个教材单元", color: "#38B2AC", reward: 25, completed: false, type: "unit" }
];

const defaultBadges = [
  { id: 1, name: "初出茅庐", desc: "完成首次签到", emoji: "🌱", unlocked: false, condition: "checkin>=1" },
  { id: 2, name: "故事探险家", desc: "完成1个故事", emoji: "📖", unlocked: false, condition: "stories>=1" },
  { id: 3, name: "词汇收集者", desc: "收藏10个单词", emoji: "📚", unlocked: false, condition: "vocab>=10" },
  { id: 4, name: "语法小达人", desc: "完成5个语法微课", emoji: "🧠", unlocked: false, condition: "grammar>=5" },
  { id: 5, name: "听力之星", desc: "完成3个听力练习", emoji: "🎧", unlocked: false, condition: "listening>=3" },
  { id: 6, name: "英语新星", desc: "累计获得100颗星", emoji: "⭐", unlocked: false, condition: "stars>=100" },
  { id: 7, name: "考试达人", desc: "完成3次模拟考试", emoji: "📝", unlocked: false, condition: "exams>=3" },
  { id: 8, name: "坚持不懈", desc: "连续学习7天", emoji: "🔥", unlocked: false, condition: "streak>=7" },
  { id: 9, name: "英语大师", desc: "达到Lv.5", emoji: "🏆", unlocked: false, condition: "level>=5" }
];

const defaultRoles = {
  teacher: { avatar: "👩‍🏫", name: "Ms. Smith", status: "你的专属英语老师" },
  penpal: { avatar: "🌍", name: "Tom", status: "来自英国的外国笔友" },
  grammar: { avatar: "📚", name: "Dr. Grammar", status: "语法专家，专治各种语法难题" }
};

/* ==================== STATE ==================== */
function deepClone(obj) {
  try { return structuredClone(obj); } catch { return JSON.parse(JSON.stringify(obj)); }
}

let user = deepClone(defaultUser);
let stories = deepClone(phase1Stories);
let lessons = deepClone(phase2Lessons);
let units = deepClone(phase3Units);
let missions = deepClone(defaultMissions);
let vocab = [];
let badges = deepClone(defaultBadges);
let chatHistory = [];
let roles = deepClone(defaultRoles);
let chatCount = 0;
let examHistory = [];
let wrongQuestions = [];
let reviewSchedule = [];

/* ==================== UTILS ==================== */
function checkBadges() {
  const conditions = {
    checkin: (user.checkInDays || []).length,
    stories: user.completedStories,
    vocab: vocab.length,
    grammar: lessons.filter(l => l.type === 'grammar' && l.completed).length,
    listening: lessons.filter(l => l.type === 'listening' && l.completed).length,
    stars: user.stars,
    exams: user.completedExams,
    streak: user.streak,
    level: user.level
  };
  let newUnlock = false;
  badges.forEach(b => {
    if (!b.unlocked) {
      const [k, v] = b.condition.split('>=');
      if (conditions[k] >= parseInt(v)) { b.unlocked = true; newUnlock = true; }
    }
  });
  return { badges, newUnlock };
}

function calcLevel(stars) {
  const levels = [
    { min: 0, name: 'Lv.1 探险新手', level: 1 },
    { min: 50, name: 'Lv.2 词汇学徒', level: 2 },
    { min: 120, name: 'Lv.3 故事猎人', level: 3 },
    { min: 250, name: 'Lv.4 口语勇士', level: 4 },
    { min: 400, name: 'Lv.5 英语大师', level: 5 }
  ];
  for (let i = levels.length - 1; i >= 0; i--) {
    if (stars >= levels[i].min) return levels[i];
  }
  return levels[0];
}

function mockAIResponse(userMsg, roleKey) {
  const msg = userMsg.toLowerCase();
  const defaults = {
    teacher: '你好！我是你的英语老师 Ms. Smith。😊\n\n你可以问我：\n• 语法问题\n• 单词意思和用法\n• 作文修改\n• 阅读理解技巧\n\n请把你的问题发给我吧！',
    penpal: 'Hey there! 👋 I\'m Tom from London. Nice to meet you!\n\nI love playing football and listening to music. What about you? Do you have any hobbies?\n\nFeel free to ask me anything about life in the UK or practice English with me!',
    grammar: 'Greetings! I am Dr. Grammar. 📚\n\nI specialize in analyzing English grammar structures and correcting common mistakes.\n\nState your grammar question clearly, and I shall provide a thorough explanation.'
  };
  if (msg.includes('现在完成') || msg.includes('present perfect')) {
    return '**现在完成时 (Present Perfect)**\n\n📌 **结构**：have/has + 过去分词\n\n📌 **用法**：\n1. 过去动作对现在有影响\n   - I **have lost** my key. (我现在没钥匙)\n2. 从过去持续到现在\n   - She **has lived** here for 10 years.\n\n📌 **标志词**：already, yet, ever, never, since, for\n\n✅ **例句**：\n- Have you **finished** homework?\n- I **have never been** to Paris.';
  }
  if (msg.includes('作文') || msg.includes('writing')) {
    return '好的！我来帮你改作文。请把你的作文发给我，我会：\n\n1. **标出语法错误**并解释\n2. **给出更地道的表达**\n3. **提供修改后的完整版本**\n\n📝 **初二作文常见错误**：\n- 时态混乱\n- 冠词遗漏（a/an/the）\n- 主谓不一致\n\n把你的作文粘贴到下面吧！✍️';
  }
  if (msg.includes('单词') || msg.includes('词汇') || msg.includes('vocabulary')) {
    return '📚 **初二高频词汇 Top 5**\n\n1. **achieve** /əˈtʃiːv/ — 达到，实现\n   - If you work hard, you will **achieve** your goal.\n\n2. **environment** /ɪnˈvaɪrənmənt/ — 环境\n   - We should protect the **environment**.\n\n3. **experience** /ɪkˈspɪəriəns/ — 经历，经验\n   - Traveling gives you valuable **experience**.\n\n4. **opportunity** /ˌɒpəˈtjuːnəti/ — 机会\n   - Don\'t miss this great **opportunity**.\n\n5. **responsibility** /rɪˌspɒnsəˈbɪləti/ — 责任\n   - It\'s your **responsibility** to finish homework.';
  }
  return defaults[roleKey] || defaults.teacher;
}

async function callAI(messages, roleKey) {
  const apiKey = process.env.OPENAI_API_KEY || process.env.MOONSHOT_API_KEY;
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
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + apiKey },
      body: JSON.stringify({ model, messages: [{ role: 'system', content: system }, ...messages], temperature: 0.7, max_tokens: 800 })
    });
    if (!response.ok) throw new Error('AI API error');
    const data = await response.json();
    return data.choices[0].message.content;
  } catch (err) {
    return mockAIResponse(messages[messages.length - 1].content, roleKey);
  }
}

/* ==================== HANDLER ==================== */
export default async function handler(request) {
  const url = new URL(request.url);
  const pathname = url.pathname;

  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Content-Type': 'application/json'
  };

  if (request.method === 'OPTIONS') return new Response(null, { status: 204, headers: corsHeaders });

  function json(data, status = 200) {
    return new Response(JSON.stringify(data), { status, headers: corsHeaders });
  }

  try {
    if (pathname === '/api/health') return json({ ok: true, time: new Date().toISOString() });

    if (pathname === '/api/me') {
      checkBadges();
      return json(user);
    }

    if (pathname === '/api/stories') return json(stories);

    const storyDoneMatch = pathname.match(/^\/api\/stories\/(\d+)\/done$/);
    if (storyDoneMatch && request.method === 'POST') {
      const id = parseInt(storyDoneMatch[1]);
      const story = stories.find(s => s.id === id);
      if (!story) return json({ error: 'Story not found' }, 404);
      if (story.progress < 100) {
        story.progress = 100;
        user.completedStories++;
        user.stars += 30;
        user.level = calcLevel(user.stars).level;
        const next = stories.find(s => s.id === id + 1);
        if (next) next.locked = false;
      }
      checkBadges();
      return json({ user, stories });
    }

    if (pathname === '/api/lessons') return json(lessons);
    if (pathname === '/api/units') return json(units);

    const lessonDoneMatch = pathname.match(/^\/api\/lessons\/(\d+)\/done$/);
    if (lessonDoneMatch && request.method === 'POST') {
      const id = parseInt(lessonDoneMatch[1]);
      const lesson = lessons.find(l => l.id === id);
      if (lesson && !lesson.completed) {
        lesson.completed = true;
        user.stars += 15;
        user.level = calcLevel(user.stars).level;
      }
      checkBadges();
      return json({ user, lessons });
    }

    const unitDoneMatch = pathname.match(/^\/api\/units\/(\d+)\/done$/);
    if (unitDoneMatch && request.method === 'POST') {
      const id = parseInt(unitDoneMatch[1]);
      const unit = units.find(u => u.id === id);
      if (unit) {
        const next = units.find(u => u.id === id + 1);
        if (next) next.locked = false;
        user.stars += 20;
        user.level = calcLevel(user.stars).level;
      }
      checkBadges();
      return json({ user, units });
    }

    if (pathname === '/api/missions') return json(missions);

    const missionCompleteMatch = pathname.match(/^\/api\/missions\/(\d+)\/complete$/);
    if (missionCompleteMatch && request.method === 'POST') {
      const id = parseInt(missionCompleteMatch[1]);
      const mission = missions.find(m => m.id === id);
      if (!mission) return json({ error: 'Mission not found' }, 404);
      if (!mission.completed) {
        mission.completed = true;
        user.completedMissions++;
        user.stars += mission.reward || 10;
        user.level = calcLevel(user.stars).level;
      }
      checkBadges();
      return json({ user, missions });
    }

    if (pathname === '/api/vocab') {
      if (request.method === 'GET') return json(vocab);
      if (request.method === 'POST') {
        const word = await request.json();
        if (!word || !word.word) return json({ error: 'Invalid word data' }, 400);
        if (!vocab.find(v => v.word === word.word)) {
          vocab.push(word);
          user.stars += 3;
          user.level = calcLevel(user.stars).level;
        }
        checkBadges();
        return json({ vocab, user });
      }
    }

    if (pathname === '/api/badges') return json(checkBadges().badges);

    if (pathname === '/api/roles') return json(roles);

    if (pathname === '/api/chat/history') return json(chatHistory);

    if (pathname === '/api/chat' && request.method === 'POST') {
      const body = await request.json();
      const { message, role } = body;
      if (!message || !message.trim()) return json({ error: 'Message is required' }, 400);
      const roleKey = role || 'teacher';
      chatHistory.push({ role: 'user', content: message.trim() });
      if (chatHistory.length > 20) chatHistory = chatHistory.slice(-20);
      const reply = await callAI(chatHistory.map(m => ({ role: m.role, content: m.content })), roleKey);
      chatHistory.push({ role: 'assistant', content: reply });
      chatCount++;
      if (chatCount % 5 === 0) { user.stars += 1; user.level = calcLevel(user.stars).level; }
      checkBadges();
      return json({ reply, user });
    }

    if (pathname === '/api/checkin' && request.method === 'POST') {
      const today = new Date().toISOString().split('T')[0];
      if (user.lastCheckIn === today) return json({ error: 'Already checked in today' }, 400);
      const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
      if (user.lastCheckIn === yesterday) { user.streak++; } else { user.streak = 1; }
      user.lastCheckIn = today;
      if (!user.checkInDays) user.checkInDays = [];
      user.checkInDays.push(today);
      const rewards = [5, 5, 10, 10, 15, 15, 30];
      const dayIndex = Math.min(user.streak - 1, 6);
      const rewardStars = rewards[dayIndex];
      user.stars += rewardStars;
      user.level = calcLevel(user.stars).level;
      checkBadges();
      return json({ user, rewardStars, streak: user.streak });
    }

    if (pathname === '/api/exams') return json(Object.keys(examBank).map(k => ({ id: k, ...examBank[k] })));

    if (pathname === '/api/exams/:id' || pathname.startsWith('/api/exams/')) {
      const examId = pathname.replace('/api/exams/', '');
      if (examBank[examId]) return json({ id: examId, ...examBank[examId] });
    }

    if (pathname === '/api/exams/submit' && request.method === 'POST') {
      const body = await request.json();
      const { examId, answers, timeSpent } = body;
      const exam = examBank[examId];
      if (!exam) return json({ error: 'Exam not found' }, 404);
      let score = 0, total = 0, wrong = [];
      exam.questions.forEach(q => {
        if (q.type === 'writing') return;
        q.items.forEach((item, idx) => {
          total++;
          const key = `${q.type}_${idx}`;
          if (answers[key] === item.a) {
            score += Math.floor(100 / total);
          } else {
            wrong.push({ question: item.q, yourAnswer: answers[key], correct: item.a, explain: item.explain || '请参考教材复习' });
          }
        });
      });
      score = Math.min(score, 100);
      user.completedExams = (user.completedExams || 0) + 1;
      user.stars += Math.floor(score / 5);
      user.level = calcLevel(user.stars).level;
      examHistory.push({ examId, score, timeSpent, date: new Date().toISOString() });
      wrongQuestions = [...wrongQuestions, ...wrong];
      checkBadges();
      return json({ score, total, wrong, user, examHistory });
    }

    if (pathname === '/api/exams/history') return json(examHistory);
    if (pathname === '/api/wrong') return json(wrongQuestions);
    if (pathname === '/api/review') {
      const today = new Date().toISOString().split('T')[0];
      const due = wrongQuestions.filter((_, i) => i < 5);
      return json({ due, total: wrongQuestions.length });
    }

    if (pathname === '/api/reset' && request.method === 'POST') {
      user = deepClone(defaultUser);
      stories = deepClone(phase1Stories);
      lessons = deepClone(phase2Lessons);
      units = deepClone(phase3Units);
      missions = deepClone(defaultMissions);
      vocab = [];
      badges = deepClone(defaultBadges);
      chatHistory = [];
      chatCount = 0;
      examHistory = [];
      wrongQuestions = [];
      reviewSchedule = [];
      return json({ ok: true });
    }

    return json({ error: 'Not found' }, 404);
  } catch (err) {
    return json({ error: err.message }, 500);
  }
}
