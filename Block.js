class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.visibility = 255;
      this.image = loadImage("block.png");
      this.body = Bodies.rectangle(x, y, width, height, options);
      World.add(world, this.body);
    }
    display(){

      if(this.body.speed<3){
        var pos= this.body.position;
        push ();
        imageMode(CENTER);
        image (this.image, this.body.position.x, this.body.position.y, 35,35);
        pop ();
    }
    else{
      World.remove(world, this.body);
      push();
      this.Visiblity = this.Visiblity - 5;
      tint(255,this.Visiblity);
      image(this.image, this.body.position.x, this.body.position.y, 35, 35);
      pop();
    }
  }
}