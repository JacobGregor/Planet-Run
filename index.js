//might be able to style the canvas width in css and not have to declare that in here... Curren tly declared in home.css
// canvas.width = 1220;
// canvas.height = 500;
const canvas = document.querySelector('canvas')

canvas.width = innerWidth
canvas.height = 500;

const context = canvas.getContext('2d')
const ArrowKey = {
    RIGHT: 'ArrowRight',
    LEFT: 'ArrowLeft',
    UP: 'ArrowUp'
};
    
class CanvasBase {
    constructor (height,width,xCoord,yCoord) {
        this.height = height;
        this.width = width;
        this.xCoord = xCoord;
        this.yCoord = yCoord;
        
    }
    draw (context) {
        console.log('context',context)
        context.beginPath()
        context.rect(this.xCoord,this.yCoord,this.width,this.height)
        context.fillStyle = 'green';
        context.
        context.closePath()
        context.fill()
    }
};

class Character extends CanvasBase {
    constructor(health,x,y) {
        super(40,20,x,y)
        this.health = health;
    }

    moveRight() {
        this.xCoord = this.xCoord + 5;
        this.draw(context)
    }
    moveLeft() {
        this.xCoord = this.xCoord - 5;
        this.draw(context)
    }
    moveUp() {
        this.yCoord = this.yCoord - 5;
        this.draw(context)
    }
}

class Projectile extends CanvasBase {
    constructor(x,y,radius,color,velocity){
        super(undefined,undefined,x,y)
        this.radius = radius; 
        this.color = color; 
        this.velocity = velocity; 
    }
    draw(){
        context.beginPath()
        context.arc(this.xCoord, this.yCoord, this.radius, 0, Math.PI * 2,false)
        context.fillStyle = this.color;
        context.fill()
    }
}


const character = new Character(100, 25, 460)
character.draw(context);

const fire = addEventListener('click',(event) => {
    console.log(event)
    const projectile = new Projectile(event.clientX,event.clientY,2,'red',null)
    projectile.draw();
});

const plrMovement = (event) => {
    switch(event.key){
        case ArrowKey.LEFT: 
            character.moveLeft()
            break;
        case ArrowKey.RIGHT: 
            character.moveRight()
            break;
        case ArrowKey.UP: 
            character.moveUp()
            break;
        default:
            break;
    };
}

window.addEventListener('keydown', plrMovement)