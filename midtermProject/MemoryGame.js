// Defining constant variables for the rows of the game and the columns
const Rows = 5;
const Columns = 6;
// Defining different variables and assigning empty arrays to them
let Cards = [];
let imagesUp = [];
let imagesSlots = [];
let turnedCards = [];
// Defining a variable to be responsible for frame count and assigning null to it
let delayFrameCount = null;
// Defining variables
let cardsPressed;
let correctAnswer;
let backgroundClip;
let movingImage;
// Defining variables and assigning initial value of 0 to them
let MENU = 0;
let userTries = 0

function preload ()
{
  // loading background video into variable
  backgroundClip = createVideo ("Background.mov");
  // loading pressing and winning sounds into variables
  cardsPressed = loadSound ("Sounds/Pressing Cards.m4a");
  correctAnswer = loadSound ("Sounds/Correct Answers.m4a");
  // loading all portraits into an array
  imagesUp = [
    loadImage("Portraits/1.png"),
    loadImage("Portraits/2.png"),
    loadImage("Portraits/3.png"),
    loadImage("Portraits/4.png"),
    loadImage("Portraits/5.png"),
    loadImage("Portraits/6.png"),
    loadImage("Portraits/7.png"),
    loadImage("Portraits/8.png"),
    loadImage("Portraits/9.png"),
    loadImage("Portraits/10.png"),
    loadImage("Portraits/11.png"),
    loadImage("Portraits/12.png"),
    loadImage("Portraits/13.png"),
    loadImage("Portraits/14.png"),
    loadImage("Portraits/15.png"),
    ]
}

function setup()
{
  createShuffledImages(imagesUp); // Calling function and assiging array imagesUp to it
  createBlocks() // Calling function
  createCanvas(1352, 1352)
  // Adjusting visibility of clip
  backgroundClip.size(400, 400);
  backgroundClip.volume(0);
  // Hving the clip loop, and hiding its url from the top of the screen
  backgroundClip.loop();
  backgroundClip.hide();
}

function draw()
{
  movingImage = backgroundClip.get(); // assigning the clip to a variable
  Menu(); // Calling menu function
}

class Card // Creating a class responsible for running the functions of a single card. This enables me to run similar functions on different cards without having to repeatedly define their positions and proportions.
{
  constructor(x, y, faceUpImage) // x, y, faceUpImage are the required arguments of the constructor function of the class. WHen this class is called and the arguments are given it creates a new card.
  {
    // passing initial x and y arguments to the constructor
    this.x = x;
    this.y = y;
    this.width = 170; // defining constant width of cards
    this.faceUpImage = faceUpImage // initial image argument
    this.isFaceUp = false // assigning the value of the orientation of the card to false. When used in mouseClicked, it gets set to true if it meets the requirements.
  }
  drawCard()
  {
    fill(54, 81, 124)
    stroke(255, 255, 255)
    strokeWeight(4)
    rect(this.x, this.y, this.width, this.width, 20) // drawing a card at the positiong and size specified

    if (this.isFaceUp === true) // if statement that runs if card is flipped
    {
      image(this.faceUpImage, this.x, this.y, this.width, this.width) // displays specific image at specific position and size
    }
  }
  cardFaceUp(isFaceUp) // updating the value of the card's orientation
  {
    this.isFaceUp = isFaceUp
  }

  mouseOnCard(x, y) // This checks if the user clicked on the card. It returns true if the x and y positions of the mouse are between the x and y positions as well as the size of the card
  {
    return (x >= this.x && x <= this.x + this.width  &&
      y >= this.y && y <= this.y + this.width)
  }
}

// p5js function that runs when mouse is clicked. its responsible for many of the functions of the game including the transitioning from one page to another and the flipping of the cards
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
    // this if statement is for the back button, it is not put under if MENU is 0 because the back button is not used in the main menu
      if (mouseY < 993 && mouseY > 895)
      {
        cardsPressed.play();
        MENU = 0
        resetGame(); // function called to reset the game and allow the user to press start, enter the game, and play again.
      }
// Clicking functions of cards
  for (let i = 0; i < Cards.length; i++) // for loop, runs for the length of array of cards, so it performs its functions on every single card
   {
    if (Cards[i].mouseOnCard(mouseX, mouseY)) // check if the specific card element i in the array is under the mouse at the mouseX and mouseY position coordinates
    {
      cardsPressed.play(); // play clicking sound
      // now check if the number of turned cards is less than 2 and the card is not facing up already, if yes then carry the functions
      if (turnedCards.length < 2 && !Cards[i].isFaceUp)
      {
        Cards[i].cardFaceUp(true) // turn card of element i upward
        turnedCards.push(Cards[i]) // update the number of turned cards
        // now check if the length of the turned cards array is exactly equal to two.
        if (turnedCards.length == 2)
        {
          userTries++ // increment the number of tries
          // Now check if those two cards in that array are the same. Check if they occupy the same slot in the faceUpImage array to know if they are the same.
          if (turnedCards[0].faceUpImage === turnedCards[1].faceUpImage)
          {
              turnedCards[0].isMatch = true; // if they occupy the same slot then they are equal then the statement is true
              turnedCards[1].isMatch = true;
          }
            // if the length of the turned cards array is 2 but the cards do not occupy the same slot in the faceUpImage array, that is, they are nt the same images then update the value of delayFrameCount.
            delayFrameCount = frameCount; // the purpose of this variable is to have the unidentical cards appear for a while then flip back. This is done by updating the frameCount of their visibility.
        }
      }
    }
  }
}


function Menu () // Responsible for transitioning between different parts of the game
{
  background(255);
  // Drawing different rectangles as buttons to transition between menu, instructions, and game
  fill(54, 81, 124);
  rect(60, 980, 260, 100);
  rect(360, 980, 260, 100);
  rect(660, 980, 260, 100);
  textSize(50)
  fill(255);
  // Adding text to the rectangular buttons
  text('START', 105, 1050);
  text('HOW TO?', 375, 1050);
  textSize(50);
  text('EXIT', 730, 1050);
  // drawing the video frame by frame on the screen
  image(movingImage, 40, 40, 1000, 900);
  // if statement that runs if the value of MENU changes to 1
  if (MENU == 1)
  {
  background(255);
  updateGameStatus(); // Call function to run game
  // For loop that draws a card based on the Cards class functions. It runs as long as the length of the array.
  for (let i = 0; i < Cards.length; i++)
  {
   Cards[i].drawCard();
  }
  drawScoringMessage(); // Call function to run when user wins the game
  drawBackButton(); // Call function to draw a back to main menu button on the game page
  }
    // if statement that runs if the value of MENU changes to 2
  if (MENU == 2)
  {
    // prints background
    background(54, 81, 124);
    drawBackButton();
    textSize(30);
    // prints instructions
    text("- Cards will all appear facing down", 50, 570)
    text("- Press on the cards using your mouse.", 50, 610)
    text("- If you choose two matching cards they will remain facing upwards.", 50, 650)
     text("- If you choose cards that don't match they will flip back.", 50, 690)
    text("- The game keeps track of your number of tries so make sure you get the correct matches", 50, 730)
    text("  in the least amount of tries possible!", 50, 770)
    text("- The (BACK TO MAIN MENU) is always there for you to exit to the main menu in order", 50, 810)
    text("  to replay the game after you win or at any time you'd like!", 50, 850)
  }
    // if statement that runs if the value of MENU changes to 3
    if (MENU == 3)
  {
    // prints background
    background(54, 81, 124);
    drawBackButton();
    textSize(75)
    // prints text
    text('COME AGAIN SOON!', 25, height / 2)
  }
}
// Function to draw back button in instructions page, game page, and exit page
function drawBackButton()
{
  fill(54, 81, 124);
  rect(50, 895, 1000, 75);
  textSize(50)
  fill(255);
  text('BACK TO MAIN MENU', 285, 955);
}

function createBlocks()
{
  // for loop that runs the nested for loop until the variable i is less the number of columns
  for (let i = 0; i < Columns; i++)
  {
    // this for loop runs with every column producing a row. working together these loops run to produce single blocks to create rows and columns
    for (let j = 0; j < Rows; j++)
    {
      Cards.push(new Card(i * 170 + 40, j * 170 + 40, imagesSlots.pop()))// updating the value of cards by adding a new card to it from the class card specifiying the necessary details.
    }
  }
}
function resetGame() // function to be called when the back button is pressed
{
    // this for loop runs over the length of the cards array one by one and flips them over.
   for (let i = 0; i < Cards.length; i++)
    {
        Cards[i].cardFaceUp(false)//it turns their cardFaceUp status to false if it was true
    }
}
// This function is responsible for slowing down the frames to give the unidentical cards a chance to appear for a while before they are flipped back
function updateGameStatus()
{
// from being null to then being the value of the frames passed recorded right after the mouse was clicked, this function again updates the value of the frame count.
  //first it checks if both the frame count it recorded and the current frame count minus the frame count it recorded are greater than thirty. The choice of thirty is an estimate of the minimum number of frames passed.
  if (delayFrameCount && (frameCount - delayFrameCount) > 30)
  {
    // if the statement is true the for loop runs for every card
    for (let i = 0; i < Cards.length; i++)
    {
      // here it checks if the cards are facing up and they do not match
      if (!Cards[i].isMatch && Cards[i].isFaceUp)
      {
          Cards[i].cardFaceUp(false) // it turns this statement to false
      }
    }
    turnedCards = [] // restores the turned cards array to empty array
    delayFrameCount = null // restores the frame count it records to null
    // these allow for the repetition of the process
  }
}
//
function createShuffledImages(images)
{
  for (let i = 0; i < imagesUp.length; i++) // runs for the length of the array containing the portraitis
  {
    // adds images twice to the imageSlots array
    imagesSlots.push(images[i])
    imagesSlots.push(images[i])
  }

  imagesSlots.sort(function() //using sort to arrange them with 0.5 difference in randomness to ensure that first group of images is randomized differently than the other
  {
    return (0.5 - random())
  })
}
// This function is responsible for printing a message on the user's screen once they complete the game
function drawScoringMessage()
{
  let foundAllMatches = true // initially defining the value of the variable as true

  for (let i = 0; i < Cards.length; i++)
  {
      // assigning the 'true' value of foundAllMatches and the 'true' value of cards matching value of cards matching to foundAllMatches. This goes over every card, every 'i' element ensuring all cards match.
    foundAllMatches = foundAllMatches && Cards[i].isMatch
  }

  if (foundAllMatches)// if this is then true
  {
    correctAnswer.play(); //play winning sound
    noLoop(); // dont loop the sound
    fill(0, 0, 0)
    textSize(70);
    textStyle(BOLD);
    // print text with number of tries
    text("You found them all in " + userTries + " tries",180,550);
  }
}