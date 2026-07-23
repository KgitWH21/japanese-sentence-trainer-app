# Japanese Sentence Trainer

A constraint-based Japanese practice app. Draw a sentence starter, grammar
construction, ending, scene, Japanese-focused wild card, and idiom—then produce
one original sentence without a writing box or automated score.

## Features

- Beginner, intermediate, and advanced Japanese banks
- Optional romaji on the beginner level only (off by default)
- Recall mode that hides English meanings and usage notes
- Lock any card while drawing new challenges
- Add or remove individual constraints from the current round
- Uniformly random one-to-six-card draws or a six-card Full set
- Japanese wild cards spanning anime, games, slang, wasei-eigo, internet
  language, and ordinary loanwords
- A separate idiom and proverb bank with definitions and examples
- Space-bar shortcut for drawing a new challenge
- An always-available, collapsible mobile draw control
- Responsive keyboard- and touch-friendly interface
- Local preference storage for romaji and Recall mode

## Run locally

You will need Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

Open the local address printed in the terminal. On Windows, WSL is the easiest
environment for the included development scripts.

## Main files

- `app/page.tsx` — trainer state, controls, interactions, and layout
- `app/trainer-data.ts` — all Japanese prompts, wild cards, and idioms
- `app/globals.css` — complete visual system and responsive styles
- `app/main.tsx` — mounts the app into `index.html`
- `index.html` — document metadata and page shell

Most content expansion can happen entirely inside `app/trainer-data.ts`.

## Production

```bash
npm run build
npm run preview
```

The project is built with React, TypeScript, and Vite as a plain static
single-page app.
