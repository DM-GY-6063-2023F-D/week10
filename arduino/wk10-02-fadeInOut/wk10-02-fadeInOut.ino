int ledVal;
int ledVel;

void setup() {
  pinMode(2, OUTPUT);
  ledVal = 0;
  ledVel = 1;
}

void loop() {
  analogWrite(2, ledVal);

  ledVal = (ledVal + ledVel);
  if (ledVal <= 0 || ledVal >= 255) {
    ledVel *= -1;
  }

  delay(15);
}
