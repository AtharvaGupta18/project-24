
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(1000, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(500, 390, 1000, 20);

    box2 = new Ground2(745, 375, 10, 70);
    box3 = new Ground2(825, 375, 10, 70);

	paper = new Paper();

	Engine.run(engine);
  
}


function draw() {
  	rectMode(CENTER);
  	background(0);
  
	// box1.display();
	box2.display();
	box3.display();
	ground.display();
	paper.display();
	
	keyPressed();
	keyPressed2();

  	drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:2, y:-1});
		
	}
}

function keyPressed2(){
	if(keyCode === DOWN_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:2, y:1});
		
	}
}