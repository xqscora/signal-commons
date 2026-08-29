# Signal Commons · Submission Draft

> Draft only. Do not paste into Devpost until Cora reviews the claims and confirms the final submission.

## Project name

Signal Commons

## Tagline

Transparent resource allocation starts when constraints become visible.

## Short description

Signal Commons is a browser-based Open-track prototype that shows how a shared resource changes when agents reveal constraints before allocation. A deterministic simulator compares a baseline with an intervention, making need coverage, weighted satisfaction, inequality, and each allocation change visible.

## What we built

Most allocation demos show only the final answer. Signal Commons exposes the path to that answer. Each agent reports a minimum need and a priority, the system allocates a finite budget, and the viewer can change the available budget to observe the resulting tradeoff. The same inputs always produce the same output, so the behavior can be inspected and reproduced.

## Why it matters

When a system hides constraints, a lower allocation can look arbitrary. When constraints are explicit, a tradeoff becomes discussable. This prototype is a small experiment in making coordination legible rather than pretending that one allocation is universally optimal.

## How it works

1. Four agents expose a minimum need and priority.
2. The deterministic allocator distributes the available budget while respecting minimum needs where possible.
3. The interface reports need coverage, weighted satisfaction, inequality, and budget used.
4. The viewer changes the budget and runs an intervention.
5. A trace shows how each agent's allocation moved from the baseline.

## Track fit

This is an **Open** track project: a working interactive technical prototype demonstrating transparent system behavior. It is not a theoretical paper, a slide deck, a conversational companion, or a personality model.

## Live demo

https://xqscora.github.io/signal-commons/

The live demo is a convenience link. The submission still needs the required public source repository and a separate 2–5 minute demo video.

## Built With

- HTML5
- CSS3
- Vanilla JavaScript
- Browser-native range input and DOM rendering
- No external data, API keys, hosted inference, or package installation

## AI-use disclosure

AI coding assistance was used while drafting the HTML, CSS, JavaScript, and documentation. The final submission must name the exact AI tools used and identify which parts were AI-assisted. Cora remains responsible for reviewing and explaining the complete implementation.

## Demo video outline (2–5 minutes)

1. 0:00–0:20 — State the coordination problem and show the project running.
2. 0:20–0:55 — Explain the four visible agent signals and the finite budget.
3. 0:55–1:35 — Run the baseline and point to the four metrics.
4. 1:35–2:20 — Change the budget, run the intervention, and read the per-agent trace.
5. 2:20–2:50 — Explain deterministic reproducibility, limitations, and why this is an Open-track prototype.
6. 2:50–3:10 — Show the repository and the run instructions.

## Screenshot checklist

- [ ] Initial baseline view showing all four agents and metrics.
- [ ] Intervention view after changing the budget.
- [ ] Trace and metrics view that makes the tradeoff legible.

## Remaining before external submission

- [ ] Cora reviews the claim text and confirms the final project name.
- [ ] Put the project in a public unrestricted repository owned by Cora.
- [ ] Add repository URL after verifying it opens without credentials.
- [x] Capture three real screenshots from the running prototype: `screenshot_baseline.png`, `screenshot_intervention.png`, `screenshot_high_budget.png`.
- [ ] Record and publish a 2–5 minute video with English audio or subtitles.
- [ ] Re-read live GIBC rules immediately before submitting.
- [ ] Cora confirms the final external upload and submit action.
