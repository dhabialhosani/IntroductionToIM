
const int buttonPin = 4; 
int sensorValue = 0; 
int buttonState = 0; 

void setup() 
{

  pinMode(buttonPin, INPUT);
   
  pinMode (0, OUTPUT);
  pinMode (1, OUTPUT);
  pinMode (2, OUTPUT);
  pinMode (3, OUTPUT);
}

void loop() 
{
  buttonState = digitalRead(buttonPin);

  if (buttonState == LOW) 
  {
    digitalWrite (0, HIGH); 
    sensorValue = analogRead (0);
    delay (sensorValue + 25);
    digitalWrite (0, LOW); 
    delay (15);
  
    digitalWrite (1, HIGH);
    sensorValue = analogRead (0);
    delay (sensorValue + 25); 
    digitalWrite (1, LOW);
    delay (15); 
  
    digitalWrite (2, HIGH); 
    sensorValue = analogRead (0); 
    delay (sensorValue + 25);
    digitalWrite (2, LOW); 
    delay (15);
  
    digitalWrite (3, HIGH); 
    sensorValue = analogRead (0); 
    delay (sensorValue + 25);
    digitalWrite (3, LOW); 
    delay (15);
  } 
  else 
  {
    digitalWrite (0, LOW);
    digitalWrite (1, LOW);
    digitalWrite (2, LOW);
    digitalWrite (3, LOW);
  }
  
}
