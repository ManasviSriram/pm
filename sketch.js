
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground1,tree1,boy,boyimage,stone1,launcher1,mango1,mango2,mango3,mango4,mango5;
function preload()
{
 boyimage=loadImage("boy.png")	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stone1=new stone(100,585,50,50)
	ground1=new Ground(400,680,1000,40)
tree1=new Tree(600,380,500,800)


mango1=new Mango(480,230,60,60)
mango2=new Mango(600,100,50,50)
mango3=new Mango(630,190,70,70)
mango4=new Mango(730,260,50,50)
mango5=new Mango(530,320,60,60)

launcher1 = new launcher(stone1.body,{x:100,y:575});

  boy = createSprite(1500,6200,10,10)
 boy.addImage("boyhand",boyimage)
 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("skyblue");
ground1.display();
tree1.display();
stone1.display();

mango1.display();
mango2.display();
mango3.display();
mango4.display();
mango5.display();

launcher1.display()
 boyimage=scale(0.1) 
 
  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(stone1.body, {x: mouseX , y: mouseY});
} 

function mouseReleased(){
	launcher1.fly();
}



