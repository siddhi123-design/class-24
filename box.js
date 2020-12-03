class Box{
    constructor(x, y, width, height){
       var boxOptions={
           isStatic:false,
           friction:1,
           restitution:0.2,
           density:1
         }
         this.body = Bodies.rectangle(x,y,width,height,boxOptions); 
         World.add(myWorld, this.body);
   
         this.width = width
         this.height = height
    }
    display(){
       var position = this.body.position;
       var angle = this.body.angle;
       push();
       translate(position.x, position.y);
       rotate(angle);
       fill("pink");
       strokeWeight(4);
       stroke("black");
       rectMode(CENTER);
       rect(0,0, this.width,this.height);
       pop();
    }
   }