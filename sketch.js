//name spacing (to give nicknames)
const Engine = Matter.Engine 
const World = Matter.World
const Bodies = Matter.Bodies
var myEngine, myWorld, myGround, myBox1, myBox2, myPig1,mylog1, myBox3, myBox4, myPig2,
myBird, myBox5;
var ball;

function setup() {
  createCanvas(1200,600);
  myEngine = Engine.create();
  myWorld = myEngine.world;
  myGround = new Ground(600, 585, 1200, 30);
  myBox1 = new Box(700,545, 80,80); 
  myBox2 = new Box(900, 545, 80, 80);
  myPig1 = new Pig(800, 545);
  myPig2 = new Pig(800, 430);
 // mylog1 = new Log(800, 485, 300, 90);
  myBox3 = new Box(700,430, 80, 80);
  myBox4 = new Box(900, 430, 80, 80);
  myBox5 = new Box(800, 340, 80, 80);
  myBird = new Bird(200, 200)
}

function draw() {
  background("lightBlue");   
  Engine.update(myEngine);
  myGround.display();
  myBox1.display();
  myBox2.display();
  myPig1.display();
  myPig2.display();
  //mylog1.display();
  myBox3.display();
  myBox4.display();
  myBox5.display();
  myBird.display();
  console.log(mylog1.body.position.y);
}