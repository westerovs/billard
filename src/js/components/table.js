import { ctx, canvas } from './canvas.js';

const WOOD_WIDTH = 60

const drawCloth = () => {
  ctx.fillStyle = 'rgb(26, 130, 30)'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
}

const drawWood = () => {

  ctx.fillStyle = 'hsl(16, 76%, 30%)'
  ctx.fillRect(0, 0, canvas.width, WOOD_WIDTH)
  ctx.fillRect(0, canvas.height - WOOD_WIDTH, canvas.width, WOOD_WIDTH)
  ctx.fillRect(0, 0, WOOD_WIDTH, canvas.height)
  ctx.fillRect(canvas.width - WOOD_WIDTH, 0, WOOD_WIDTH, canvas.height)
}

export {
  drawCloth,
  drawWood,
  WOOD_WIDTH
}
