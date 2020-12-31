class Rocks{

    constructor(x,y,radius){
    
    var option = {
    
    restitution:0.0,
    friction:1,
    density:1.2
    
    }
    
    this.body = Bodies.circle(x,y,radius,option);
    this.radius = radius;
   
    World.add(world,this.body)
    this.image = loadImage("stone.png");
  
    
    
    }
    
    
    display(){
    push();
    ellipseMode(RADIUS)
    translate(this.body.position.x,this.body.position.y)
    rotate(this.body.angle)
    fill("pink")
    stroke("black")
    image(this.image,0,0,this.radius*3,this.radius*3)
    //ellipse(0,0,this.radius,this.radius)
    pop();
    
    }
    
    
    
    
    
    
    
    
    
    
    
    }