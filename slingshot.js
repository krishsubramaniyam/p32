class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        this.image=loadImage("sprites/sling1.png");
        this.image1=loadImage("sprites/sling2.png");
        this.image2=loadImage("sprites/sling3.png");

    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
           
            
            

            if (pointA.x<220) {
            strokeWeight(8);
            line(pointA.x-20, pointA.y+20, pointB.x-10, pointB.y+20);
            line(pointA.x-20, pointA.y+20, pointB.x+30, pointB.y+20);
            image(this.image2,pointA.x-30,pointA.y-10,15,30);
            
            } else {
            strokeWeight(4);
            line(pointA.x+20, pointA.y, pointB.x-10, pointB.y);
            line(pointA.x+20, pointA.y, pointB.x+30, pointB.y);  
            image(this.image2,pointA.x+20,pointA.y-10,15,30);
            
            }
        }

        image(this.image,200,120,40,100);
        image(this.image1,170,120,40,60);


    }


    
}