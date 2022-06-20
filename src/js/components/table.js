import { ctx, canvas } from './canvas.js';

const drawCloth = () => {
  ctx.fillStyle = 'rgb(26, 130, 30)'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
}

const drawWood = () => {
  const woodWidth = 60

  ctx.fillStyle = 'hsl(16, 76%, 30%)'
  ctx.fillRect(0, 0, canvas.width, woodWidth)
  ctx.fillRect(0, canvas.height - woodWidth, canvas.width, woodWidth)
  ctx.fillRect(0, 0, woodWidth, canvas.height)
  ctx.fillRect(canvas.width - woodWidth, 0, woodWidth, canvas.height)
}

export {
  drawCloth,
  drawWood,
}
