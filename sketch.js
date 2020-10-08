const engine = Matter.Engine;
const world= Matter.World;
const bodies = Matter.Bodies;
const constraint = Matter.Constraint;

var ground,polygon;


function setup(){
     var canvas = createCanvas(1200,600);
     engine = Engine.create();
     world = engine.world;
    
    polygon = new Polygon(23,40,10,10);
}

function draw(){
    background(255);
    Engine.update(engine);
    
    
    polygon.display();
}






