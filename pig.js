class Pig{
    constructor(x, y){
       var pigOptions={
           isStatic:false,
           friction:1,
           restitution:0.2,
           density:1
         }
         this.body = Bodies.rectangle(x,y,50,50,pigOptions); 
         World.add(myWorld, this.body);
   
         this.width = 50
         this.height = 50
    }
    display(){
       var position = this.body.position;
       var angle = this.body.angle;
       push();
       translate(position.x, position.y);
       rotate(angle);
       fill("lightGreen");
       strokeWeight(4);
       stroke("green");
       rectMode(CENTER);
       rect(0,0, this.width,this.height);
       pop();
    }
   }