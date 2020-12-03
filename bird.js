class Bird{
    constructor(x, y){
       var birdOptions={
           isStatic:false,
           friction:1,
           restitution:0.2,
           density:1
         }
         this.body = Bodies.rectangle(x,y,30,30,birdOptions); 
         World.add(myWorld, this.body);
   
         this.width = 30
         this.height = 30
    }
    display(){
       var pos = this.body.position;
       var angle = this.body.angle;
       pos.x = mouseX; 
       pos.y = mouseY;
       push();
       translate(pos.x, pos.y);
       rotate(angle);
       fill("red");
       strokeWeight(4);
       stroke("green");
       rectMode(CENTER);
       rect(0,0, this.width,this.height);
       pop();
    }
   }