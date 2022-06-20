import { drawCloth, drawWood } from './components/table.js';
import Ball from './components/Ball.js';
import { clearCanvas } from './components/canvas.js';



const b = new Ball({
  pos: {x: 400, y: 300},
  color: 'red',
  vel: {x: 3, y: 2}
})

b.draw()


const loop = () => {
  clearCanvas()
  
  drawCloth()
  drawWood()
  b.update()
  b.draw()
  b.bounceOfWalls()
  
  if (b.idle) {
    console.log(b.idle)
  }
  
  requestAnimationFrame(loop)
}

loop()








