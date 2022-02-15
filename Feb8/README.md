# Assignment 2


## Below is the graphical art piece I created on p5.js

![Graphic Art](https://user-images.githubusercontent.com/98512511/152915472-3a15de48-6a17-4307-8a1e-238776027b0c.png)

#### Difficulties and Things I Learnt in the Process:
1. The concept of creating while and for loops as a whole was a bit confusing to me so I had to search online for some inspiration. 
      The following video got me started with the basics: https://www.youtube.com/watch?v=1c1_TMdf8b8
      I followed the demonstration to create a simple drawing with multiple circles, and this was what I initially produced:
``` javascript
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
      
      
2. After understanding the idea behind the loops I tried to experiment with the ellipses. I faced difficulties in navigating the directions of the new ellipses, but eventually I was able to add an ellipse that overlpas the current one from the top left side. 


``` javascript
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
      ellipse(x-10, y-15, 25, 25);
    }
  }
}
```
![image](https://user-images.githubusercontent.com/98512511/152918195-59b636d8-34f7-48f9-ad49-98ec0863626b.png)

3. I continued expirementing with position of the ellipses, and decided to randomize the position which was quite difficult as I attempted to randomize the values within the loops.
4. Creating variables that had random widths and heights assigned to them allowed me to create what I was picturing.
5. I learnt that since I am not restricted by positions I no longer need to use nested loops, but rather a loop that runs its functions for as long as needed.
6. Randomizing the fill also allowed me to produce a different graphical image with each run.
##### The following are the images and codes before randomizing the fills and positions and after:
###### Before:
![image](https://user-images.githubusercontent.com/98512511/152920959-7ea8adbd-8679-4c4b-b13a-427709f9b11f.png)
###### After: 
![image](https://user-images.githubusercontent.com/98512511/152921097-ec6d6675-e7e6-4300-ae80-5e64d1ec8042.png)
