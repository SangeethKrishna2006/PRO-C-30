class Sling {
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.1,
            length: 10
        }

        this.pointB = pointB
        this.slingShot = Constraint.create(options);
        World.add(world, this.slingShot);

    }

    fly(){
        this.slingShot.bodyA = null;
    }

    attach(body){
        this.slingShot.bodyA=body;
    }

    display(){

        
          strokeWeight(5);
          stroke("grey");
          if(this.slingShot.bodyA){
          var pointA = this.slingShot.bodyA.position;
          var pointB = this.pointB;
          line(pointA.x , pointA.y , pointB.x , pointB.y,);
        }
    }
}  
     
                                                                                              