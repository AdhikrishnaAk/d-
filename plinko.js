class Plinko{
    constructor(x,y,r){
    var options={ 
        isStatic:true
    }
    
    this.body=Bodies.circle(x,y,r,options)
    this.radius=r
    World.add(world,this,this.body)
    }
    display(){
    
    translate(this.body.x,this.body.y)
    ellipseMode(RADIUS)
    ellipse(0,0,this.radius)
    
    }
    
    }