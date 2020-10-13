var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,helicopterSound;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
	helicopterSound=loadSound("helicopter-fly-over-03.mp3");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	helicopterSound.play();

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(0, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6
	helicopterSprite.velocityX=1;

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(0 , 200 , 5 , {restitution:0.6, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageBody.position.x=helicopterSprite.x;
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

 if(helicopterSprite.x>=width/2)
 {
	helicopterSprite.velocityX=0;  
 }
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === DOWN_ARROW) {
	Body.setStatic(packageBody,false);
	
	 }
   }
   



