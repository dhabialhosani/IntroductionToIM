void setup() {
  // initialize digital pin LED_BUILTIN as an output.
  pinMode(7, OUTPUT);
  while (Serial.available() <= 0) {
    delay(300);
  }
}

// the loop function runs over and over again forever
void loop() {
  while (Serial.available() > 0) {
    int inByte = Serial.read();
    if(inByte<=1){
      digitalWrite(7, HIGH);
    }
  }
}
