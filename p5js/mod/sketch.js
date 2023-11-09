let p = [
  { x: 300, y: 200, v: 4 },
  { x: 300, y: 400, v: -4 },
];

function setup() {
  createCanvas(600, 600);
  noStroke();
}

function draw() {
  background(255, 55, 155);
  for (let i = 0; i < p.length; i++) {
    ellipse(p[i].x, p[i].y, 40, 40);
    p[i].x += p[i].v;
    p[i].x = (p[i].x + width) % width;
  }
}
