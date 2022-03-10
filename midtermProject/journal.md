# Midterm Project

### Initial Concept for the Project:
I am very fond of memory games, so for my midterm project I am planning on creating one. This game is a bit different than normal memory games, the way in which it is supposed to function is by initially displaying an instruction page. Once the user presses to start the game it displays 4 cubes numbered 1 through 4 randomly for a few seconds, the numbers on the cubes then dissapear and the user is to guess the correct pattern. With every correct answer the game is to display a more difficult level by introducing an extra cube and shortening the viewing time. In the end my game should look somewhat similar to this with additional elements of score, time, and perhaps extra images that distract the player to make the game even harder:


https://user-images.githubusercontent.com/98512511/156076748-2537ea36-35ae-4e7c-9105-8c834178ac06.mov





#### Planning:
1. Display a number cubes
2. Have numbers appear on cubes RANDOMLY
3. Let numbers dissapear after a period of time 
4. Allow user to click on cubes
5. If the cube is clicked in correct order it must reveal the number, turn it green, and allow the user to continue.
6. If the user manages to click all cubes in order, the game takes them to the next advanced level that follows same method.
7. If the cube is clicked in an incorrect order all the numbers get revealed and the user gets to quit the game or replay. 
8. Elements of time, score, and menu should be incorporated.

#### Possible Difficulties:
The displaying of cubes with different numbers should not be so difficult nor should advancing from one level to another be as those functions could be done using loops and random values (for the numbers). However, I believe a few elements might be tricky, first of all the idea of introducing a new cube with every level, as well as having the numbers appear for only a short while and then dissapear seems a bit confusing to me. 
For the concept of time I watched Daniel Shiffman's video on the java script functions setTimeout() and setInterval() that allow me to trigger an action in the game at a given moment in time.
https://www.youtube.com/watch?v=nGfTjA8qNDA
Here is a very simple code I created for the sake of familiarizing myself with the functions. Now that I have learnt how to use them, I believe I can start thinking of the most effective ways of incorprating them in my game. 
``` javascript
let Numbers = ['1', '2', '3', '4', '5'];
let index =0;

function setup() { 
  createCanvas(400, 400);
  setInterval(changeNumber, 1234);
}

function draw() {
  background(220);
  textAlign(CENTER, CENTER);
  text(Numbers[index], width/2, height/2);
}

function changeNumber(){  
 index++; 
  
  if(index >= Numbers.length){
   index = 0; 
    
  }
}
```
This function program keeps the numbers following each othe after equal periods of time. I could use this same method, lengthen the time period and have the numbers appear once instead of looping. 

https://user-images.githubusercontent.com/98512511/156074632-53f2bb04-85a5-4f74-8065-d24905c63c51.mov


As for the next tricky part I expect to face in creating this project, I do not think there is a specific tutorial that can guide me through it, however the way I thought this issue could be resolved is by utilizing functions. I could set an if statement that runs if the player completes a level else it takes them to the main menu. This if statement, if returns true should call a function which is responsible for drawing the an extra cube next to the initial basic cubes, it should also be responsible for perhaps updating the number of cubes, so that with every time the function runs an extra cube is added to the current number. 

#### Process:
After proposing my idea I began working on the project, I tried taking it step by step but I was facing quite a lot of difficulties that I did not anticipate. First difficulty I faced was in terms of having the numbers appear on different blocks for every round. While this sounded easy to me, having the numbers be images made things a bit more complicated. Luckily I was able to make that to work by creating subsets for the array of images that I had. I made a subset for the first four, then the another subset for the first five, first six, etc. This worked well in allowing me to have the numbers appear on the blocks every time. As seen below this was a result of what I had initially done. 


<img width="290" alt="Screen Shot 2022-03-10 at 7 58 32 AM" src="https://user-images.githubusercontent.com/98512511/157585826-bc7d04a4-f1aa-42e8-93f4-d1b6daeaa452.png">



This however was not enough as I needed the numbers to appear randomly on the blocks every time. I attempted different techniques, but I struggled with one issue, that is, having the number appear only once while still having the numbers appear randomly. Below is part of my code for that initial project as well as a result of the code to show the issue in it. 
```javascript 
for (let i = 0; i<=3; i++)
   {
     x = getNonRepeatRand();
     Level1 = OnetoFour[x];
     if (i==0)
      {
         x = getNonRepeatRand();
         Level1 = OnetoFour[x];
         image (Level1,159,270,50,55);
      }
     if (i==1)
       {
         x = getNonRepeatRand();
         Level1 = OnetoFour[x];
         image (Level1,159,202,50,55);
       }
     if (i==2)
       {
         x = getNonRepeatRand();
         Level1 = OnetoFour[x];
         image (Level1,225,202,50,55);
       }
      if (i==3)
       {
         x = getNonRepeatRand();
         Level1 = OnetoFour[x];
         image (Level1, 225,270,50,55);
       }
   }
  noLoop();
}
function getNonRepeatRand()
{
    let randomNum = int(random(0,4));
    if (randomNum == lastRandom)
    {
       randomNum++;
       lastRandom = randomNum;
       return randomNum;
      
     }
    else
    {
    lastRandom = randomNum;
    return randomNum;
    }  
}
```
https://user-images.githubusercontent.com/98512511/157586461-9f85a160-e867-434c-877c-376fa125ab1f.mov

As seen in the clip, the numbers while appeared randomly did not always appear once. I tried to figure out a way to overcome this issue but it felt like a major setback for me and had me stuck on it for a while. That is when I came accross this Khan Academy memory game tutorial: https://www.khanacademy.org/computing/computer-programming/programming-games-visualizations/memory-game/a/intro-to-memory . When I first began viewing their tutorial my intention was to learn from their methods and apply them on my personal project. However given that their project was written in a language that is not completely similar to that of p5js I felt like there was a lot that could be learnt just through attempting to bridge the gap between the language of coding they used and p5js's. So, I decided to follow their tutorial while adding onto the project some of my own personal touches. 

I started off by identifying what features are required in a memory game and began excuting them in the way I deemed most fit. First of all I knew I needed to have my images, I decided to use the self portraits we created as a class just as a reminder of how far we have gone from the begining of the semester till now. Given that the images were only 15 I was able to load each one of them seperately into the array. However I also attempted to create a loop that. would shorten my code and make the process of loadding the images faster. As shown below this code was the one I used in my initial project when I was loading the images of the numbers. 
``` javascript
function preload() 
{
 for (let i = 0; i < num; i++)
  {
   Numbers [i] = loadImage("Numbers 1-16/" + (i+1) + ".jpg");
  }
 }
 ``` 
 This was a very effective way that shortened the process for me however in attempting to repeat it in my new code I faced issues that I am not yet able to undestand where they stem from. The images were only loaded when done seperately like such "loadImage("Portraits/1.png")". Even though that did not work well, I was glad to have the chance to experiment with both methods. 

Next, I knew I needed to have different rows and columns that displayed the cards. This wasn't something new to me especially since I worked with a similar concept in creating my latest assignment. So, unlike in the tutorial I decided to work on the basic structure of the columns and rows first. I began by creating the for loops then drawing individual blocks for each card. It was then that I realized the necessity in using the Classes which were quite terrfiying for me. So I paused the process of creating this function in aims of being able to creat it in a more well rounded and shorter manner.
Below is a small part of the code to show how I started without using the class
``` javascript 
for (let i = 0; i < Columns; i++)
  {
    for (let j = 0; j < Rows; j++)
    {
      fill(54, 81, 124);
      stroke(255, 255, 255);
      strokeWeight(4);
      rect(250, 350, 70, 70, 20);
      rect(350, 350, 70, 70, 20);
```
Realizing that this would take me forever, I began working on the Cards class like in the tutorial. I created the constructor then following that I began adding methods into the class, they were quite self explanatory and despite following the tutorial for guide I had already put in mind that I needed to create those different methods. One method however that was a bit confusing to me was that regarding the positioning of the mouse. When I was planning on creating the class I did not imagine a mouse clicked method be anywhere but under the mouseClicked function. Viewing the way in which the tutorial utilized the class for the mouse movement made so much more sense though as I only had to mention the statement that confines the cursor to the limits of the card once rather than repeatedly stating it and making constant changes with the positions.

Following that I worked on the different functions, which were all simple to follow through except for one. In the tutorial on Khan Academy there is the added feature of allowing the unidentical cards to appear for a while once pressed and then flip back. This was very confusing to me as I was not very confident in my knowledge on the concept of keeping track of time in a program. However when I followed through I was able to get a general idea on the concept. That is, initially a variable is assigned the value of null, later when the mouse is clicked the value of this variable is updated to the value of frame count, later in the draw function the value is changed again. This time it checks through a series of if statements and for loops, if the new value of the frame count is significantly higher than the old one then the cards flip and the frame count delay resets back to null.

Since following through the tutorial felt a bit simple, I needed to add more to my project. First thing I realized I could add was sound. I decided to add a clicking sound effect that followed the mouse click every time. Initially I tried to place it at the center of my mouseClicked function's  loop. 
```javascript
  for (let i = 0; i < Cards.length; i++) 
   {
    if (Cards[i].mouseOnCard(mouseX, mouseY)) 
    {
      if (turnedCards.length < 2 && !Cards[i].isFaceUp)
      {
        cardsPressed.play();
        Cards[i].cardFaceUp(true) 
        turnedCards.push(Cards[i]) 
       }
```
This worked perfectly fine but the sound seemed like it was playing a bit later than it should. I then decided to move it under the first if statment to have the sound played as soon as the mouse is pressed and regardless of any other statetment. 
```javascript
for (let i = 0; i < Cards.length; i++) // for loop, runs for the length of array of cards, so it performs its functions on every single card
   {
    if (Cards[i].mouseOnCard(mouseX, mouseY)) // check if the specific card element i in the array is under the mouse at the mouseX and mouseY position coordinates
    {
      cardsPressed.play();// play clicking sound
```
I also added another sound that appears once the user completes the game. In adding that sound I had to make sure I followed it by a noLoop(); statement so as to ensure that the sound does keep repeating and forming a beep. 
```javascript
if (foundAllMatches)// if this is then true
  {
    correctAnswer.play(); //play winning sound
    noLoop(); // dont loop the sound
```
Following the addition of sounds I began working on my menu. To add some creativity to it I decided to have a video playing of the game being played as a starter. The buttons displayed under the video are responisble for transitioning the user to the instuctions, the game, or the exit. Creating those buttons was not difficult at all, the only issue however was that after transitioning to the next pages the buttons were still aparent and I could still press them, meaning that while the user presses on the cards their mouse could also press onto the instructions page and they will then be transferred to it. I attempted to fix the issue by adding a white background behind each of my pages, while that fixed the issue of visibilty it did not fix the issue of the buttons being accessible throughout all of the pages. After doing some thinking I realized that the issue could be simply solved by associating the if statements that give the buttons their functionality to only the main menu, that way when the user transitions to the following pages they are unable to press or access those buttons. The code below shows the addition and the chnage it made. 

Before: 
```javascript
function mouseClicked()
      // if the mouse is within the position of the rectangle
      if (mouseX < 318 && mouseX > 64)
      {
        cardsPressed.play(); // play clicking sound
        MENU = 1 // change value of menu to respective value
      }
      if (mouseX < 618 && mouseX > 362)
      {
        cardsPressed.play();
        MENU = 2
      }
      if (mouseX < 917 && mouseX > 664)
      {
        cardsPressed.play();
        MENU = 3
       }
```
https://user-images.githubusercontent.com/98512511/157595250-54b5d075-c81f-43aa-972c-02b105e37828.mov

After: 
```javascript

function mouseClicked()
{
// Clicking functions of menu:
  if (MENU == 0) // if statemenet used here to ensure that the following only run in the menu page (only when MENU is 0) if not used the buttons get pressed in all pages
    {
      // if the mouse is within the position of the rectangle
      if (mouseX < 318 && mouseX > 64)
      {
        cardsPressed.play(); // play clicking sound
        MENU = 1 // change value of menu to respective value
      }
      if (mouseX < 618 && mouseX > 362)
      {
        cardsPressed.play();
        MENU = 2
      }
      if (mouseX < 917 && mouseX > 664)
      {
        cardsPressed.play();
        MENU = 3
      }
    }
```

https://user-images.githubusercontent.com/98512511/157595377-626cc625-b03f-4aa9-81d1-28b9f3d41fb0.mov

One more issue that I found in my project was the user's inability to go back to the main menu. Initially what I tried to use was the p5js function "keyCode" in my if statements. I had it move to the menu once the spacebar was pressed, while this worked in taking me back to the menu it stopped the menu from working. So, every time the user returned to the menu they were unable to access any other tab. Perhaps this is because the value of keyCode remains retained and that's why it impacts the functionality of the code. I fixed that by adding instead a back button that takes the user from any page back to the main menu. 

Before:
```javascript
   if (MENU == 3)
 {
    // prints background
    background(54, 81, 124);
    textSize(75)
    // prints text
    text('COME AGAIN SOON!', 25, height / 2)
    if (keyCode === BACKSPACE)
    {
      MENU = 0 
    }
  }
```
https://user-images.githubusercontent.com/98512511/157596532-735cc360-5ad4-42d5-ab4e-380c93f425dc.mov

After:
```javascript
 if (MENU == 3)
  {
    // prints background
    background(54, 81, 124);
    drawBackButton();
    textSize(75)
    // prints text
    text('COME AGAIN SOON!', 25, height / 2)
  } 
  
  function drawBackButton()
{
  fill(54, 81, 124);
  rect(50, 895, 1000, 75);
  textSize(50)
  fill(255);
  text('BACK TO MAIN MENU', 285, 955);
}

if (mouseY < 993 && mouseY > 895)
      {
        cardsPressed.play();
        MENU = 0
```

https://user-images.githubusercontent.com/98512511/157596861-7299e519-76d9-4c56-88cb-6875755fb7e3.mov


In resolving this issue I came accross a very significant one, that is, when the user transitions through pages by pressing the back button the game does not reset, and if cards were flipped over correctly they remain flipped over even after the user exits to the menu. To resolve that I created a function that resets the game by flipping all of the cards back. 

Before:
```javascript
if (mouseY < 993 && mouseY > 895)
      {
        cardsPressed.play();
        MENU = 0
        }
```



https://user-images.githubusercontent.com/98512511/157597930-84f6385d-dc45-4dd5-8951-fe2a337ac47c.mov

After:
```javascript
if (mouseY < 993 && mouseY > 895)
      {
        cardsPressed.play();
        MENU = 0
        resetGame();
        
 function resetGame() // function to be called when the back button is pressed
{
    // this for loop runs over the length of the cards array one by one and flips them over.
   for (let i = 0; i < Cards.length; i++)
    {
        Cards[i].cardFaceUp(false)//it turns their cardFaceUp status to false if it was true
    }
}
```

https://user-images.githubusercontent.com/98512511/157598137-a133c262-c7fc-4e36-90c5-9924ea4c34ac.mov

This is what the game looked like after all of the edits:


https://user-images.githubusercontent.com/98512511/157598618-7bbc7523-f52c-4dda-92e4-02a265d9dc61.mov



I had the game tested by one of my friends, one of them had a few recommendations and minor issues. She said that the font in the instructions was unclear, which is very true, for some reason the font keeps changing without me choosing to do so, I will try to look into ways to fix that issue. Another issue she mentioned was that the game was too big for the screen. Perhaps I will try to size down, or zoom out when the users are playing. Her recommendation was that I added a timer so that the user does not only know how many tries it took them but also how long. Overall, she really enjoyed the games and found the portraits very fun to look at as she was finding her way through the deck. 



