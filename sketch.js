
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof,bob1,bob2,bob3,bob4,bob5;
var rope,rope2,rope3,rope4,rope5; 

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(300,200,385,30);
	bob1 = new Bob(185,400,50);
	bob2 = new Bob(235,400,50);
	bob3 = new Bob(285,400,50);
	bob4 = new Bob(335,400,50);
	bob5 = new Bob(385,400,50);
    rope = new Chain(bob1.body,{x:188,y:215});
	rope2 = new Chain(bob2.body,{x:235,y:215});
	rope3 = new Chain(bob3.body,{x:285,y:215});
	rope4 = new Chain(bob4.body,{x:335,y:215});
	rope5 = new Chain(bob5.body,{x:385,y:215});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
  drawSprites();
	roof.display();
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
	rope.display();
	rope2.display();
	rope3.display();
	rope4.display();
	rope5.display();
}
function keyPressed(){
	if(keyCode === LEFT_ARROW)
	{
		Matter.Body.applyForce(bob1.body,bob1.body.pos,{x:-200,y:0});
		
	}
}
