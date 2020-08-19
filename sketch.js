var ball1,bin1;
var ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ball1=new ball;
	bin1=new bin;
	ground=Bodies.rectangle(400,10,800,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ball1.display;
  bin1.display;
  rect(ground.position.x,ground.position.y,20,20);
}

function KeyPressed() {
  if (keyCode === UP_ARROW){
    ball1.position.X=bin1.position.X;
    ball1.postion.Y=bin1.position.Y;
  }
}

