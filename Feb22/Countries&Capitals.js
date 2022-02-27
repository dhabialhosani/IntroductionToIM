//Defining global variables
let Countries=[]; 
let theCountry 
var UserInput; 
let ScreenPrint;
let Button;

// Calling preload function to load csv file in it
function preload() 
{
   //Taking the strings from csv file and assigning them to the array Countries
  Countries = loadStrings("countriesandcapitals.csv");
}

function setup() // Calling the set up function
{
  createCanvas(800,600);
  background(200);
  // If statement to ensure csv file contents loaded 
  if (Countries == null) 
  {
    print("failed to load the file, stopping here");
  }
  // Assigning an input space to the UserInput variable
  UserInput = createInput();
   //Adjusting the position of the input space on the  screen
  UserInput.position(30, 50); 
  // Creating a button for the user to initiate FindCapitalCity commands
  Button = createButton("Find the Capital City of the Country Above");
  Button.position(30, 80);
  // Runs function when mouse is pressed
  Button.mousePressed(FindCapitalCity); 
}
// Calling function draw
function draw ()
{
  background(213,238,212,50);
  // Changing size, style and allignmnet of text appearing on screen
  textSize(50); 
  textStyle(BOLD); 
  textAlign(CENTER, CENTER);
  // Printing text on screen. Value of 'ScreenPrint' is returned from the FindCapitalCity function.
  text(ScreenPrint,width/2,height/2);
}
function FindCapitalCity()
{ 
  //Calling varibles to be used throughout the whole function
  let CountryRowNumber;
  let allCountries;
  let singleCountry;
  let allCities;
  let singleName;
  
  // For loop to break array into rows, so the new array contains individual countries with their cities
  for (CountryRowNumber = 1; CountryRowNumber < Countries.length; CountryRowNumber++)
    {
      allCountries = Countries[CountryRowNumber];
      singleCountry = split(allCountries, ',');
      // Nested for loop to break the new array into single pieces, so the new array contains only a country's name or a city's name
      for (let i = 0; i < singleCountry.length; i++)
        {
         allCities = singleCountry[i];
         singleName = split(allCities, ',');
          // If statement that checks if the UserInput value is equivalent to any of the cities or countries
          if (UserInput.value() == singleName)
           { 
             // If it finds a match it assigns the value of the country and the city to screen print which is then used in draw to print the country and city on screen.
             ScreenPrint = singleCountry;
             print (singleCountry);
           }
        }

     }
}