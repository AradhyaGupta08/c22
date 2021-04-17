const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies; 

var engine, world, object, ground;
var ball;


function setup() {
  createCanvas(400,400);
  //createSprite(400, 200, 50, 50);

  engine = Engine.create();
  world = engine.world;

  object = Bodies.rectangle(200,200,50,50);
  World.add(world, object);

var ground_options = {
  isStatic:true
}

  ground = Bodies.rectangle(200,370,400,20,ground_options);
  World.add(world, ground);

  var ball_options = {
    restitution:1
  }

  ball = Bodies.circle(300,100,30,ball_options);
  World.add(world, ball);
}

function draw() {
  background(255,255,255);

  Engine.update(engine);

  rectMode(CENTER);

  rect(object.position.x, object.position.y, 50, 50);

  rect(ground.position.x, ground.position.y, 400, 20);

  circle(ball.position.x, ball.position.y, 30);
  //rect(200,200,50,50);  
  drawSprites();
}