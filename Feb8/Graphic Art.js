function setup() 
{
  createCanvas(800, 800);
  strokeWeight(0.5);
  stroke(255);
  background(0, 225, 225);
  DrawFlower(); // Calling the DrawFlower function in the setup
}

function DrawFlower() // Defining DrawFlower function with no parameters
{
  for (i=0; i<=2000; i++) // For loop that runs its functions 2000 times 
    {
      RandX=random(width); // Assigning the value of randomized width size to variable 'RandX'
      RandY=random(height);// Assigning the value of randomized height size to variable 'RandY'
      fill(random(255), random(255), 255); 
      ellipse(RandX,RandY,20,20); // Draw ellipse with random position RandX, and RandY, and size 20
      ellipse(RandX-25,RandY-5,20,20); // Draw same ellipse but adjust location
      ellipse(RandX-15,RandY+5,20,20);
      ellipse(RandX-15,RandY-20,20,20);
      ellipse(RandX,RandY-15,20,20);
      fill(0); // Change fill 
      ellipse(RandX-10,RandY-8,10,10);// Draw small center ellipse
    }
}
  