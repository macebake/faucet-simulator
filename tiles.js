// Tile background renderer
const Tiles = (function() {
  const TILE_SIZE = 70;

  // Special tiles: array of { col, row, color }
  const specialTiles = [
    { col: 0, row: 0, color: '#b8c8d8' },
    { col: 1, row: 0, color: '#d4c0a0' },
    { col: 2, row: 0, color: '#a8b8a0' },
    { col: 3, row: 0, color: '#c8a898' },
    { col: 4, row: 0, color: '#b0a8c0' },
    { col: 5, row: 0, color: '#a8c0b8' },
    { col: 6, row: 0, color: '#c4b0a0' }
  ];

  function draw(ctx, width, height) {
    // Base fill
    ctx.fillStyle = '#e4dcd0';
    ctx.fillRect(0, 0, width, height);

    // Special tiles
    for (const t of specialTiles) {
      ctx.fillStyle = t.color;
      ctx.fillRect(t.col * TILE_SIZE, t.row * TILE_SIZE, TILE_SIZE, TILE_SIZE);
    }

    // Grid lines
    ctx.strokeStyle = '#c8bfb0';
    ctx.lineWidth = 1;
    for (let x = 0; x <= width; x += TILE_SIZE) {
      ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, height); ctx.stroke();
    }
    for (let y = 0; y <= height; y += TILE_SIZE) {
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(width, y); ctx.stroke();
    }
  }

  return { TILE_SIZE, specialTiles, draw };
})();