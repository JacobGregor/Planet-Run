//might be able to style the canvas width in css and not have to declare that in here... Curren tly declared in home.css
// canvas.width = 1220;
// canvas.height = 500;

const canvas = document.querySelector('canvas')
const context = canvas.getContext('2d')

canvas.width = innerWidth;
canvas.height = innerHeight;

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

//Create Enemy(Alien) Unit
class Enemy {
    constructor(height,width,x,y,color,velocity) {
        this.height = height;
        this.width = width;
        this.x = x;
        this.y = y;
        this.color = color;
        this.velocity = velocity;

    }
    draw(){
        context.beginPath()
        context.rect(this.x,this.y,this.width,this.height)
        context.fillStyle = this.color;
        context.fill()
        
    }

}

const player = new Player(40,20,15,465,'green')
player.draw();

