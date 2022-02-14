let Butterflies = [];
function setup()
{
  createCanvas(800, 600);
}
function draw()
{
  background(155,200,255);
  for(let i = 0; i < Butterflies.length; i++) // For loop that runs to call the print method and move method from the butterfly class as functions for the butterflies array. (this allows for the array of butterflies to be printed on the screen and moved)
  {
    Butterflies[i].print();
    Butterflies[i].move();
  }
}

function mousePressed()//function that updates the array of butterflies adding one for every mouse press
{
  let MoreButterflies = new Butterfly(mouseX, mouseY);
  Butterflies.push(MoreButterflies); //Push saves the new butterfly to the butterflies array
}

// A class for to draw a butterfly
class Butterfly
{
   
  constructor(x, y)
  {
    this.x = x;
    this.y = y;
    this.Direction = -1;
  	this.Velocity = 2;
    this.speed = int(random(1, 100));
    this.Color = color(random(255),random(100),random(200));
  }
  move()
  {
    // Calculation the new x, y position of the butterfly.
    this.y += (this.Direction * this.Velocity);
    if(this.y < 0 || this.y > width) //If statement for when the butterflies hit the end of the screen
    {
      this.Direction = -this.Direction; // Reverses the direction
      this.y = (this.Direction * this.Velocity) + 1; // Updates the y direction (forms the vertical motion)
    }
 
  }
  print() //Draw the butterflies onto the screen
  {
  // All the parts of each butterfly use x and y coordinates specific to it, hence the use of "this."
  line(this.x-15,this.y-10,this.x,this.y);
  line(this.x+15,this.y-10,this.x,this.y);
  fill(this.Color);
  ellipse(this.x+25,this.y+20,35,30);
  ellipse(this.x+25,this.y+40,35,30);
  ellipse(this.x-25,this.y+20,35,30);
  ellipse(this.x-25,this.y+40,35,30);
  ellipse(this.x,this.y+30,30,60);
  }
}

