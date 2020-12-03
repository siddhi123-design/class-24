class Ground{
 constructor(x, y, width, height){
    var groundOptions={
        isStatic:true 
      }
      this.body = Bodies.rectangle(x,y,width,height,groundOptions); 
      World.add(myWorld, this.body);

      this.width = width
      this.height = height
 }
 display(){
    push();
    fill("brown");
    rectMode(CENTER);
    rect(this.body.position.x, this.body.position.y, this.width,this.height);
    pop();
 }
}

