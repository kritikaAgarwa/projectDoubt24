class dustbin {
    constructor(x,y,width,height){
    var options = {
        isStatic:true
    }
    this.body=Bodies.rectangle(x,y,20,200,options);
    World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        rectMode(CENTER);
        fill("white");
        rect(pos.x,pos.y,20,150);
    }
}