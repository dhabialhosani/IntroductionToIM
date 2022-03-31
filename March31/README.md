# Assignment 5

## Below is a clip of the unusual switch I created

https://user-images.githubusercontent.com/98512511/160953429-23904885-2c73-4e15-8931-1e3cba239332.mov

### How does it work?
- The density of ions within the wax despite being little enable it to be an electric conductor.
- The light is initially on.
- The candle wax acts as a button, when pressure is put onto it it turns the red led off. 
- When it released the led turns back on. 

### Schematic

![IMG_4255](https://user-images.githubusercontent.com/98512511/160953923-29e397c7-2f86-4fba-ad51-ee54eca6250d.jpg)

### Process, Difficulties, and Things I Learnt:

- I started off by trying to light the led with an actual arduino switch. This was a bit confusing at first but after following the lecture notes I managed to get it work.
- I then tried to disconnect the wires from the button on the arduino board and connect them to different conducting materials. This did not work immediately, I thought the issue was with the code but in reality it was just an error with the wire connections. I had connected one of the wires on the positive side instead of the negative which led to the error. I also had some of my wires loosely connected which also led to errors. After adjusting that the led lit perfectly when the wires were connected to different conductors. 
- I tried to change the code to have the led be off at start and turn on only after pressure is applied onto the candle. I was however unable to get that to work so I stuck with my initial code. ANother difficulty I faced was in terms of getting the candle to be the conductor, given that the ion density in the wax is relatively low in comparison to other conductors it was difficult to get it to always work as a conductor, however after figuring out how to position the wire the candle worked perfectly. 
