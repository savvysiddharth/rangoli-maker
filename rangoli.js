let r,g,b;

function setup() {
  let c = createCanvas(window.screen.width, window.screen.height-170);
  c.style('margin','0 auto');
  background(0);
  noStroke();
  r = random(0, 255);
  g = random(0, 255);
  b = random(0, 255);
  textSize(32);
  fill(255);
  text("make your rangoli here", width/2 - 100, height/2 - 100, 200, 100);
  textSize(16);
  text("color will change at each stroke", width/2 - 100, height/2 , 200, 100);
}

let diameter = 5;
let untouched = true;
function draw() {
  translate(width/2,height/2);
  fill(r,g,b);
  if(mouseIsPressed) {
    if(untouched) background(0);
    untouched = false;
    let x = map(mouseX, 0, width, -width/2, width/2);
    let y = map(mouseY, 0, height, -height/2, height/2);
    ellipse(x,y, diameter,diameter);
    ellipse(-x,y, diameter,diameter);
    ellipse(x,-y, diameter,diameter);
    ellipse(-x,-y, diameter,diameter);
    ellipse(y,x, diameter,diameter);
    ellipse(-y,x, diameter,diameter);
    ellipse(y,-x, diameter,diameter);
    ellipse(-y,-x, diameter,diameter);
  }
}

function mouseReleased() {
  r = random(0, 255);
  g = random(0, 255);
  b = random(0, 255);
}

function clearCanvas() {
  background(0);
}