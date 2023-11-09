let nameStringRaw =
  '"Name" ;"Name" ;"Name" ;"Name" ;"Name" ;"Name" ;"Name" ;"Name" ;"Name" ;"Name" ;"Name" ;"Name" ;"Name" ;"Name" ;"Name" ;"Name"';
let nameString = nameStringRaw.replaceAll('"', "");
let names = nameString.split(" ;");

let nextNameIdx;

function setup() {
  createCanvas(windowWidth, windowHeight);
  randomSeed(20);

  textAlign(CENTER, CENTER);
  textSize(36);
  fill(255);

  for (let n = 0; n < 10; n++) {
    for (let i = 0; i < names.length; i++) {
      let j = floor(random(i, names.length));
      let nj = names[j];
      names[j] = names[i];
      names[i] = nj;
    }
  }

  names.unshift("6063D Reading Response");
  nextNameIdx = 0;
}

function draw() {
  bakground(220, 20, 120);
  text(names[nextNameIdx], 0, 0, width, height);
}

function keyReleased() {
  if (key == " ") {
    nextNameIdx = (nextNameIdx + 1) % names.length;
  }
}

let clickCount = 0;
let pos = [];
function mouseClicked() {
  names[nextNameIdx] = "";
  setTimeout(() => (names[nextNameIdx] = "Thiago"), 200);
  clickCount++;
  pos.length = 0;
}

function bakground(r, g, b) {
  background(r, g, b);

  if (clickCount > 3 && clickCount < 6) {
    let x = random(width);
    let y = random(height);
    pos.push({ x: x, y: y });
  }

  if (clickCount > 6 && clickCount < 9) {
    let x = randomGaussian(width / 2, width / 6);
    let y = randomGaussian(height / 2, height / 6);
    pos.push({ x: x, y: y });
  }

  if (clickCount > 9 && clickCount < 12) {
    let x = width * noise(frameCount / 51);
    let y = height * noise(frameCount / 47);
    pos.push({ x: x, y: y });
  }

  if (clickCount > 12 && clickCount < 15) {
    pos.length = 0;
    let x = width * noise(frameCount / 51);
    let y = height * noise(frameCount / 47);
    pos.push({ x: x, y: y });
  }

  if (clickCount > 3 && clickCount % 3 == 0) {
    pos.length = 0;
  }


  push();
  fill(30);
  for (let i = 0; i < pos.length; i++) {
    text(names[nextNameIdx], pos[i].x, pos[i].y);
  }
  pop();
}
