class Ball {
    constructor(x,y,radius) {
        var options = {
            isStatic: false,
            restitution: 1,
            friction:0,
            density:0.8
        }
        
        this.body = Bodies.circle(x, y, radius/2, options);
        this.radius = 40;
        this.x=x;
        this.y=y;

        World.add(world, this.body);
    }
    display(){
        var paperpos=this.body.position;
            push()
            translate(paperpos.x, paperpos.y);
            rectMode(CENTER)
            //strokeWeight(4);
            fill(255,0,255)
            //imageMode(CENTER);
            //image(this.image, 0,0,this.r, this.r)
            ellipse(0,0,this.radius, this.radius);
            pop()
       
    }       
};
