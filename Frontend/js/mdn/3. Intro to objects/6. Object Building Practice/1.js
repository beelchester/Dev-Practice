// ! checkout the article for notes
// ! "Adding features to our bouncing balls demo" not done
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function randomRGB() {
    return `rgb(${random(0, 255)},${random(0, 255)},${random(0, 255)})`;
  }
  

class Ball {
    constructor (x,y,velX,velY,color,size){
        this.x = x;
        this.y = y;
        this.velX = velX;
        this.velY = velY;
        this.color = color;
        this.size = size;
    }
    draw(){
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.arc(this.x,this.y,this.size,0,2 * Math.PI);
        ctx.fill();
    }
    update() {
        if ((this.x + this.size) >=width) {
           this.velX = -(this.velX);
        } 
        
        if ((this.x - this.size) <= 0) {
           this.velX = -(this.velX);
        }
     
        if ((this.y + this.size) >= height) {
           this.velY = -(this.velY);
        }
        
        if ((this.y - this.size) <= 0) {
           this.velY = -(this.velY);
        }
        
        this.x += this.velX;
        this.y += this.velY;
        
    }
    collisionDetect() {
        for (const ball of balls) {
           if (!(this === ball)) {
              const dx = this.x - ball.x;
              const dy = this.y - ball.y;
              const distance = Math.sqrt(dx * dx + dy * dy);
     
              if (distance < this.size + ball.size) {
                ball.color = this.color = randomRGB();
                this.velX = -(this.velX);
                this.velY = -(this.velY);
                this.x += this.velX;
                this.y += this.velY;
                ball.velX = -(ball.velX);
                ball.velY = -(ball.velY);
                ball.x += ball.velX;
                ball.y += ball.velY;
              }
           }
        }
     }
    
}
// const testBall = new Ball(100, 100, 4, 4, 'red', 8);
// testBall.x
// testBall.size
// testBall.color
// testBall.update()
// testBall.draw()
const balls = [];

while (balls.length < 15) {
   const size = random(8,10);
   const ball = new Ball(
      // ball position always drawn at least one ball width
      // away from the edge of the canvas, to avoid drawing errors
      random(0 + size,width - size),
      random(0 + size,height - size),
      random(-7,7),
      random(-7,7),
      'cyan',
      size
   );

  balls.push(ball);
}
// for(i of balls){
//     for(j=0;j<1000;j++){
//     i.update()
//     i.draw()}
// }


function loop() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
    ctx.fillRect(0, 0, width, height);
 
    for (const ball of balls) {
      ball.draw();
      ball.update();
      ball.collisionDetect();
    }
 
    requestAnimationFrame(loop);
 }
 
loop();


 