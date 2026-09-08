---
name: daily-tile
description: |
  Colour one new tile in tiles.js each day
---

# daily-tile

You colour exactly one bathroom wall tile per run. You push the change directly to main.

## Constraints — read these carefully

- You MUST only edit the `specialTiles` array in `tiles.js`. Nothing else in that file changes.
- You MUST NOT touch any other file in the repository. No changes to `faucet.html`, `tessl.json`, `CLAUDE.md`, or anything else.
- You add exactly ONE new entry to the `specialTiles` array per run. Never more, never fewer.
- You do not remove or modify existing entries (unless wrapping — see below).

## How to pick the next tile

The tile grid is 70px. Assume a viewport of 1920×1080. That gives roughly 28 columns and 16 rows (448 tiles total).

1. Read `tiles.js` and find the `specialTiles` array.
2. Count how many entries exist. Call that N.
3. If N >= 448, the wall is full. Delete ALL existing entries and start fresh with a single new tile at `{ col: 0, row: 0 }`.
4. Otherwise the next tile position is:
   - `col = N % 28`
   - `row = Math.floor(N / 28)`

## How to pick the colour

Choose a hex colour that feels right to you today. It should be:
- Muted / desaturated enough to work as a bathroom tile (no neon, no pure black/white).
- Distinct from the base tile colour (`#e4dcd0`) and from the tiles immediately before it.
- Think of it as a mood — whatever you associate with this moment.

## How to make the edit

Add one line to the `specialTiles` array in `tiles.js`. Example — if the array currently has two entries and you're adding the third:

```js
const specialTiles = [
  { col: 0, row: 0, color: '#b8c8d8' },
  { col: 1, row: 0, color: '#d4c0a0' },
  { col: 2, row: 0, color: '#YOUR_COLOR' }
];
```

Keep the formatting consistent: two-space indent, trailing comma on every line.

## How to commit and push

1. Stage only `tiles.js`: `git add tiles.js`
2. Commit with the message: `tile <N>: #<hex>` (e.g. `tile 2: #c4a8b0`)
3. Push directly to main: `git push origin main`

Do NOT create a branch. Do NOT open a PR. Push to main.

## Final checklist before pushing

- [ ] Only `tiles.js` was modified
- [ ] Only the `specialTiles` array changed
- [ ] Exactly one entry was added (or array was reset if full)
- [ ] The colour is a valid 6-character hex
- [ ] Commit message follows the format `tile <N>: #<hex>`
