# Tarot

A browser-based tarot card app with a full 78-card deck and multiple spread types.

## Features

- **Full 78-card deck** — 22 Major Arcana and 56 Minor Arcana (Wands, Cups, Swords, Pentacles)
- **Four spread types** — One Card, Past/Present/Future, Situation/Action/Outcome, Three Options
- **Card flip animation** — cards are dealt face-down; click each one to reveal
- **Responsive layout** — side-by-side on desktop and tablet, stacked on small mobile
- **No dependencies** — vanilla HTML, CSS, and JavaScript

## Usage

Open `index.html` in a browser. Select a spread type, click **Draw Cards**, then click each card to flip it.

## Structure

```
index.html   — markup and layout
style.css    — dark theme, card flip animation, responsive breakpoints
app.js       — deck data, shuffle logic, spread types, card reveal
```

## Deck

The deck uses the standard Rider-Waite card names. The first field in each card entry (`deck[n][0]`) is reserved for a custom art direction name — currently set to the standard name as a placeholder.

## Roadmap

- Art direction pass: custom names and imagery for each card
- Celtic Cross layout (10-card spread)
- Reversed card support
