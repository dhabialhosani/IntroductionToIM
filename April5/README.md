# Assignment 6

## Below is a clip of the product I created for this assignment:



https://user-images.githubusercontent.com/98512511/161670279-f5c309e6-80e7-4c89-bc1e-89d2ce6ddf77.mov




### Description
My idea was to create a game with the led lights and the Arduino board. I wanted to have the lights flicker at different speeds and then have the user be able to stop the flickering at a certain bulb. 

### Process, Difficulties, and Things I Learnt:
- I started off by working on including the potentiometer and connecting it to the four led lights.  I did so by connecting four led lights to four resistors, I then connected the resistors to different digital inputs. Following that I added the potentiometer and connected its left pin to 5V, its right pin to GND, and its middle pin to A0. This worked fine and through replicating the code for every bulb I was able to have the bulbs flicker consecutively and at different speeds. 
- I then moved on to adding the button which was a bit of a struggle for me given that I was unsure of how to stop the flickering at a certain light and still have that led remain lit. I knew the solution had to do with if statements, and I kept experimenting with those. Unfortunately though, I was unable to have it function the way I initially intended it to. However I was still able to have the button turn all the lights off once pressed. 
- One thing I learnt is the importance of checking every aspect of the wiring to ensure that the issue is truly in the code and not the Arduino. I did this through testing each part individually. For instance, with the button I started by using the sample code for a button just to make sure it was connected and working fine. I then was able to incorporate it into my code once I figured out that the wires and resistors were connected to it correctly. 

### Schematic

