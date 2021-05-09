
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustinb;
var papers;
var groundd;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;




	Engine.run(engine);
	dustbinb = new Dustbin(1200,650);
	papers = new Paper(200,450,40)
	groundd = new Ground(width/2,670,width,20)
}


function draw() {
  rectMode(CENTER); 
  background(0);


  function keyPressed(){
if(keycode === UP_ARROW){
Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})
}
  }
  
  dustinb.display();
  groundd.display();
  papers.display();
}



