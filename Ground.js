class Ground{

//CONSTRUCTORS- PROPERTIES
constructor(x,y,width,height){

    var goptions = {
        //makes the body stationary...not moving
        isStatic:true
        
        }

    this.body = Bodies.rectangle(x,y,width,height,goptions);
    this.width= width;
    this.height=height;
    World.add(world,this.body);

    
}

//METHODS/FUNCTIONS- DISPLAY/DO SOMTHING ON THE OUTPUT SCREEN

display(){
    rectMode(CENTER);
    fill("grey");
    rect(this.body.position.x, this.body.position.y,this.width, this.height );
}


}