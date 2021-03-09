
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperball,side1,side2;
var side3;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 400);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	side1 = new dustbin(1000,330);
	side2 = new dustbin(1300,330);
	side3 = new dustbin2(1147,375);
	paperball= new Paper();
	ground = new Ground(600,height,2000,35);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  side1.display();
  side2.display();
  side3.display();
  paperball.display();
  ground.display();

 
  drawSprites();
 
}

function keyPressed(){
    if(keyCode===UP_ARROW){

        Matter.Body.applyForce(paperball.body,paperball.body.position,{x:85,y:85});
    }
}

