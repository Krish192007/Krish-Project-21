
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var engine, world;

var ground, left, right, top_wall;

function preload()
{
	
}

function setup() {
	createCanvas(400, 400);

	var ball_options = {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	Matter.Bodies.circle(200,200,10,ball_options);
	
	groundObj = new Ground(width/2,670,width,20);
	leftSide = new Ground(1100,600,20,120);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(200,390,400,20);
	left = new Ground(390,200,20,400);
	right = new Ground(10,200,20,400);
	top_wall = new Ground(200,10,400,20); 

	ball = Bodies.circle(200,100,20,ball_options);
	World.add(world,ball);

	rectMode(CENTER);
	ellipseMode(RADIUS);

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipse(ball.position.x,ball.position.y,20);

  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);

  groundObj.display();
  
  drawSprites();
 
}


function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.body, );
	}
}
