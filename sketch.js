
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var roof,ballObject1,ballObject2,ballObject3,ballObject4,ballObject5;
var rope1,rope2,rope3,rope4,rope5;
var world;
function setup() {
    createCanvas(1600, 700);

    rectMode(CENTER);

    engine = Engine.create();
    world = engine.world;
    startballPositionX=width/2;
    startballPositionY=height/4+500;

    ballDiameter=40;

    ballObject1=new Ball(startballPositionX-ballDiameter*2,startballPositionY,ballDiameter);
    ballObject2=new Ball(startballPositionX-ballDiameter,startballPositionY,ballDiameter);
    ballObject3=new Ball(startballPositionX,startballPositionY,ballDiameter);
    ballObject4=new Ball(startballPositionX+ballDiameter,startballPositionY,ballDiameter);
    ballObject5=new Ball(startballPositionX+ballDiameter*2,startballPositionY,ballDiameter);
    
    //Create the Bodies Here.
    // ballDiameter=40;
    // ballObject1 = new ball(340,470,20)
    // ballObject2 = new ball(380,470,20)
    // ballObject3 = new ball(420,470,20)
    // ballObject4 = new ball(460,470,20)
    // ballObject5 = new ball(500,470,20);

    // var startballPositionX=width/2;
    // var startballPositionY=height/4+500;
    

    roof = new Roof(780,175,190,20);

    rope1= new Rope(ballObject1.body,roof.body,-ballDiameter*2, 0);
    rope2= new Rope(ballObject2.body,roof.body,-ballDiameter*1,0);
    rope3= new Rope(ballObject3.body,roof.body,-0*2,0);
    rope4= new Rope(ballObject4.body,roof.body,ballDiameter*1,0);
    rope5= new Rope(ballObject5.body,roof.body,ballDiameter*2,0);
    Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(233);
  
  roof.display()
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  ballObject1.display();
ballObject2.display();
ballObject3.display();
ballObject4.display();
ballObject5.display();
  
}

function drawLine (constraint) {
    ballBodyPosition = constraint.bodyA.position;    
    roofBodyPosition = constraint.bodyB.position;
    roofBodyOffset = constraint.pointB;
    roofBodyX= roofBodyPositiion.x + roofBodyOffset.x;
    roofBodyY= roofBodyPosition.y + roofBodyOffset.y; 
    line(ballBodyPosition.x, ballBodyPosition.y, roofBodyX, roofBodyY);           
}

function keyPressed () {
    if (keyCode === UP_ARROW) {
        Matter.Body.applyForce(ballObject1.body, ballObject1.body.position, {x: -50, y:-45});
    }
}
