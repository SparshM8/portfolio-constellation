# Portfolio Constellation — Design Direction

## Three possible directions

### 1. Orbiting Archive

**Very Brief Intro:** An art-directed digital observatory where one personal brand is presented as a collection of eight worlds. It feels exploratory, editorial, and cinematic rather than like a conventional portfolio index.

**Probability:** 0.041

### 2. Analog Signal Lab

**Very Brief Intro:** A tactile, post-digital studio archive with scanner grain, oversized type, imperfect borders, and kinetic experimental graphics. It would feel like a creative technologist’s field notebook.

**Probability:** 0.078

### 3. Gallery After Dark

**Very Brief Intro:** A restrained, high-fashion exhibition site using sculptural negative space, archival captions, and immersive project details. It would feel like a contemporary art catalogue in motion.

**Probability:** 0.063

---

## Chosen Direction — Orbiting Archive

### Design Movement

**Neo-futurist editorial design** meets speculative interface art. The hub operates as an interactive constellation map: each portfolio is a distinct "planet" with its own visual logic, while the shared navigation, mark, and motion language establish one unmistakable personal brand.

### Core Principles

1. **One identity, eight expressions:** Each portfolio is deliberately different, but all routes inherit the same creator signal, navigation pattern, and contact pathway.
2. **Exploration over scrolling:** The landing page acts as a navigable visual map, not a conventional grid of cards.
3. **Information with atmosphere:** Project facts remain readable, but imagery, type, and interaction establish a memorable mood first.
4. **Designed movement:** Motion serves discovery—orbital drift, scanning, card lift, and route transitions—while preserving accessibility through reduced-motion support.

### Color Philosophy

The master surface is **void black with mineral white typography**, giving the work a gallery-grade foundation. The ownable accent, **Signal Lime (#D9FF4A)**, acts as the creator’s pulse: it marks active states, encoded data, and navigation targets. Every sub-portfolio adds one environmental color (solar orange, aqua, ultraviolet, clay, cobalt, acid, peach, or chrome) so it feels like a destination without losing the identity system.

### Layout Paradigm

The central layout is a **constellation field**: asymmetric, intentionally off-axis, and spatial rather than grid-first. A thin vertical field index anchors orientation at desktop sizes. The hub projects are positioned in a staggered orbital system. Each sub-portfolio has a distinct composition—split hero, typographic poster, dossier, minimal gallery, etc.—so visitors feel they have entered a new creative environment.

### Signature Elements

1. **Orbital graph lines:** Fine luminous paths connecting the eight design worlds and guiding hover/focus states.
2. **Signal tag:** A compact metadata treatment—e.g., `00.04 / PLAYGROUND`—used across headers, cases, and buttons.
3. **Eclipse mark:** An interrupted circular symbol that becomes the favicon, home control, pointer ornament, and loading motif.

### Interaction Philosophy

The interface should invite curiosity without introducing friction. Hovering a world reveals its role and mode; selecting it feels like entering a saved creative state. Back-to-hub controls remain persistent on every design, so a visitor is never trapped in a route. The main hub supports keyboard-accessible cards and clear focus indication alongside the visual effects.

### Animation

At rest, constellation lines have a nearly imperceptible drift and nodes pulse at different rhythms. Hovering a node activates its local color, increases its scale slightly, and draws its connecting path. Route content enters as staged layers—metadata, then heading, then artwork—using 160–400 ms custom ease-outs. Scroll effects only use transform and opacity. Essential content never depends on animation; all decorative motion is disabled under `prefers-reduced-motion`.

### Typography System

**Space Grotesk** provides the sharp, contemporary navigation and body system. **DM Mono** provides the technical metadata voice. **Bodoni Moda** is reserved for large editorial moments in selected worlds, producing contrast between human craft and digital systems. Headings use tight tracking and dramatic scale; labels are uppercase mono with generous letter spacing; body copy stays readable and calm.

### Brand Essence

**Portfolio Constellation is a personal creative universe for a multidisciplinary maker who wants their work to be explored, not merely listed.**

**Personality:** restless, exacting, magnetic.

### Brand Voice

Headlines are direct, perceptive, and slightly cinematic. CTAs should feel like actions in a creative system, while microcopy should state useful context without corporate filler.

> “Eight signals. One creative frequency.”

> “Open a world, not another tab.”

### Wordmark & Logo

The wordmark combines a custom, wide Space Grotesk treatment with a distinctive **broken-orbit glyph**: a thick lime circle interrupted by a small detached square. It signifies ideas in motion and is rendered as a compact graphic, not a default text logo. The glyph should remain prominent in the header and application icon.

### Signature Brand Color

**Signal Lime — #D9FF4A**

---

## The Eight Portfolio Worlds

| ID | Route | Folder | Design Mode | Portfolio Focus | Primary Accent |
|---|---|---|---|---|---|
| 01 | `/portfolios/kinetic` | `client/src/portfolios/kinetic/` | Kinetic type / oversized editorial | Brand designer & art director | Solar orange |
| 02 | `/portfolios/architect` | `client/src/portfolios/architect/` | Blueprint / spatial dossier | Product and experience designer | Mineral aqua |
| 03 | `/portfolios/void` | `client/src/portfolios/void/` | Dark cinematic reel | Motion designer / visual storyteller | Electric violet |
| 04 | `/portfolios/artifact` | `client/src/portfolios/artifact/` | Archive / field notes | Creative developer | Clay red |
| 05 | `/portfolios/mono` | `client/src/portfolios/mono/` | Swiss gallery / monochrome | UI and product designer | Cobalt blue |
| 06 | `/portfolios/neon` | `client/src/portfolios/neon/` | Arcade interface / playful | Digital artist and experimental maker | Acid green |
| 07 | `/portfolios/editorial` | `client/src/portfolios/editorial/` | Magazine cover / cultural | Photographer and visual curator | Peach coral |
| 08 | `/portfolios/chrome` | `client/src/portfolios/chrome/` | Chrome dashboard / systems | Multidisciplinary freelancer | Liquid silver |

## Folder Architecture

```text
client/src/
├── components/
│   ├── brand/                 # Eclipse mark, signal labels, global controls
│   ├── hub/                   # Constellation field and world card components
│   └── shared/                # Shared route header, case list, contact strip
├── data/
│   └── portfolios.ts          # Route metadata and visual-system tokens
├── pages/
│   └── Home.tsx               # Main portfolio constellation hub
├── portfolios/
│   ├── kinetic/               # 01 — self-contained design world
│   ├── architect/             # 02 — self-contained design world
│   ├── void/                  # 03 — self-contained design world
│   ├── artifact/              # 04 — self-contained design world
│   ├── mono/                  # 05 — self-contained design world
│   ├── neon/                  # 06 — self-contained design world
│   ├── editorial/             # 07 — self-contained design world
│   └── chrome/                # 08 — self-contained design world
└── styles/
    └── portfolio-worlds.css   # World-specific compositions and visual systems
```

Each folder will contain one route component. Its visual system remains locally trackable, while shared elements and content data stay centralized so a new portfolio can be swapped in without rebuilding the hub.

## Style Decisions

- The world selector is a **constellation map before it is a portfolio list**: orbital paths, coordinates, field index codes, and node markers explicitly connect every world.
- Every portfolio world receives a visibly different composition rule: Kinetic uses poster panels, Architect uses blueprint dossier tiles, Void uses cinematic reel panels, Artifact uses pinned notes, Mono uses severe index rows, Neon uses arcade tiles, Editorial uses magazine spreads, and Chrome uses control-room modules.
- **Signal Lime (#D9FF4A)** remains reserved for the eclipse mark, navigation targets, encoded/active states, and the primary contact pathway. Neon alone may use it as an environmental surface.
