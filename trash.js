class Trash{

    constructor(x,y){
        
        this.trash=Bodies.rectangle(x,y,width,height);
        this.width=50;
        this.height=50;
        this.image=loadImage("trash3.png");
        
        World.add(world,this.trash);

    }

    display(){
       
      imageMode(CENTER);
      image(this.image,this.trash.position.x,this.trash.position.y,this.width,this.height);

    }

}