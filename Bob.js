class Bob{
    
    constructor (x,y){
        var options = {
            isStatic: false,
            restitution: 1,
            friction: 0,
            density: 7.8,
        }
        this.body = Bodies.circle(x,y,25,options);
        this.r = 25;
        World.add(this.body);

        console.log(this.body);
    }



    display(){
        var angle = this.body.angle
        push();
        translate(this.body.position.x, this.body.position.y)
        rotate(angle)
        ellipseMode(RADIUS);
        fill(254, 0, 255);
        ellipse(0,0,this.r);
        pop();

    }
}