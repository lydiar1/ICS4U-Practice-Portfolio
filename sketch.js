function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill(mouseX%255, mouseY%255, 10)
  square(mouseX, mouseY, 100, 100)
}
