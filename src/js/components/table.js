import { ctx, canvas } from './canvas.js';

const drawCloth = () => {
  console.log('drawCloth')
  ctx.fillStyle = 'rgb(26, 130, 30)'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
}

export {
  drawCloth
}
