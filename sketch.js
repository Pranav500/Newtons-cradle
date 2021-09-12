//creating constants
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

//creating bodies
let engine;
let world;
var ball;
var ground;
var con;
var con2;
var ball2;
var ball3;
var platform;

function setup() {
  createCanvas(400,400);
  
  //creating smaller engine and world
  engine = Engine.create();
  world = engine.world;

  //ball options
  var ball_options = {
    restitution: 1
  };

  let platform_options = {
    isStatic:true
  };

  //creating platform and balls
  platform = Bodies.rectangle(200,20,200,20,platform_options)
  World.add(world,platform);

  ball = Bodies.circle(200,50,15,ball_options);
  World.add(world,ball);

  ball2 = Bodies.circle(170,50,10,ball_options);
  World.add(world,ball2);

  ball3 = Bodies.circle(230,50,10,ball_options);
  World.add(world,ball3);

  ball4 = Bodies.circle(260,50,10,ball_options);
  World.add(world,ball4);

  ball5 = Bodies.circle(140,50,10,ball_options);
  World.add(world,ball5);

  //creating the constraints
  var options = {
    bodyB:ball,
    pointA:{x:200,y:20},
    length:100,
    stiffness:0.1
  }
  
  var options2 = {
    pointA:{x:170,y:20},
    bodyB:ball2,
    length:100,
    stiffness:0.05
  }

  var options3 = {
    pointA:{x:230,y:20},
    bodyB:ball3,
    length:100,
    stiffness:0.05
  }

  var options4 = {
    pointA:{x:260,y:20},
    bodyB:ball4,
    length:100,
    stiffness:0.05
  }

  var options5 = {
    pointA:{x:140,y:20},
    bodyB:ball5,
    length:100,
    stiffness:0.05
  }


  //adding the contstraint options on
  con = Matter.Constraint.create(options)
  con2 = Matter.Constraint.create(options2)
  con3 = Matter.Constraint.create(options3)
  con4 = Matter.Constraint.create(options4)
  con5 = Matter.Constraint.create(options5)
  
  //adding constraints
  World.add(world,con);
  World.add(world,con2);
  World.add(world,con3);
  World.add(world,con4);
  World.add(world,con5);

  //changing shape modes
  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() 
{ 
  //updating engine and background
  background("green");
  Engine.update(engine);

  //displaying the platform
  push();
  fill("black");
  rect(platform.position.x,platform.position.y,200,20)
  pop();

  //displaying the cirles
  push();
  fill("blue");
  ellipse(ball.position.x,ball.position.y,15);
  pop();


  push();
  fill("red");
  ellipse(ball2.position.x,ball2.position.y,15);
  pop();

  push();
  fill("yellow");
  ellipse(ball3.position.x,ball3.position.y,15);
  pop();

  push();
  fill("purple");
  ellipse(ball4.position.x,ball4.position.y,15);
  pop();

  push();
  fill("orange");
  ellipse(ball5.position.x,ball5.position.y,15);
  pop();

  //displaying the lines for the constraints
  push();
  strokeWeight(2);
  stroke(255);
  line(con.pointA.x,con.pointA.y,ball.position.x,ball.position.y);
  pop();

  push();
  strokeWeight(2);
  stroke("white");
  line(con2.pointA.x,con2.pointA.y,ball2.position.x,ball2.position.y);
  pop();

  
  push();
  strokeWeight(2);
  stroke("white");
  line(con3.pointA.x,con3.pointA.y,ball3.position.x,ball3.position.y);
  pop();

  
  push();
  strokeWeight(2);
  stroke("white");
  line(con4.pointA.x,con4.pointA.y,ball4.position.x,ball4.position.y);
  pop();

  
  push();
  strokeWeight(2);
  stroke("white");
  line(con5.pointA.x,con5.pointA.y,ball5.position.x,ball5.position.y);
  pop();
}

//making movement
function keyPressed()
{
  if(keyCode==RIGHT_ARROW)
    {
      Matter.Body.applyForce(ball5,{x:0,y:0},{x:0.01,y:0});
    }
}

function keyPressed()
{
  if(keyCode==LEFT_ARROW)
    {
      Matter.Body.applyForce(ball5,{x:0,y:0},{x:-0.01,y:0});
    }
}

