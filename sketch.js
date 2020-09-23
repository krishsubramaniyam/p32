const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground
var block1,block2,block3,block4,block5,block7,block8,block9;
var block10,block11,block12,block13,block14,block15,block16;


function setup() {
  var canvas = createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600,height,1200,20);
  
  block1 = new Box(30,390,30,40);
  block2 = new Box(60,390,30,40);
  block3 = new Box(90,390,30,40);
  block5 = new Box(120,390,30,40);
  block6 = new Box(150,390,30,40);
  block7 = new Box(180,390,30,40);
  block8 = new Box(330,235,30,40);
  block9 = new Box(360,235,30,40);
  block10 = new Box(390,235,30,40);
  block11 = new Box(420,235,30,40);
  block12 = new Box(450,235,30,40);
  block13 = new Box(360,390,30,40);
  block14 = new Box(390,390,30,40);
  block15 = new Box(420,390,30,40);
  block16 = new Box(30,390,30,40);
  
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);

  ground.display();
  drawSprites();
}