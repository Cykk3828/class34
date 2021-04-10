class Ball{
    constructor(x,y,w,h){
    var options={
        frictionAir:0.005,
        density:2
    }
    this.ball=Bodies.rectangle(x,y,w,h,options);
    this.h=h
    this.w=w
    World.add(world,this.ball);

    }
    display(){
        push()
        translate(this.ball.position.x,this.ball.position.y);
        rotate(this.ball.angle)
        fill("yellow")
        ellipse(0,0,this.w,this.h);
        pop()

    }
}