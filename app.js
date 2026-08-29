const agents = [
  { name: "Mina", signal: "minimum access first", need: 48, priority: 1.4 },
  { name: "Noah", signal: "stable baseline matters", need: 36, priority: 1.0 },
  { name: "Inez", signal: "high impact per unit", need: 60, priority: 1.2 },
  { name: "Tariq", signal: "reserve a recovery buffer", need: 28, priority: .8 }
];

const budget = document.querySelector("#budget");
const budgetOutput = document.querySelector("#budget-output");
const runButton = document.querySelector("#run");
const agentList = document.querySelector("#agent-list");
const trace = document.querySelector("#trace");
const status = document.querySelector("#status");

let baseline = allocate(100);

function allocate(total) {
  const totalWeight = agents.reduce((sum, agent) => sum + agent.priority, 0);
  let remaining = total;
  const result = agents.map(agent => {
    const share = Math.min(agent.need, total * agent.priority / totalWeight);
    remaining -= share;
    return { ...agent, allocation: share };
  });

  if (remaining > 0) {
    const unfinished = result.filter(agent => agent.allocation < agent.need);
    const extraWeight = unfinished.reduce((sum, agent) => sum + agent.priority, 0) || 1;
    unfinished.forEach(agent => {
      agent.allocation = Math.min(agent.need, agent.allocation + remaining * agent.priority / extraWeight);
    });
  }
  return result;
}

function metrics(result) {
  const coverage = result.reduce((sum, agent) => sum + Math.min(agent.allocation / agent.need, 1), 0) / result.length;
  const weight = result.reduce((sum, agent) => sum + agent.priority, 0);
  const satisfaction = result.reduce((sum, agent) => sum + Math.min(agent.allocation / agent.need, 1) * agent.priority, 0) / weight;
  const values = result.map(agent => agent.allocation / agent.need);
  const mean = values.reduce((sum, value) => sum + value, 0) / values.length;
  const inequality = Math.sqrt(values.reduce((sum, value) => sum + (value - mean) ** 2, 0) / values.length);
  const used = result.reduce((sum, agent) => sum + agent.allocation, 0);
  return { coverage, satisfaction, inequality, used };
}

function render(result, label) {
  const data = metrics(result);
  document.querySelector("#coverage").textContent = `${Math.round(data.coverage * 100)}%`;
  document.querySelector("#satisfaction").textContent = `${Math.round(data.satisfaction * 100)}%`;
  document.querySelector("#inequality").textContent = data.inequality.toFixed(2);
  document.querySelector("#used").textContent = `${Math.round(data.used)} / ${budget.value}`;
  budgetOutput.textContent = budget.value;
  status.textContent = label;
  agentList.innerHTML = result.map(agent => {
    const ratio = Math.min(agent.allocation / agent.need, 1);
    return `<article class="agent"><div class="agent-top"><span class="agent-name">${agent.name}</span><span class="agent-signal">${agent.signal}</span></div><div class="bar"><span style="width:${Math.round(ratio * 100)}%"></span></div><div class="agent-meta"><span>${Math.round(agent.allocation)} units allocated</span><span>${Math.round(ratio * 100)}% of minimum need</span></div></article>`;
  }).join("");
}

function renderTrace(result) {
  trace.innerHTML = result.map(agent => {
    const before = baseline.find(item => item.name === agent.name).allocation;
    const delta = agent.allocation - before;
    const width = Math.min(Math.abs(delta) * 5 + 5, 100);
    const sign = delta >= 0 ? "+" : "−";
    return `<div class="trace-row"><div class="trace-label"><span>${agent.name}</span><strong>${sign}${Math.abs(Math.round(delta))} units</strong></div><div class="trace-bar"><span style="width:${width}%"></span></div></div>`;
  }).join("");
}

runButton.addEventListener("click", () => {
  const result = allocate(Number(budget.value));
  render(result, "Intervention applied");
  renderTrace(result);
});

budget.addEventListener("input", () => {
  budgetOutput.textContent = budget.value;
});

render(baseline, "Baseline ready");
renderTrace(baseline);
