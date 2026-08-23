/**
 * 单元内容校验器
 * 返回 { ok: boolean, errors: string[] }
 */
function validateUnit(data, id) {
  const errors = [];

  if (!data) {
    errors.push(`[${id}] 数据为空`);
    return { ok: false, errors };
  }

  // 基础字段
  if (!data.id) errors.push(`[${id}] 缺少 id`);
  if (!data.meta) errors.push(`[${id}] 缺少 meta`);
  else {
    if (!data.meta.title) errors.push(`[${id}] meta.title 缺失`);
    if (!data.meta.zh) errors.push(`[${id}] meta.zh 缺失`);
    if (!data.meta.grammar) errors.push(`[${id}] meta.grammar 缺失`);
    if (!Array.isArray(data.meta.objectives) || data.meta.objectives.length < 2) {
      errors.push(`[${id}] objectives 至少需要 2 条`);
    }
  }

  // 词汇
  if (!Array.isArray(data.vocab) || data.vocab.length < 3) {
    errors.push(`[${id}] vocab 至少需要 3 个词`);
  } else {
    data.vocab.forEach((v, i) => {
      if (!v.w || !v.p || !v.m) errors.push(`[${id}] vocab[${i}] 缺少 w/p/m`);
    });
  }

  // 剧情
  if (!data.story || !Array.isArray(data.story.nodes)) {
    errors.push(`[${id}] story.nodes 缺失`);
  } else {
    if (data.story.nodes.length < 3) errors.push(`[${id}] 剧情节点至少 3 个`);
    data.story.nodes.forEach((node, i) => {
      if (!node.title || !node.q || !node.goal) {
        errors.push(`[${id}] nodes[${i}] 缺少 title/q/goal`);
      }
      if (!Array.isArray(node.options) || node.options.length !== 3) {
        errors.push(`[${id}] nodes[${i}] 必须恰好 3 个选项`);
      } else {
        const correctCount = node.options.filter(o => o.correct).length;
        if (correctCount !== 1) {
          errors.push(`[${id}] nodes[${i}] 必须有且仅有 1 个 correct:true`);
        }
        node.options.forEach((opt, j) => {
          if (!opt.text || !opt.feedback) {
            errors.push(`[${id}] nodes[${i}].options[${j}] 缺少 text 或 feedback`);
          }
        });
      }
    });
  }

  // 口语
  if (!Array.isArray(data.speaking) || data.speaking.length < 3) {
    errors.push(`[${id}] speaking 至少需要 3 句`);
  }

  // 语法提示
  if (!data.grammarTip || !data.grammarTip.summary) {
    errors.push(`[${id}] grammarTip.summary 缺失`);
  }

  return { ok: errors.length === 0, errors };
}

// 在 loadAllUnits 中使用示例：
async function loadAllUnits() {
  const promises = UNIT_LIST.map(async (id) => {
    try {
      const res = await fetch(`/content/units/${id}.json?t=${Date.now()}`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();

      const check = validateUnit(data, id);
      if (!check.ok) {
        console.error(`单元 ${id} 校验失败：`, check.errors);
        // 可选：页面提示
        // alert(`单元 ${id} 内容有误，请检查控制台`);
        return;
      }

      // 映射到旧结构（兼容现有渲染）
      DB[id] = {
        id: data.id,
        title: data.meta.title,
        zh: data.meta.zh,
        grammar: data.meta.grammar,
        tip: data.grammarTip.summary + " 易错：" + (data.grammarTip.commonErrors || []).join("；"),
        vocab: data.vocab,
        story: {
          chapter: data.story.chapter,
          contentZh: data.story.contentZh,
          contentEn: data.story.contentEn
        },
        speaking: data.speaking,
        _nodes: data.story.nodes
      };
    } catch (e) {
      console.error(`加载 ${id} 失败`, e);
    }
  });
  await Promise.all(promises);
}
