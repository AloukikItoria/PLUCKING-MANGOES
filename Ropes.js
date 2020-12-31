class Ropes{

    constructor(bodyA , pointB){

        var roptions={

            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.8,
            length:200
            
           
        }

        this.rope = Constraint.create(roptions)
        World.add(world,this.rope)
        this.pointB = pointB;


    }//contructor

    display(){
    
     fill("black")
     stroke("black")
     if(this.rope.bodyA){
            var posA = this.rope.bodyA.position
            var posB = this.pointB
            line(posA.x,posA.y,posB.x,posB.y);
                
     }
        
    }//display 
    attach(body){
		this.rope.bodyA=body;
	}

	fly()
	{
		this.rope.bodyA=null;
	}

     
     
}
