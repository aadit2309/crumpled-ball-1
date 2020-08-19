class bin{
cronstructor(){
var options={
    isStatic:true
}
this.bin1=Bodies.rectangle(700,650,100,10,options);
this.bin2=Bodies.rectangle(600,650,10,100,options);
this.bin3=Bodies.rectangle(800,650,10,100,options);
this.width=width;
this.height=height;
World.add(world,this.bin1);
World.add(world,this.bin2);
World.add(world,this.bin3);
}

display(){
    Pull();
    rectMode(CENTER);
    rect(bin1.position.x,bin1.position.y,100,10);
    rect(bin2.position.x,bin1.position.y,10,100);
    rect(bin1.position.x,bin1.position.y,10,100);
push();
}



}