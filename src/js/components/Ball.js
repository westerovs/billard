import { ctx, canvas } from './canvas.js';

export default class Ball {
  constructor({ pos, color, vel }) {
    this.pos = pos
    this.color = color
    this.vel = vel ?? {x: 0, y: 0}
    this.size = 18
  }
  
  draw() {
    ctx.beginPath()
    ctx.fillStyle = this.color
    ctx.arc(this.pos.x, this.pos.y, this.size, 0, 2 * Math.PI)
    ctx.fill()
    ctx.closePath()
  }
  
  update() {
    this.pos.x += this.vel.x
    this.pos.y += this.vel.y
  }
  
  bounceOfWalls() {
    // horizontal
    if (this.pos.x + this.size >= canvas.width) {
      this.pos.x = canvas.width - this.size
      this.vel.x *= -1
    }
    else if(this.pos.x - this.size <=0) {
      this.pos.x = this.size
      this.vel.x *= -1
    }
  
    // vertical
    if (this.pos.y + this.size >= canvas.height) {
      this.pos.y = canvas.height - this.size
      this.vel.y *= -1
    }
    else if(this.pos.y - this.size <=0) {
      this.pos.y = this.size
      this.vel.y *= -1
    }
  }
}
