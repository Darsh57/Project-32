const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var sling;
var score = 0;

function preload(){
    sling = loadImage("polygon.png");
}

function setup(){
 createCanvas(900, 400)
 engine = Engine.create();
 world = engine.world;

    //level 1
    block1 = new Block(300, 275);
    block2 = new Block(330, 275);
    block3 = new Block(360, 275);
    block4 = new Block(390, 275);
    block5 = new Block(420, 275);
    block6 = new Block(450, 275);
    block7 = new Block(480, 275);

    //level 2
    block8 = new Block(330, 235);
    block9 = new Block(360, 235);
    block10 = new Block(390, 235);
    block11 = new Block(420, 235);
    block12 = new Block(450, 235);

    //level 3
    block13 = new Block(360, 195);
    block14 = new Block(390, 195);
    block15 = new Block(420, 195);

    //top
    block16 = new Block(390, 155);

    //Second tower
    //level 1
    block17 = new Block(640, 175);
    block18 = new Block(670, 175);
    block19 = new Block(700, 175);
    block20 = new Block(730, 175);
    block21 = new Block(750, 175);

    //level 2
    block22 = new Block(670, 135);
    block23 = new Block(700, 135);
    block24 = new Block(730, 135);

    //top
    block25 = new Block(700, 95);

    ball = Bodies.circle(50, 200, 20);
    World.add(world, ball);
    polygon = new SlingShot(this.ball, {x:100, y:200});

    ground = new Ground(450, 390, 900, 10);
    stand1 = new Ground(390, 300, 250, 10);
    stand2 = new Ground(700, 200, 200, 10);
}

function draw(){
background(0)
Engine.update(engine);

block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();
block16.display();
block17.display();
block18.display();
block19.display();
block20.display();
block21.display();
block22.display();
block23.display();
block24.display();
block25.display();

polygon.display();
ground.display();
stand1.display();
stand2.display();
imageMode(CENTER);
image(sling, ball.position.x, ball.position.y, 40, 40);

    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();
    block13.score();
    block14.score();
    block15.score();
    block16.score();
    block17.score();
    block18.score();
    block19.score();
    block20.score();
    block21.score();
    block22.score();
    block23.score();
    block24.score();
    block25.score();

drawSprites();
fill("white");
text("Score: " + score, 750, 40);
}

function mouseDragged(){
        Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    polygon.fly();
}

function keyPressed(){
    if(keyCode === 32){
        polygon.attach(this.ball);
    }
}