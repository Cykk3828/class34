const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground,canvas;
var sling;

function setup(){
 canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    
ground=new Ground(600,580,1200,20);
blocks1=new Box(700,100,60,60);
blocks2=new Box(700,100,60,60);
blocks3=new Box(700,100,60,60);
blocks4=new Box(700,100,60,60);
blocks5=new Box(700,100,60,60);
blocks6=new Box(700,100,60,60);
blocks7=new Box(700,100,60,60);
blocks8=new Box(700,100,60,60);

blocks11=new Box(800,100,60,60);
blocks21=new Box(800,100,60,60);
blocks31=new Box(800,100,60,60);
blocks41=new Box(800,100,60,60);
blocks51=new Box(800,100,60,60);
blocks61=new Box(800,100,60,60);

blocks12=new Box(900,100,60,60);
blocks22=new Box(900,100,60,60);
blocks32=new Box(900,100,60,60);
blocks42=new Box(900,100,60,60);
blocks52=new Box(900,100,60,60);
blocks62=new Box(900,100,60,60);
blocks72=new Box(900,100,60,60);

bally=new Ball(500,80,80,80);

sling=new SlingShot(bally.body,{x:500,y:50});


}

function draw(){
    background("white");
    Engine.update(engine);
    ground.display();
    blocks1.display();
    blocks2.display();
    blocks3.display();
    blocks4.display();
    blocks5.display();
    blocks6.display();
    blocks7.display();    
    blocks8.display(); 
 
    blocks11.display();
    blocks21.display();
    blocks31.display();
    blocks41.display();
    blocks51.display();
    blocks61.display();

    blocks12.display();
    blocks22.display();
    blocks32.display();
    blocks42.display();
    blocks52.display();
    blocks62.display();
    blocks72.display();  
    
    bally.display();

    sling.display();
}
function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(bally.body, {x: mouseX , y: mouseY});
   // }
}






