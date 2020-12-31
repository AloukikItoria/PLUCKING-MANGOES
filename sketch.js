
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var m1,m2,m3,m4,m5,m6,m7,m8,m9,m10;
var ground;
var stone1
var rope1;
var tree;
var treeI
var boy;
var boyI;
var engine, world;
function preload()
{
	boyI = loadImage("boy.png")
	treeI = loadImage("tree.png")
}

function setup() {
	createCanvas(1000,600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	//Engine.run(engine);

boy = createSprite(70,524,20,20);
boy.addImage("image1",boyI)
boy.scale = (0.08)
tree = createSprite(720,330,20,20);
tree.addImage("image2",treeI)
tree.scale = (0.4)
stone1 = new Rocks(100,300,20)
rope1 = new Ropes(stone1.body,{x:100,y:300})
ground = new Ground(500,580,1000,10)  
m1 = new Mangoes(600,250,20);

}


function draw() {
 // rectMode(CENTER);
  background("lightblue");
  Engine.update(engine);
  
 // drawSprites();
 stone1.display();
 boy.display();
 tree.display();
 m1.display();
 rope1.display();
 ground.display();
 //detectColllision(stone1,m1);
}



function mouseDragged(){

	Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})
	
	}

function mouseReleased()
{
	rope1.fly();
    // distance=int(dist(stoneObj.x,stoneObj.y,mango1.x,mango1.y));
}

function keyPressed() {
	if (keyCode === 32) {
  //  Matter.Body.setPosition(stoneObj.body, {x:235, y:420}) 
	  rope1.attach(stone1.body);
	}
  }

  function detectCollision(lstone,lmango){

  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
 
  	if(distance<=lmango.radius+lstone.radius)
    {
      
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }
