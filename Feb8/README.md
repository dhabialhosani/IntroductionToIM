# Assignment 2


## Below is the graphical art piece I created on p5.js

![Graphic Art](https://user-images.githubusercontent.com/98512511/152915472-3a15de48-6a17-4307-8a1e-238776027b0c.png)


#### Difficulties and Things I Learnt in the Process:
1. The concept of creating while and for loops as a whole was a bit confusing to me so I had to search online for some inspiration. 
      The following video got me started with the basics: https://www.youtube.com/watch?v=1c1_TMdf8b8
      I followed the demonstration to create a simple drawing with multiple circles, and this was what I initially produced:
``` j5ps
function setup() 
{
  createCanvas(600, 400);
}

function draw() 
{
  background(250);
  strokeWeight(4);
  stroke(0);

  for (var x = 0; x <= width; x += 50) // For loop that runs another for loop for every value of 'x'
  {
    for (var y = 0; y <= height; y += 50) // For loop that draws an ellipse for every value of 'y' associated with 'x'
    {
      fill(200, 150, 100);
      ellipse(x, y, 25, 25);
    }
  }
}
```
![Ellipses](https://user-images.githubusercontent.com/98512511/152916769-03f179de-da5a-4da0-a02e-f8d48f0f1712.png)
      

      
      
      
3. Having two identical drawings being reflected on each side of the face. 
4. Working with the correct coordinates and positions. 
5. Adding detail to the sketch.



I also learnt quite a lot as I was inspired by already done self portraits on j5ps:
1. I learnt how to use the beginShape command.
2. I learnt how to navigate the coordinates of the shapes.
3. I learnt the importance of changing the fill and stroke as I worked. 
4. While I did not use comments in this project, I realized how helpful they could be in terms of organizing the work. 
