
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{shooter1=loadImage("shooter_1.png")
shooter2=loadImage("shooter_2.png")
shooter3=loadImage("shooter_3.png")
zombieing=loadImage("zombie.png")		
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bg=createSprite(displayWidth/2-34,displayHeight/2-45,20,20)
bg.addImage(backgroundImage)
player=createSprite(displayWidth-800,displayHeight-450,20,20)
player.addImage(shooter1)
bg.scale=1
player.scale=0.5
zombieGroup=new Group()

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



