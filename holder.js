class Holder{
    constructor(x,y,width,height){
        var options={
           isStatic:true
        }
        this.holder=Bodies.rectangle(x,y,width,height,options);
        this.image=loadImage("bin.png");
        this.width=width;
        this.height=height;
        
        World.add(world,this.holder);
    }
    display(){
       imageMode(CENTER);
       image(this.image,this.holder.position.x,this.holder.position.y,this.width,this.height);
    }
}