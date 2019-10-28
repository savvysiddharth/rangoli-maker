const downloadbtn = document.querySelector("#download");
const clearbtn = document.querySelector("#clear");

let r,g,b;

function hideButtons() {
  downloadbtn.style.opacity = "0";
  clearbtn.style.opacity = "0";
}

function showButtons() {
  downloadbtn.style.opacity = "1";
  clearbtn.style.opacity = "1";
}

function setup() {
  let c = createCanvas(window.screen.width, window.screen.height-170);
  c.style('margin','0 auto');
  background(0);
  noStroke();
  r = random(0, 255);
  g = random(0, 255);
  b = random(0, 255);
  translate(width/2,height/2);
  displayInstructions();
}

function displayInstructions() {
  fill(random(0,255),random(0,255),random(0,255));
  textStyle(BOLD);
  textSize(42);
  let chars = ['R','A','N','G','O','L','I'];
  let x = -150;
  for(let i=0; i<7; i++) {
    fill(random(0,255),random(0,255),random(0,255));
    if(random() < 0.5) chars[i] = chars[i].toLowerCase();
    else chars[i] = chars[i].toUpperCase();
    if(i == 6) {
      if(chars[5] == chars[5].toLowerCase()) {
        chars[6] = chars[6].toLowerCase();
      }
    }
    text(chars[i], x, -220, 200, 100);
    x += 50;
  }
  textStyle(NORMAL);
  fill(255);
  textSize(32);
  text("< design your rangoli here >", -100, -100, 210, 100);
  textSize(16);
  text("color will change at each stroke...", -140, 0 , 300, 100);
  text("...drag your mouse or swipe your finger", -120, 40 , 300, 100);
  textSize(12);
  // text("@savvysiddharth", -40, 200 , 300, 100);
}

let diameter = 5;
let untouched = true;
function draw() {
  translate(width/2,height/2);
  fill(r,g,b);
  if(mouseIsPressed) {
    if(untouched) {
      background(0);
      showButtons();
    }
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
  // displayInstructions();
  // hideButtons();
  untouched = true;
}

hideButtons(); // initially hidden