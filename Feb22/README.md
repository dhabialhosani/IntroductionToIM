# Assignment 4

## Below is a clip of the piece I created on p5.js

https://user-images.githubusercontent.com/98512511/155890094-bf394091-430e-422e-aad1-bd7c9c397db6.mov

#### Process, Difficulties, and Things I Learnt:
At first I was looking for inspiration to decide what to create for this assignment, I came accross several pieces and videos that all seemed to equip the idea of displaying countries' weathers. I found that very interesting and so I attempted to create a similar project using the same concept of displaying data about different countries but what I chose to do was to display their capital cities rather than their weathers. 
The link below is of one of the videos that inspired me, here Daniel Shiffman visualized the weathers of different countries into a final image. While that was interesting, iven that my idea doesnt involve numerical data, I thought displaying it as it is would also be interesting. 
https://www.youtube.com/watch?v=rJaXOFfwGVw

I started by creating my own csv file because those I accessed online had far more data than I required. Given that there are quite a lot of countries in the world I wasn't able to include all of them with their capital cities, so I decided to randomly choose 45 countries. This could be a later improvement to the project, perhaps trying to create a more inclusive data set or trying to find one online would make my project more effective in terms of what it produces. 

Next I tried to load my file onto the p5js console. As I was following several tutorials, I came accross new functions that we have not covered in class one of which was loadTable. I tried to experiment with that but for some reason that I was not quite sure what it was, I was unable to use the function. Perhaps this function is more useful when dealing with numerical data. When I used the loadStrings function I was able to access the data and assign it all to an array. From their I started working on displaying the data in the way I wanted. 

One of the things I attempted and successfully did was creat a button and a user input tab that takes the user input and assigns it to a varible. The value of this varible then gets used in the function I created which is responsible for finding the capital city. I learnt how to work with buttons and input spaces from the following video:
https://www.youtube.com/watch?v=uNQSVU0IKec

Next I proceeded to create nested loops to split the array first into rows that contained the country and its capital city and then split the capital city from the country. The final result I obtained from these nested loops was having the country's name in an individual array and the city's name in an individual array as well. While this worked smoothly I struggled a bit with the if statement that I included within the nested loop. My intention was to have the if statement run through the arrays of individual countries and cities, find the country that matched that of the user's input then print the capital city associated with the country. What I did not account for was that the arrays contain only a single name (a country or a city) and that I can not print the country and its city when I am referencing the arrays that contain single strings. 
The code below shows the mistake I was doing and the result it outputted. 

``` javascript
 if (UserInput.value() == singleName)
           {
             print (singleName);
           }
```
This code printed the same name entered by the user and stopped there. I realized then that instead of printing the value of the variable singleName I am supposed to print that of singleCountry which contains the country and the city associated with it. 
I then fixed the code to have it look like the following;
``` javascript
 if (UserInput.value() == singleName)
           {
             print (singleCountry);
           }
```
While this printed the correct city on the console, when I tried to use the singleCountry value in the draw function, it kept displaying one country only, I realized that this was because the value of singleCountry was being updated or changed instead it was just changing accroding to the outer loop which loops through all of the rows of the table. What I decided to do then was create a variable called ScreenPrint and assign the value of singleCountry when in the inner loop to it. This variable is then used in the draw function and is updated everytime the FindCapitalCity is called. 
This is what that portion of the code looked finally:
``` javascript
          if (UserInput.value() == singleName)
           { 
             // If it finds a match it assigns the value of the country and the city to screen print which is then used in draw to print the country and city on screen.
             ScreenPrint = singleCountry;
             print (singleCountry);
           }
```

