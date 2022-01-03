const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;
var b1;
var b2;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);
 
  var props = {
    restitution: 0.8,
    frictionAir: 0.02
  }
  ball = Bodies.circle(200,200,10,props)
  World.add(world,ball)

  b1=createImg('right.png');
  b1.position(25,235);
  b1.size(50,50);
  b1.mouseClicked(hforce);

  b2=createImg('up.png');
  b2.position(300,167);
  b2.size(50,50);
  b2.mouseClicked(vforce);

  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background("darkblue");
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,10);
}

function hforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0});

}

function vforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05});

}