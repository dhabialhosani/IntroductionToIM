# Midterm Project

### Initial Concept for the Project:
I am very fond of memory games, so for my midterm project I am planning on creating one. This game is a bit different than normal memory games, the way in which it is supposed to function is by initially displaying an instruction page. Once the user presses to start the game it displays 4 cubes numbered 1 through 4 randomly for a few seconds, the numbers on the cubes then dissapear and the user is to guess the correct pattern. With every correct answer the game is to display a more difficult level by introducing an extra cube and shortening the viewing time. In the end my game should look somewhat similar to this with additional elements of score, time, and perhaps extra images that distract the player to make the game even harder:


https://user-images.githubusercontent.com/98512511/156076150-b4d0374b-d09c-4b22-92f9-31ca56d6d570.mov



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
