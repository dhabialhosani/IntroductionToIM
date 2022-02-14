# Assignment 3


## Below is a clip of the interactive graphical art piece I created on p5.js

https://user-images.githubusercontent.com/98512511/153943061-669af09f-a73d-4d6a-bf2e-5cd450c0129c.mp4

#### Difficulties and Things I Learnt in the Process:

1. First I was very stuck on what to create and how to create it. This code that I found online inspired me to draw butterflies. I followed what was done in the butterfly function. I did try to experiment with the sizes in mine but I found the size drawn most suitable so I decided to keep it as it is. I then went on to add movement to the butterflies and have them appear with the press of the mouse.

``` javascript
var x = 280;
var y = 280;
function setup() {
  createCanvas(600,600);
 frameRate(10);
}

function draw() {
 background(255);
  
 for (var i=0;i<10;i++) {
  var xDis = random(-180, 180);
  var yDis = random(-180, 180);
  butterfly(mouseX+xDis, mouseY+yDis);
 }
 
 x = x+random(-5, 6);
 y = y+random(-4, 4);
 butterfly(x, y);
}

function butterfly (x, y) {
 line(x-15,y-10,x,y);
  line(x+15,y-10,x,y);
 // fill(YELLOW);
  ellipse(x-25,y+20,35,30);
  ellipse(x-25,y+40,35,30);
  ellipse(x+25,y+20,35,30);
  ellipse(x+25,y+40,35,30);
  ellipse(x,y+30,30,60);
}
```

2. I faced difficulties in terms of having the butterflies move in vertical motion. I was able to resolve that by constantly updating the y position under the move method of the butterfly class. 
3. I was not sure as to how to use the arrays, but once I got the hang of them they simplified my code very much. I got help from the following video to navigate the use of arrays: https://www.youtube.com/watch?v=VIQoUghHSxU
4. Given that the use of constructors was new to me, sometimes I forgot to use “this.” to specify which led to lags in my code. 
5. I also learnt the importance of differentiating between local and global variables as I tried to call the Butterflies array in the setup function and then was unable to use it anywhere. 

