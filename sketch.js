const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

var plinko=[];
var particles=[];
var division=[];

var divisionHeight;

function setup() {
  createCanvas(400,800);

      engine = Engine.create();
      world = engine.world;
      ground=new Ground( 400,height,800,20)
      var divisionHeight=300;

      for(var k=0;k<=width;k=k+80){
        division.push(new Division(k,height-divisionHeight/2,10,divisionHeight))
              }
      
      // d0=new Division(10,700,5,350)
      // d1=new Division(50,700,5,350)
      // d2=new Division(100,700,5,350)
      // d3=new Division(150,700,5,350)
      // d4=new Division(200,700,5,350)
}

function draw() {
  Engine.update(engine);
  background(0);  

  
  ground.display()
//   d0.display()
//  d1.display()
//  d2.display()
//  d3.display()
//  d4.display()

  drawSprites();
}