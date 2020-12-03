class Log{
    constructor(x, y, height, angle){
       var logOptions={
           isStatic:false,
           friction:1,
           //restitution:0,
           density:1
         }
         this.body = Bodies.rectangle(x,y,20,height,logOptions); 
         Matter.Body.setAngle(this.body, angle)
         World.add(myWorld, this.body);
   
         this.width = 15
         this.height = height
    }
    display(){
       var position = this.body.position;
       var angle = this.body.angle;
       push();
       translate(position.x, position.y);
       rotate(angle);
       fill("yellow");
       strokeWeight(4);
       stroke("black");
       rectMode(CENTER);
       rect(0,0, this.width,this.height);
       pop();
    }
   }