class Bob {
    constructor(x, y) {
        var options = {
            restitution: 1,
            density: 1,
            friction: 0.2
        }
        this.radius = 40
        this.body = Bodies.circle(x, y, this.radius / 2, options);
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        fill("lightBlue");
        ellipseMode(RADIUS);
        ellipse(0, 0, this.radius, this.radius);
        pop();
    }
}