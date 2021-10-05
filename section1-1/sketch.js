function setup() {
  createCanvas(128,128);
}

function draw() {
  background(255);
  strokeWeight(0);
  fill(178, 100, 162);
  triangle(12,120,116,120,116,10);
  fill(255, 227, 255);
  triangle(12,112,110,112,110,0);
  fill(255);
  triangle(17,108,108,108,108,7);
  fill(255, 200, 255);
  textSize(32);
  textFont("serif");
  text("46", 68, 100);
}
