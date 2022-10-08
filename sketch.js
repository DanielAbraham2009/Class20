
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ball2;
var ground;
var wall;
var vertwall;
var angle = 10;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  
   

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);

  ball2 = Bodies.circle(250,10,20,ball_options);
  World.add(world,ball2);
  
  wall = Bodies.rectangle(350,200,400,20,ground_options);
  World.add(world,wall);

   vertwall = Bodies.rectangle(80,250,20,80,ground_options);
   World.add(world, vertwall);
  

  rectMode(CENTER);
  ellipseMode(RADIUS);

}


function draw() 
{
  background(51);
  
  Engine.update(engine);
  Matter.Body.rotate(vertwall, angle);
  push();
  translate(vertwall.position.x, vertwall.position.y);
  rotate(angle);
  rect(0,0,20,80);
  pop();
  angle = angle + 1;

  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
  ellipse(ball2.position.x,ball2.position.y,20);
  rect(wall.position.x,wall.position.y,400,20);
 
 
}

