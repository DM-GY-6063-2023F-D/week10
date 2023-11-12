void setup() {
  pinMode(5, OUTPUT);
  pinMode(6, OUTPUT);
  pinMode(7, OUTPUT);
}

void loop() {
  int p5v = (millis() / 200) % 2;
  int p6v = (millis() / 345) % 2;
  int p7v = (millis() / 678) % 2;

  digitalWrite(5, p5v);
  digitalWrite(6, p6v);
  digitalWrite(7, p7v);
}
