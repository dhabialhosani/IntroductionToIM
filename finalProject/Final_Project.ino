void setup() {
  Serial.begin(9600);
   //start the handshake
  while (Serial.available() <= 0) {
    Serial.println("0,0"); // send a starting message
    delay(300);            // wait 1/3 second
  }
}

void loop() {
  //wait for data from p5 before doing something
  while (Serial.available()) {
    int left = Serial.parseInt();
    int right = Serial.parseInt();
    if (Serial.read() == '\n') {
      digitalWrite(2, left);
      digitalWrite(5, right);
      int sensor1 = analogRead(A0);
      delay(1);
      int sensor2 = analogRead(A1);
      delay(1);
      int sensor3 = analogRead(A3);
      delay(1);
      Serial.print(sensor1);
      Serial.print(',');
      Serial.print(sensor2);
      Serial.print(',');
      Serial.println(sensor3);
    }
  }
}
