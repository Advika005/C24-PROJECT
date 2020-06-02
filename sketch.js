var ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
function preload()
{
	
}

function setup() {
    createCanvas(1200, 700);

    engine = Engine.create();
    world = engine.world;

    paper = new Paper(178,631);
    
    ground = new Ground(1800,10);
    
    dustbin1 = new Dustbin(980,650,150,20);
    dustbin2  = new Dustbin(910,610,20,110);
    dustbin3 = new Dustbin(1045,610,20,110);

    Engine.run(engine);
    
}


function draw() {
  rectMode(CENTER);
  background(0);
  text(mouseX+","+mouseY,200,200);
  
  ground.display();

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  paper.display();
  
  drawSprites();
}
function keyPressed(){
  if(keyCode === UP_ARROW){
   Matter.Body.applyForce(paper.body,paper.body.position,{x:65,y:-44})
  }
}


