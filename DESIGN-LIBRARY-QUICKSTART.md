# Portfolio Constellation Design Library

Portfolio Constellation is organized as a **main selection hub** plus eight reusable portfolio-design starters. It is intended for juniors who want to choose a visual direction first, then personalize the code with their own work.

## Choose a Design

| Folder | Design | Best starting point |
|---|---|---|
| `01-kinetic-poster` | Kinetic Poster | Brand, campaign, art direction |
| `02-architect-dossier` | Architect Dossier | Product, UX, research |
| `03-void-reel` | Void Reel | Motion, 3D, visual storytelling |
| `04-artifact-archive` | Artifact Archive | Creative development, web experiments |
| `05-mono-index` | Mono Index | UI, internship, product portfolio |
| `06-neon-playground` | Neon Playground | Generative design, creative coding |
| `07-editorial-journal` | Editorial Journal | Photography, cultural storytelling |
| `08-chrome-control-room` | Chrome Control Room | Generalist, founder-builder, freelance |

## How to Customize a Starter

Begin with the `README.md` inside the chosen design folder. Replace the portfolio record in `src/data/portfolios.ts`, then update project names, images, case-study descriptions, email address, and social URLs. Every starter includes its route entry, shared display shell, local visual guidance, tilt interaction, and the style layers it depends on.

> The design library contains demo content and placeholder contact details. Replace every demo project, school, experience, link, and contact value with verified information before publishing.

## Export Architecture

```text
portfolio-constellation-library/
├── main-hub/                  # Discovery, filters, loading screen, contact system
└── portfolio-designs/
    ├── 01-kinetic-poster/
    ├── 02-architect-dossier/
    ├── 03-void-reel/
    ├── 04-artifact-archive/
    ├── 05-mono-index/
    ├── 06-neon-playground/
    ├── 07-editorial-journal/
    └── 08-chrome-control-room/
```
