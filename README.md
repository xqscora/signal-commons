# Signal Commons

Signal Commons is an interactive Open-track prototype for observing how a shared resource changes when agents expose constraints instead of silently competing.

## What it demonstrates

- Four agents with different minimum needs and priorities.
- A visible resource budget and a transparent allocation rule.
- A constraint slider that changes the available budget.
- Metrics for need coverage, weighted satisfaction, and inequality.
- A baseline-versus-intervention comparison that can be reproduced in the browser.

This is a systems simulator, not a conversational agent and not a personality model.

## Run

Open `index.html` in a modern browser. No server or package installation is required.

For a real screen recording, open `recording.html?demo=1`. Recording mode cycles through baseline and intervention states every five seconds using the same UI and deterministic allocator.

The repository includes a GitHub Pages deployment workflow. The live URL is `https://xqscora.github.io/signal-commons/` once the workflow completes successfully; verify the URL before using it in a submission.

## Reproducibility

The allocation is deterministic for the same budget and agent values. Change the budget slider, click **Run intervention**, and compare the result with the preserved baseline.

## AI-use disclosure

This prototype was developed with AI coding assistance. The final submission must list the exact tools used and identify which files or sections were AI-assisted, as required by the GIBC rules.

## Status

Local prototype only. The exact proposed public-release file list is in `PUBLISH_MANIFEST.md`. No Devpost project, public repository, video, or external submission has been created.
