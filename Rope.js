class Rope
{
    constructor(bodyA,bodyB, offsetX, offseyY){

        this.offsetX = offsetX;
        this.offsetY = offseyY;

    var options ={
        bodyA: bodyA,
        bodyB: bodyB,
        pointB: {x: this.offsetX, y: this.offsetY},
        stiffness: 0.05,
        length:100
    }

    this.rope = Constraint.create(options);
    World.add(world,this.rope);
    }

    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;

        var anchor2X = pointB.x + this.offsetX;
        var anchor2y = pointB.y + this.offsetY;
        strokeWeight(4)
        stroke("yellow")
        SVGPathSegLinetoAbs(pointA.x, pointA.y,
            anchor2X, anchor2y);
    }
}