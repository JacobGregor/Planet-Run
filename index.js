//might be able to style the canvas width in css and not have to declare that in here... Curren tly declared in home.css
// canvas.width = 1220;
// canvas.height = 500;

const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height =500;

// Creates Player Character.
class Player {
    constructor(height,width,x,y,color) {
        this.height = height;
        this.width = width;
        this.x = x;
        this.y = y;
        this.color = color;

    }
    draw(){
        context.beginPath()
        context.rect(this.x,this.y,this.width,this.height)
        context.fillStyle = this.color;
        context.fill()
        
    }

}

class projectile {
    constructor(x,y,radius,color,velocity){
        this.x = x; 
        this.y = y;  
        this.radius = radius; 
        this.color = color; 
        this.velocity = velocity; 
    }
    draw(){
        context.beginPath()
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2,false)
        context.fillStyle = this.color;
        context.fill()
    }
}

//Create Enemy(Alien) Unit
// class Enemy {
//     constructor(height,width,x,y,color,velocity) {
//         this.height = height;
//         this.width = width;
//         this.x = x;
//         this.y = y;
//         this.color = color;
//         this.velocity = velocity;

//     }
//     draw(){
//         context.beginPath()
//         context.rect(this.x,this.y,this.width,this.height)
//         context.fillStyle = this.color;
//         context.fill()
        
//     }

// }

const player = new Player(40,20,25,460,'green')
player.draw();


addEventListener('click',(event) => 
{
    console.log(event)
    const Projectile = new projectile(event.clientX,event.clientY,2,'red',null)
    Projectile.draw();
});
