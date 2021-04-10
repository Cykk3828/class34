class Box  {
  constructor(x, y, width, height){
   var option={
     restitution:1,
     friction:1
   }
    this.rec=Bodies.rectangle(x,y,width,height,option);
    this.width=width
    this.height=height
    World.add(world,this.rec)
  }
display(){
  push()
  translate(this.rec.position.x,this.rec.position.y)
  rotate(this.rec.angle)
fill("black");
stroke("red");
strokeWeight(4);
  rectMode(CENTER)
  rect(0,0,this.width,this.height)
  pop()
}
}
