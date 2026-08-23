# 环球客 · 内容生产模板（飞书 / Google 表格结构）

> 目标：让非技术同事也能标准化生产单元内容，最终转成 `/public/content/units/*.json`。
> 使用方式：复制本文件结构到飞书多维表格或 Google Sheets，按表填写后导出/转换。

---

## 一、推荐表格拆分（共 4 张表）

| 表名 | 用途 | 与 JSON 对应关系 |
|------|------|------------------|
| 1. Unit_Meta | 单元基础信息 + 语法锦囊 | `meta` + `grammarTip` |
| 2. Vocab | 词汇表 | `vocab` |
| 3. Story_Nodes | 剧情节点 + 选项 | `story.nodes` |
| 4. Speaking | 口语句子 | `speaking` |

所有表用 **unit_id** 关联。

---

## 二、表 1：Unit_Meta（单元总览）

| 字段名 | 类型 | 必填 | 说明 | 示例 |
|--------|------|------|------|------|
| unit_id | 文本 | ✅ | 唯一标识，文件名用 | SU1 / U1 / U5 |
| title_en | 文本 | ✅ | 英文标题 | Starter Unit 1: Hello! |
| title_zh | 文本 | ✅ | 中文标题 | 你好！ |
| grade | 数字 | ✅ | 年级 | 7 |
| term | 文本 | ✅ | 学期 | 上 / 下 |
| order | 数字 | ✅ | 排序（越小越靠前） | 1 |
| grammar | 文本 | ✅ | 核心语法（1-2个） | be 动词 am / is / are + 自我介绍 |
| functional | 文本 | ✅ | 交际功能 | 问候与自我介绍 |
| objective_1 | 文本 | ✅ | 学习目标1 | 能用 I am + 姓名 进行自我介绍 |
| objective_2 | 文本 | ✅ | 学习目标2 | 能正确拼写自己的名字 |
| objective_3 | 文本 | 建议 | 学习目标3 | 能礼貌回应 How are you? |
| objective_4 | 文本 | 可选 | 学习目标4 | |
| tip_summary | 文本 | ✅ | 语法口诀/总结 | 口诀：I 用 am，you 用 are，is 连着 he she it。 |
| error_1 | 文本 | ✅ | 易错预警1 | I is... → 应改为 I am... |
| error_2 | 文本 | ✅ | 易错预警2 | Me name is... → 应改为 My name is... |
| error_3 | 文本 | 可选 | 易错预警3 | |
| chapter | 文本 | ✅ | 剧情章节名 | 第1站：登机口的名字密码 |
| content_zh | 长文本 | ✅ | 中文情境描述 | 开学第一天，你和李明赶到「环球号」登机口…… |
| content_en | 长文本 | ✅ | 英文情境描述 | The gate is about to close. Ms. Smith asks you to introduce yourself and spell your name. |
| status | 单选 | ✅ | 草稿 / 已审核 / 已上线 | 草稿 |
| last_editor | 文本 | 建议 | 最后修改人 | 张老师 |
| updated_at | 日期 | 建议 | 最后更新时间 | 2026-08-23 |

**飞书/表格填写提示：**
- `unit_id` 必须与最终 JSON 文件名一致（如 `SU1.json`）
- `status` 建议用单选：草稿 / 已审核 / 已上线
- 学习目标建议 2～4 条，可观察、可检测

---

## 三、表 2：Vocab（词汇）

| 字段名 | 类型 | 必填 | 说明 | 示例 |
|--------|------|------|------|------|
| unit_id | 文本 | ✅ | 关联单元 | SU1 |
| order | 数字 | 建议 | 排序 | 1 |
| w | 文本 | ✅ | 单词 | hello |
| p | 文本 | ✅ | 音标 | /həˈləʊ/ |
| m | 文本 | ✅ | 中文释义 | int. 你好 |
| ex | 文本 | 建议 | 场景例句 | Hello! Nice to meet you. |
| collocation | 文本 | 可选 | 常用搭配 | say hello to... |
| difficulty | 数字 | 可选 | 难度 1-3 | 1 |

**填写规范：**
- 每单元建议 5～12 个核心词
- 例句尽量来自本单元情境
- 音标使用标准 IPA

---

## 四、表 3：Story_Nodes（剧情节点）

每个节点占 **一行**，选项拆开写。

| 字段名 | 类型 | 必填 | 说明 | 示例 |
|--------|------|------|------|------|
| unit_id | 文本 | ✅ | 关联单元 | SU1 |
| node_order | 数字 | ✅ | 节点顺序（1开始） | 1 |
| title | 文本 | ✅ | 节点标题 | 登机口身份验证 |
| text | 长文本 | ✅ | 场景描述 | Ms. Smith 站在登机口：「Welcome! What's your name? ...」 |
| goal | 文本 | ✅ | 语言目标 | 正确使用 I am + 姓名，并完成拼写 |
| question | 文本 | ✅ | 问题 | 选一句最自然、最完整的自我介绍： |
| opt_a_text | 文本 | ✅ | 选项A内容 | I am Li Ming. L-I, M-I-N-G, Li Ming. |
| opt_a_correct | 是/否 | ✅ | 是否正确 | 是 |
| opt_a_feedback | 长文本 | ✅ | 选项A反馈 | ✅ 舱门打开！I am + 姓名是最稳妥的…… |
| opt_b_text | 文本 | ✅ | 选项B内容 | Me name is Li Ming, spell is L-I. |
| opt_b_correct | 是/否 | ✅ | 是否正确 | 否 |
| opt_b_feedback | 长文本 | ✅ | 选项B反馈 | ❌ 中国学生常犯：把 My 说成 Me…… |
| opt_c_text | 文本 | ✅ | 选项C内容 | I is Li Ming from China. |
| opt_c_correct | 是/否 | ✅ | 是否正确 | 否 |
| opt_c_feedback | 长文本 | ✅ | 选项C反馈 | ❌ I 后面必须用 am，不能用 is…… |

**强制规则（生产时必须遵守）：**
1. 每个单元至少 3 个节点（node_order = 1,2,3…）
2. 每个节点必须恰好 3 个选项
3. 三个选项中**有且仅有一个** `opt_x_correct = 是`
4. 错误选项必须是中国学生真实高频错误
5. 反馈必须包含教学点拨（为什么对/错）

---

## 五、表 4：Speaking（口语）

| 字段名 | 类型 | 必填 | 说明 | 示例 |
|--------|------|------|------|------|
| unit_id | 文本 | ✅ | 关联单元 | SU1 |
| order | 数字 | ✅ | 排序 | 1 |
| en | 文本 | ✅ | 英文句子 | Hello! My name is Li Ming. |
| zh | 文本 | ✅ | 中文翻译 | 你好！我的名字叫李明。 |
| tip | 文本 | 建议 | 可替换框架/提示 | 框架：Hello! My name is _____. |
| level | 单选 | 可选 | controlled / guided / free | controlled |

**建议层级：**
- controlled：原句跟读（5句左右）
- guided：给出框架，替换关键词
- free：开放输出任务（可单独做一题）

---

## 六、质量检查清单（每个单元上线前必过）

复制到表格最后一列或单独检查表：

- [ ] unit_id 与文件名一致
- [ ] 学习目标 ≥ 2 条，且可观察
- [ ] 词汇 ≥ 5 个，且有音标 + 释义
- [ ] 剧情节点 ≥ 3 个
- [ ] 每个节点恰好 3 个选项，且只有 1 个正确
- [ ] 错误选项是真实高频错误
- [ ] 反馈含教学点拨
- [ ] 口语 ≥ 5 句
- [ ] grammarTip 有口诀 + 至少 2 条易错
- [ ] status 已改为「已审核」

---

## 七、从表格到 JSON 的字段映射速查
