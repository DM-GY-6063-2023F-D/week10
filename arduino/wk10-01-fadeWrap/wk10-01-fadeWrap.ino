int ledVal;

void setup() {
  pinMode(2, OUTPUT);
  ledVal = 0;
}

void loop() {
  analogWrite(2, ledVal);
  ledVal = (ledVal + 1) % 256;

  delay(15);
}
