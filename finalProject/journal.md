## Initial ideas
- While completing this weeks homework, i found the first exercise really fun and interesting since i managed to use two sensors to control the position of the circle.
- one final project idea would be to use the grid feature in p5.js to create a sensitive maze where if you touch the walls of the grid you lose or a buzzer sound plays and you lose a 'life'.

- another idea would be a picture of a lighthouse with a light that blinks in morse code depending on the letters that the user puts in with their keyboard

- another idea built on a homework that ive done where i used two led lights in a creative way, using a light sensor/potentiometer/button to 'break into' a vault that rotates and clicks at different points on the screen.

- another idea i had would be to use three buttons to control a music beat game where different colors pop up

## Final idea
We decided to go with the idea of using a light sensor/ potentiometer/ button to 'break into' a vault that rotates and clicks at different points on the screen. This was built on a homework that I've done where I used two led lights in a creative way where the user had to stop them from flickering by using those sensors. <br />

The basic premise of the game would be that there is a locked vault on the screen and the knobs could be twisted using the potentiometer on the arduino. The aim is to unlock the vault and for the user to receive a ‘reward’. <br />

Since we will be doing this as a pair, we thought one way of taking this idea a step further is by making it a multiplayer game, where both players determine the end result and progress. The second player will be given the goal of unlocking the vault potentially using:
- 2 potentiometers and a button 
- Or 3 potentiometers
- Or 1 potentiometer, a light sensor, and a button <br />

Meanwhile, the first player would be tasked with ‘setting up’ the vault password or extra mechanics. This could potentially be through:
- Using a potentiometer to determine the password
- Or typing in a number or group of numbers that determine the password
- Or sabotaging the other player by setting a time limit with a potentiometer for an alarm/ creating distractions such as shapes floating on the screen every time a button is pressed <br />

In terms of the arduino and p5 program for the first player:
- We could use a variable in p5 that stores the value from the potentiometer input and that would determine at what point the vault opens for the second player
- We could use the ‘code’ function in arduino to make it so that the number from 1-10 represent a range of individual passwords represented in potentiometer values that would determine the password for the vault depending on the number pressed by the first player at the beginning of the game
- If the player were to sabotage the second player by setting a time limit, this could be done by mapping the values of a potentiometer to seconds such as 100-10,000 and then storing that in a variable that can be put in an if statement. The if statement would then initiate an alarm sound from p5 if the variable (time limit) has been reached.
- If the player were to sabotage the second player by creating distractions, an array of shapes such as ovals, circles, or squares can be put into an array where their movement can be set to random. The shapes would appear if the button from arduino sends an input value of being pressed. How often or how many shapes appear can be determined based on user testing. So it could either be that more shapes appear with every press of a button, or the shapes only appear if the button is being pressed. <br />

In terms of the arduino and p5 program for the second player:
- If the potentiometers are used, they would act as an input that is sent to p5 as a number and would control whether the knob on the screen rotates and by how much. One way we could do this is by mapping the values of the potentiometer to the 360 angles of the knob circle shape and creating variables to change as the potentiometer changes.
- If a button is used with the program, this could also act as an input that opens the door of the vault to reveal the final prize 
- If a light sensor is used, it could control whether the user is applying pressure to the knobs in order to twist it, which would mean they have to interact with both the potentiometer and light sensor in order to work out the puzzle. This could increase the level of interactivity and make the game more interesting. We could code this using if statements that ensure both are being used. For example, if the light sensor is above a certain value the input from the potentiometer will be able to rotate the circle knob on p5. We could also include text instructions on the screen for clarity. <br />

Challenges we might encounter:
- In planning our idea initially, we thought of having it be a single-player game. This seemed a bit too simple when we looked into the process of creating the project, hence, we decided to introduce another player into the game. While this makes the game more interesting, it also adds onto the complexity of creating it. As written above, we have thought of the general programming, but one thing we are still unsure about is how we could have the programs for both players running in a parallel manner. That is, they both set the vaults for one another, and then both play in the same instance to figure out how to break into the vaults and win. 
- We’re still brainstorming ways to achieve this, however, if we found ourselves stuck, one thing that could be done is having the first player work on the settings, and the second player then trying to unlock the vault. Their performance could be tracked by a timer and once they are done the game could be restarted and the results of both players could be compared. 
## First working session
- we decided to first make the circuit and p5 screen separately to make sure both worked individually so that we don't face any difficulties later down the line and incorrectly attribute it to miscommunication between the devices.
### The circuit
- Dhabia and I decided to create a circuit including 1 potentiometer, 1 light sensor, and 1 button, to have a range for the user to interact with. 
- this is the circuit we've built so far:
  - (insert image)
- we tested the potentiometer, light sensor, and button to see if they were returning the correct values individually by using the serial.println() function 
### P5
- on p5, we tried testing different ways of visualizing the safe/vault;
  - we first thought of using a gif or video of a vault that would be a still image when the potentiometer is on the minimum/maximum value and would move/play when the potentiometer would be any value in between.
  - however, we had some trouble implementing this and making it cohesive with the rest of the user interface
  - instead, we are using the shapes in p5 to make the vault. The progress so far consists of a 3D square constructed using the rect() and quad() functions. Then, inside, there would be two circles placed on top of eachother. This is to create the illusion of the user 'pressing on the handle' by making the inside circle shrink every time the light sensor is touched. this could be implemented using an if statement. 
  - inside the smaller circle would also be a line that would rotate. this would act as an indicator to the users that they are turning the potentiometer and in which way. instead of a line() function, we used a very thin rect() so that it can be rotated with the (CENTER) mode, and can be visible enough to users.
  - At first when we did this, the rotating rect() would disappear once the rotate function was put into the code. after referring back to the class on transformations using p5, and visiting the link (https://genekogan.com/code/p5js-transformations/) with example p5 sketches, we found out that the missing piece of code was the translate() function, which would move the origin to the pivot point. This would allow the rotating rect() to stay in its place.
  - to allow users to rotate the potentiometer in order to rotate the vault handle in real time, we thought of first setting the angleMode() to DEGREES so that it would be easier for us to understand and properly map the 1023 values of the potentiometer to the 360 degrees of the rotating rect().
### Goals for the next work session
- we will be using a clicking sound implemented into p5 instead of one on arduino so we can control it better
- make a starting screen with clear and concise instructions
- now that player 2 can successfully interact with the vault, we need to start working on player 1, and seeing how we can allow them to set the 'password' for the vault which would then be stored into a variable and used as the pasdword for player 2 to figure out using the potentiometer and listening for the sound. if this doesnt work, we will use the alternative player 2 roles like sabotage.

### Our questions so far and what we have tried:
- We’re still struggling with connecting P5 to Arduino. We followed the Jack’s tutorials again to ensure we were not missing anything. In using his examples the communication worked perfectly, but when it came to using our own code on P5 the communication failed. 
- To try to overcome this issue, we also followed this https://www.youtube.com/watch?v=feL_-clJQMs
- tutorial on YouTube. This gave us an insight on how we can make the serial communication work but we were still faced with some confusion. Attached below is an image of the arduino board as well as a short clip of the work we produced following the tutorial. We are still attempting to implement the same method on our personal work and will hopefully get past that. 

## Second working session
- during this work session ion class, we worked on our biggest issue which is the serial communication.
- before this, i had tried using serial communication codes from online p5 sketch examples (insert link) (insert link)
- during this session, with the help of professor Michal Shiloh, we worked through different methods of serial communication to see what worked most efficiently.
- at first, we tried running professor Aaron's sketch (https://editor.p5js.org/aaronsherwood/sketches/q2Pl77SWl) exactly how it is without changing anything. at first, a pop-up would appear asking the user to select a port and once it was selected, serial communication would be successful. Given this, i modifyed the code in both arduino and p5 to suit the 3 sensors (light, potentiometer, button) in my arduino circuit instead of the two sensors built in. however, when i tried to run the serial communication this time, it was not successful. i revisited professor Aarons example to see if this issue prevaled using his sketch and it did. The issue also continued even when tabs were closed and reopened and plugs were taken out and plugged in again. we quickly found that the only way time the serial communication worked was the first run of the sketch when the computer was restarted.
- given this obstacle, we tried adapting another serial communication sketch from professor Aaron (https://editor.p5js.org/aaronsherwood/sketches/kN6wwHyat) where instead of asking the user to select a port with a pop-up tab, it will try to find an arduino thats already been given permission to use in the browser using the function setUpSerial().
- This worked perfectly in terms of serial communication, and did not require any unplugging or restarting. so far, it has been working reliably so we feel confident to move forward with this code.
- now that the communication is working, i coded the basics of the game, being the potentiometer and the light sensor. 
- for the potentiometer, its values (stored in the variable potVal) from 0 to 1023 were mapped to the 360 degrees of the rotating rect() using map() and stored directly into the rotate() function. this way, the rotating of the potentiometer directly corresponds to the rotating vault knob.
- for the light sensor, i stored the values into a variable called lightSensor and use an if statment that changes the size of the knob and turns a small circle (indicator) from the color red to green when the light sensor is below a certain value. this is to create the impression that the when the user lightly on the light sensor, it is as if they are pressing on the knob to rotate it. this will also be usful for when we employ the sound indicator for the correct pasword so that the user can only hear it when they press on the light sensor while also rotating the potentiometer.
- as for the value of the light sensor in the if statement, i used trial and error to see which value could return a red color in bright light (when not pressed) and return a green color (when pressed). i wanted this to applicable to a broad range of settings where light is relatively bright. after a few trials, i came to the conclusion that <500 was a reliable value, however this may change in future work sessions or during user testing.

## Third working session
- During this working session, i wanted to start on the player 1 mechanics (setting password/sabotage player 2) since the player 2 user interactions are sufficiently working. 
  - so far, here is what the p5 screen is looking like:
  - (insert image)
  - and this is the schematic:
  - (insert image)
- in order to create a start screen where player 1 would be able to input a password value from 1-360 (corresponding the degres of rotation) i refered to a tutorial by youtuber Scott Fitzgerald and his video and p5 sketch (https://www.youtube.com/watch?v=BPcL8TfVU1w) (https://editor.p5js.org/shfitz/sketches/FwdoTeh2T)
- his video was really insightful and educational, i was able to adapt his code on a seperate p5 sketch to test how it would work. instead of the instead of defining the value from the input as a color as seen in the original code, i used the int() function to convert any given number into an integer and store it. i also changed the variable names to fit more appropriately to the context of the program. I also created an if() statement to prevent users from typing or using a number higher than 180. I did this using the return function. here is the basic premise:
  - (insert images)
- p5.js code: https://editor.p5js.org/ShN/sketches/lF-uy7zFC
## User Testing
- We had two of our friends test our project halfway through to try to understand what exactly is missing and what could be added onto it to make the game more challenging and interesting. To start off we did not explain anything to either of our friends, we decided to let them figure their way through the game on their own. Immediately, we realized that there existed some sort of confusion, we thought that perhaps this could be solved by including an introductory page just to make things more clear for the users. After we explained to them the way in which they are meant to navigate the game we observed their reactions and noted some significant points to improve and add. 
- User 1 (Notes) : 
  - Including a time limit would add more to the challenge. 
  - Unsure of what happens after they break the code. 
  - Sound effects would make the game more interesting. 
- User 2 (Notes):
  - Unable to figure out the light sensor at first. 
  - Suggested we added a buzzer that turns on when the safe is unlocked. 
  - Confused about what happens after unlocking the safe. 
- Taking their notes into consideration, we decided to add a buzzer that beeps once the safe is open alongside a clicking sound that is played on the screen. We also plan on having the users advance to the next phase wherein the safe is open and the user is meant to collect the money. One other thing we would like to add is an introductory page of some sort to guide the users to the way in which they are meant to use the program. Finally, we will attempt to add a time limit to raise the stakes of the game and make it more challenging. 

## Fourth working session 
Unfortunately we faced struggles while working with the serial communication. For some unknown yet reason the serial communication only worked on the IM laptop we borrowed. This led to a setback in our work, but as soon as we figured that out we were able to continue working.

We took by the feedback we got from the user testings we did earlier and decided to add some extra features to our project. 

First off we added an instruction page to guide the users of our program to the way in which they’re supposed to use it. This was not much of a challenge as we both had experience working with menus and instruction pages on P5 from our earlier work in the midterm project. We decided to make it look a bit more creative by incorporating images on the page. Below is an image that shows what our instructions page looks like. 

We also though it was necessary to make sure that the value of the light sensor received remained consistent across environments, that is, it does not change with the change of lighting and impact the experience of the users. To do that we added an led light and sound effects were also used.

One thing we also added following the user testing’s suggestions to make the game a bit more challenging was a flashlight. This effect is intended to be used by user 1 to sabotage user 2’s experience. We did so by adding an audio that turns on with the flash effect on the screen. This happens as soon as the vault is clicked.

Struggles/overcoming them:
Couldn't find a way to stop the audio from looping so it sounds like a continuous ‘beep’
Switching screens was hard to keep in mind as code progressed, but it works well now
Biggest issue was serial communication, only worked with one laptop, faced hardships as this was a collaborative project
Originally, all three sensors where not well spaced, not allowing users to comfortably play the game, so with a few adjustments, the arduino board was updated in terms of positioning of both the sensors and wires (picture below)
Good decisions we made:
By first building the arduino board and testing it independently from the p5 code, we faced no problems with it at any stage in our process, making solving bugs much easier
Although the serial communication only works with one laptop, the fact that it doesn't require another program to work definitely made replaying the sketch and the code easier
Saving the instructions to the last step meant that by that time we fully comprehended the game and played it enough times to be able to write clear, concise instructions for players to understand.
Doing the user testing early on in the process meant that the basic code of the game was evaluated, and ultimately led us to make more user-geared decisions in design and functionality.
