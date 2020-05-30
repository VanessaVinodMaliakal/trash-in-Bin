const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world,constraint;
var trash,bin;
var elastic;

function setup() {

	createCanvas(700, 500);

  	engine = Engine.create();
	world = engine.world;

	trash = new Trash(120,50);
	bin = new Holder(600,300,150,200);
	elastic = new Rope(trash.trash,{x:120,y:50});
	}

function draw() {
 	background("white");
	Engine.update (engine);
    bin.display();
	elastic.display();
	trash.display();
}

function mouseDragged() {
	Matter.Body.setPosition(trash.trash,{x: mouseX , y: mouseY});
}
	
function mouseReleased() {
	elastic.fly();
}