var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

   	box1 = new Box(600,20,20,200);
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	var p_options= {
		restitution : 0.6
	}

	packageBody = Bodies.circle(width/2 , 200 , 5, p_options );
	World.add(world, packageBody);
	
	var g_options= {
		isStatic:true
	}
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , g_options );
 	World.add(world, ground);


	
  
}


function draw() {
	Engine.run(engine);
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y
  box1.display();
  drawSprites();
 
}