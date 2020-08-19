class ball{
constructor (){
var ball_options ={
    isStatic:false,
    restitution:0.3,
    friction:0.5,
    density:1.2
}
this.ball=Bodies.circle(100,50,10,ball_options);
World.add(world,this.ball);	    
this.ball.position.x=mouseX;
this.ball.position.y=mouseY;
}
display() {
ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 10, 10);
}
}

