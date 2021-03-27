
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var roof
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5
var ropeObject1, ropeObject2, ropeObject3, ropeObject4, ropeObject5
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(width/2, 200,width/3, 20)
	bobObject1 = new Bob(320,400)
	bobObject2 = new Bob(360,400)
	bobObject3 = new Bob(400,400)
	bobObject4 = new Bob(440,400)
	bobObject5 = new Bob(480,400)
	ropeObject1 = new Rope(bobObject1.body,{x:320, y:200})
	ropeObject2 = new Rope(bobObject2.body,{x:360, y:200})
	ropeObject3 = new Rope(bobObject3.body,{x:400, y:200})
	ropeObject4 = new Rope(bobObject4.body,{x:440, y:200})
	ropeObject5 = new Rope(bobObject5.body,{x:480, y:200})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof.display()
  bobObject1.display()
  bobObject2.display()
  bobObject3.display()
  bobObject4.display()
  bobObject5.display()
  ropeObject1.display()
  ropeObject2.display()
  ropeObject3.display()
  ropeObject4.display()
  ropeObject5.display()
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bobObject1.body, bobObject1.body.position, {x: -70, y: -70})
	}
}



