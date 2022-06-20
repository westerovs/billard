const canvas = document.querySelector('#game')
const ctx = canvas.getContext('2d')

canvas.width = 1200
canvas.height = 600

const clearCanvas = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
}

export {
  canvas,
  ctx,
  clearCanvas,
}
