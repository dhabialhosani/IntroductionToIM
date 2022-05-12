// Defining variables and assigning initial values to them
let lightSensor = 0;
let potVal = 0;
let buttonVal = 0;
let left = 0;
let right = 0;
let degree = 0
let rotateKnob = 0
let redLight = 255
let greenLight = 0
let circleD = 100
let rectLength = 80
let startingScreenPosition = 0
let potValAdj
let moneyPic
let solvedScreen = 0
let allMoney = []

//Preload function to load images and sounds into assigned variables
function preload()
{
  moneyPic = loadImage('money.png')
  moneybagPic = loadImage('moneybag.jpg')
  rightPassBuzz = loadSound("rightPassBuzz.wav");
  wrongPassBuzz = loadSound("wrongPassBuzz.wav");
  flashlightSound = loadSound("flashlight.wav")
}
// Setup function responsible for creating a canvas and main page input button
function setup() 
{
  createCanvas(600, 600);
  angleMode(DEGREES)
  rectMode(CENTER) // Having the coordinates in the center of the canvas
  ellipseMode(CENTER)
  textSize(18);
  // Create a button
    userButton = createButton('submit'); // Create button, give it some text
    // Make an input button and position it
    userInput = createInput('type password here');
    // Take value from input button once mouse is pressed
    userButton.mousePressed(storePassword);
    // Assign that value to userPassword
    userPassword = '';
  //Calling serial connection function
  setUpSerial();
  //For loop that runs to add new money images from the class to the array 
  for (let i = 0; i < 25; i++)
    {
      // Assigning random x,y,r values to be used in the Money class 
      let x = random (145,400) 
      let y = random (145,400)
      let r = random (20, 60)
      let m = new Money(x,y,r)
      allMoney.push(m) // Adding to the allMoney array
    }
}
// Function responsible for procedures to run when mouse is pressed
function mousePressed()
{
  // For loop that runs calling the clicked function from the class for every element in the array. The loop runs for the entire length of the array
  for (let i = 0; i < allMoney.lenght; i++)
  {
    allMoney[i].clicked(mouseX, mouseY) 
  }
}
// Function responsible for drawing on the preview screen 
function draw() 
{
  background(200);
  fill(250)
  textSize(18);
  // Drawing the safe using quad and rect functions
  rect(300,300,350,350)
  quad(515,77,83,77,125,125,475,125)
  quad(515,526,83,527,125,475,475,475)
  quad(125,125,83,77,83,527,125,475)
  quad(475,125,515,77,515,526,475,475)
  quad(83,77,1,21,1,575,83,527)
  // For loop that is responsible to show all the money from the Money class on the screen 
  for (let i = 0; i < allMoney.length; i++)
    {
      allMoney[i].show()
    }
  // If statement that is responsible to transfer to the page where the vault is open when the user unlocks the password
  if (buttonVal > 300 && startingScreenPosition == 600 && potValAdj==userPassword && solvedScreen==0) 
  {
    // Making the screen with the opened safe visible by assigning value 600 to it
    solvedScreen = 600
  }
  //Mapping the minimum and maximum values for the potentiometer 
  potValAdj = int(map(potVal, 0, 1023, 0, 180)) 
  degree += +1
  fill(200)
  // Adding 'solvedScreen' here to ensure that this safe appears only when the open safe screen is displayed
  rect(300+solvedScreen,300+solvedScreen,600,600)
  fill(250)
  rect(325+solvedScreen,325+solvedScreen,350,350)
  ellipse(250+solvedScreen,350+solvedScreen,150,150)
  rect(250+solvedScreen,350+solvedScreen,150,1)
  rect(250+solvedScreen,350+solvedScreen,1,150)
  quad(80+solvedScreen,120+solvedScreen,430+solvedScreen,120+solvedScreen,500+solvedScreen,150+solvedScreen,150+solvedScreen,150+solvedScreen)
  quad(80+solvedScreen,120+solvedScreen,150+solvedScreen,150+solvedScreen,150+solvedScreen,500+solvedScreen,80+solvedScreen,470+solvedScreen)
  line(200+solvedScreen,300+solvedScreen,300+solvedScreen,400+solvedScreen)
  line(300+solvedScreen,300+solvedScreen,200+solvedScreen,400+solvedScreen)
  ellipse(250+solvedScreen,350+solvedScreen,circleD,circleD)
  fill(redLight,greenLight,0)
  ellipse(370+solvedScreen,270+solvedScreen,20,20)
  fill(250,250,250,250)
  translate(250,350); 
  push()
  rotate(potValAdj)
  rect(0+solvedScreen,0+solvedScreen,1,rectLength)
  pop()
  // If statement to check whether or not user unlocked the safe. If the light sensor is covered, then a green light will be displayed on screen indicating that the passcode was completely unlocked
  if (lightSensor < 800) 
  {
    greenLight = 255
    redLight = 0
    rectLength = 65
    circleD = 85
  } 
  // Else the light remains red
  else 
  {
    greenLight = 0
    redLight = 255
    rectLength = 80
    circleD = 100
  }
  // If statement that is responsible for playing the flashlight sound, this is associated with the flashlight effect that user 1 uses to sabotage user 2
  if (buttonVal > 300 && startingScreenPosition == 600 && solvedScreen==0) 
  {
    fill(250,250,250,100)
    ellipse(random(20,100),random(20,100),300,300)
    flashlightSound.play()
  }
  if (!serialActive)
  {
    text("Press Space Bar to select Serial Port", -250, -330);
  } else 
  {
    text("Connected", -250, -330);
  }
  fill(250,250,250)
  textSize(15)
  rect(50+startingScreenPosition,-50,500,500)
  fill(0)
  passwordValidity = text(userPassword, -100+startingScreenPosition,0);
  if (userPassword > 180) 
  {
    passwordValidity = text(userPassword + ' is not a valid password, try again.',-80+startingScreenPosition,-160);
  } else 
  {
    passwordValidity = text(userPassword, -100+startingScreenPosition,0);
  }
  userInput.position(200+startingScreenPosition, 200);
    // position the button
    userButton.position(205 + userInput.width +startingScreenPosition, 200);
  if (potValAdj==userPassword && lightSensor < 800 && startingScreenPosition==600 && solvedScreen==0) 
  {
    text('CLICK', -100,0)
    rightPassBuzz.play()
  }
  titleImage.resize(300, 170)
  image(titleImage, -90+startingScreenPosition, 20+startingScreenPosition)
  textSize(70)
  text('Vault breakers!',-187+startingScreenPosition,-240)
  textSize(30)
  fill(0,0,250)
  text('!! read the instructions carefully !!',-170+startingScreenPosition,-200)
  fill(0)
  textSize(15)
  text('player 1: Cop',-150+startingScreenPosition,-100)
  text('- set a password for the',-150+startingScreenPosition,-80)
  text('vault from',-150+startingScreenPosition,-60)
  fill(250,0,0)
  text('1-180.',-80+startingScreenPosition,-60)
  fill(0)
  text('- press button to shine',-150+startingScreenPosition,-40)
  text('flashlight and sabotage',-150+startingScreenPosition,-20)
  text('player 2.',-150+startingScreenPosition,0)
  text('player 2: Thief',80+startingScreenPosition,-100)
  text('need to twist',80+startingScreenPosition,-80)
  text('and press on', 80+startingScreenPosition,-60)
  text('to hear a click and',80+startingScreenPosition,-40)
  fill(250,0,0)
  text('potentiometer',169+startingScreenPosition,-80)
  text('light sensor',170+startingScreenPosition,-60)
  fill(0)
  text('open the vault',80+startingScreenPosition,-20)
  text('let go of light sensor',80+startingScreenPosition,0)
  text('to not get caught by flashlight!',80+startingScreenPosition,20)
}
function storePassword() {
    // cast as a color when assigning it to the variable
    userPassword = int(userInput.value());
}
function keyPressed() {
  if (key == " ") {
    // important to have in order to start the serial connection!!
    setUpSerial();
  }
}

function mousePressed() {
  if (mouseX >353 && mouseX<407 && mouseY>200 && mouseY<219 && userPassword < 180 && startingScreenPosition==0) {
    startingScreenPosition = 600
  }
}

function readSerial(data) {
  ////////////////////////////////////
  //READ FROM ARDUINO HERE
  ////////////////////////////////////

  if (data != null) {
    // make sure there is actually a message
    // split the message
    let fromArduino = split(trim(data), ",");
    // if the right length, then proceed
    if (fromArduino.length == 3) {
      // only store values here
      // do everything with those values in the main draw loop
      lightSensor = fromArduino[0];
      potVal = fromArduino[1];
      buttonVal = fromArduino[2];
    }

    //////////////////////////////////
    //SEND TO ARDUINO HERE (handshake)
    //////////////////////////////////
    let sendToArduino = left + "," + right + "\n";
    writeSerial(sendToArduino);
  }
}
class Money 
{
  constructor (x,y,r)
  {
    this.x = x
    this.y = y
    this.r = r
  }
  clicked(buttonVal)
  {
  if(buttonVal > 300 && startingScreenPosition == 600 && solvedScreen == 600) {
    moneyPic = moneybagPic
  } 
  }
  show()
  {
    image(moneyPic, this.x, this.y)
    image(moneybagPic, this.x, this.y)
    moneybagPic.resize(70, 70);
    moneyPic.resize(70, 70);
  }
}