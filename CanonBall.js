class CanonBall {
  constructor(x,y) {
    var options = {
      "density" :   1.5,
      "friction" : 1.0,
      "restitution" : 0.8,
      "frictionAir":0.06
    }
    
    this.body = Bodies.rectangle(x,y,50,50);
    this.body.position.x = 600;
    this.body.position.y = 200;
    this.image = loadImage("assets/canonBall.png");
    
  };

  display(){
    imageMode(CENTER)
    image(this.image,this.body.position.x,this.body.position.y,50,50);

  };
};
