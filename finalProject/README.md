### Inspiration Behind our Project?

Our project was inspired by one of the assignments we worked on while exploring the different applications that could be done with Arduino. Initially, we thought of the vault idea only. We were planning on having a program wherein the user is meant to unlock the vault on P5Js using a potentiometer. To allow ourselves a chance to explore more and create a more interesting project, we decided to turn it into a game. 

### How Does it Work?

The game is intended to be played by two players. The first player is meant to enter a passcode to the vault. They do so by entering a value in the designated bar on the P5JS screen. After that the second player is meant to figure out what the passcode to the vault is through spinning the potentiometer. There is also a light sensor which is meant to be covered by the second player in order to crack the code. In this instant the first player is able to sabotage the process for the second player through pressing on the button that produces a loud beeping sound and turns on a flash. Once the second player is able to crack the code, they are meant to press the button and finally the vault unlocks. 

### What Does it Look Like?

##### Below is a video that shows what the game looks like on P5JS:


https://user-images.githubusercontent.com/98512511/169082091-fcec22ff-38cd-4db8-866e-52f101c293bb.mov


##### This is a picture of what the wiring for our Arduino board looked like:

![finalcircuit](https://user-images.githubusercontent.com/98512511/169083324-9f7f38f8-1188-48e5-9a54-7543ded2a3d9.png)

### Difficulties and Things We Learnt?
- We faced major difficulties in terms of connecting the Arduino to P5JS. Despite using different methods including that of Professor Aaron’s we still were unable to always get the serial port to work. This was resolved by using the IM Lab’s computer. After getting through this issue we were able to continue working on our code. 

- We also faced some issues with regulating the light sensor. Given the different environments, it was hard to set a stable range for the light sensor. We were able to get through this issue by adding a led that kept the sensor in a moderate range. 

- Another issue we faced was in terms of transitioning into the page wherein the vault is open. For this specific part of the game we wanted the players to be able to collect the money by pressing on a button or even even using the mousepad on the laptop. Given the tightness of time and our inability to teat this feature while connecting P5JS to the serial port, we decided to leave it out. This however could be left for future improvements to the project. 

- A few key things that we learnt are with regards to mapping the values from the Arduino to the code on P5JS. Initially we struggled a bit with that, but once we figured it out we were able to get through the project easily. 

- Another thing we truly benefited and learnt from were the user testings. Through those testings we knew what exactly lacked in our project and what we could add. 

- In terms of technicalities, we did refer to a few of Dann Shiffman’s videos on YouTube. More detail on that is available in our Journal. 
