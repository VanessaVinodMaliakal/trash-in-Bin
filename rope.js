class Rope{
    constructor(body,point){
      
         var options={
            
            bodyA:body,
            pointB:point,
            stiffness:0.002,
            length:20
            
        }
        this.rope=Constraint.create(options);
     

World.add(world,this.rope);
    }
fly(){
    this.rope.bodyA=null;
}
    
    
    display(){
        if(this.rope.bodyA!=null){
            //push()
    
        var pointA=this.rope.bodyA.position;
        var pointB=this.rope.pointB;

        strokeWeight(2.5);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
       // pop()
       }
        
    }
}