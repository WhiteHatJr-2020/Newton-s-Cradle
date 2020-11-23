
// const Engine = Matter.Engine;
// const World = Matter.World;
// const Bodies = Matter.Bodies;
// const Body = Matter.Body;
// const Render=Matter.Render;
// var rope1;
// function preload()
// {
	
// }

// function setup() {
// 	createCanvas(1600, 700);
// 	rectMode(CENTER);

// 	engine = Engine.create();
// 	world = engine.world;

// 	// var render = Render.create({
// 	// 	element: document.body,
// 	// 	engine: engine,
// 	// 	options: {
// 	// 	  width: 1200,
// 	// 	  height: 700,
// 	// 	  wireframes: false
// 	// 	}
// 	//   });

// 	  roofObject=new Roof(width/2,height/4,width/7,20);
// 	  bobDiameter=40;
// 	  startBobPositionX=width/2;
// 	startBobPositionY=height/4+500;
// 	bobObject1=new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
// 	rope1=new Rope(bobObject1.body,roofObject.body,-(bobDiameter*2), 0);

// 	//Create the Bodies Here.
// 	// roof=new Roof(375,100,400,20);
// 	// b1=new Bob(250,400,30);
// 	// b2=new Bob(310,400,30);
// 	// b3=new Bob(370,400,30);
// 	// b4=new Bob(430,400,30);
// 	// b5=new Bob(490,400,30);
// 	// r1=new Rope(b1.body,roof.body,-60,0);
// 	//Render.run(render);
// 	Engine.run(engine);
  
// }


// function draw() {
//   rectMode(CENTER);
//   background(255);
//   //rope1.display()
// //   rope2.display()
// //   rope3.display()
// //   rope4.display()
// //   rope5.display()	
//  bobObject1.display();
//  roofObject.display();

// //   roof.display();
// //   b1.display();
// //   b2.display();
// //   b3.display();
// //   b4.display();
// //   b5.display();
//   //r1.display();
  
//   drawSprites();
 
// }




const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3, bobObject4,bobObject5, roofObject
var rope1,rope2,rope3, rope4,rope5;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	roofObject=new Roof(375,100,400,20);

	bobDiameter=55;
	bobObject1=new Bob(250,400,30);
	bobObject2=new Bob(310,400,30);
	bobObject3=new Bob(370,400,30);
	bobObject4=new Bob(430,400,30);
	bobObject5=new Bob(490,400,30);

	rope1=new Rope(bobObject1.body,roofObject.body,-bobDiameter*2, 0)
	rope2=new Rope(bobObject2.body,roofObject.body,-bobDiameter*1, 0)
	rope3=new Rope(bobObject3.body,roofObject.body,0, 0)
	rope4=new Rope(bobObject4.body,roofObject.body,bobDiameter*1, 0)
	rope5=new Rope(bobObject5.body,roofObject.body,bobDiameter*2, 0)
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
  roofObject.display();

  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()
  	
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});

  	}
}