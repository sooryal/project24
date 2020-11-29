
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	var trash;
}

function setup() {

	var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,20);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    trash= new Trash(250,250,20,20);
	dustbin=new Dustbin(345,213,120,120);
	ground=new Ground(500,100,200,200);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  trash.display();
  dustbin.display();
  Ground.display();
  drawSprites();
 
}

function keyPressed(){
    if (keyCode===upArrow){

	matter.body.applyForce(trashObject.body,trashObject.body.position,{x:85,y:-85})

	}
}




