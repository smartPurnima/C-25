class Paper{
 constructor(x,y,r){
   var options={
      isstatic:false,
      restitution:0.3,
      friction:5,
      density:1.2

   }

   this.x=x
   this.y=y
   this.r=50
   this.body= Bodies.circle(this.x,this.y,(50-20)/2,options);
   this.image=loadImage("paper.png")
   World.add(world,this.body);

  }

   display(){

    //var posBottom= this.bottomBody.position;
     var pos= this.body.position;
     

     push()
			translate(this.body.position.x, this.body.position.y);
			rectMode(CENTER)
			//strokeWeight(4);
			angleMode(RADIANS)
			//fill()
			imageMode(CENTER);
			image(this.image,0, 0, 45, 53)
			pop()
			
   }
}