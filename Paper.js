class Paper {
    constructor(x, y,diameter) {
      var options = {
          isStatic:false,
          friction:0.5,
          density:1.2,
          restitution:0.3
      }
      this.body=Bodies.circle(300,150,5);
      World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        fill("violet");
        ellipse(pos.x, pos.y,this.diameter);
        
    }
}

