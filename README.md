![title](https://user-images.githubusercontent.com/12862695/67833417-90da9680-fb0a-11e9-9641-ad803a2122f4.png)
## Rangoli maker

*Converting random doodles to awesome rangolis!*

Checkout [Rangoli maker](https://savvysiddharth.github.io/rangoli-maker/) now!

<img src="https://user-images.githubusercontent.com/12862695/67834928-b49fdb80-fb0e-11e9-9199-cb864945cb74.jpeg" height="300" />
<img src="https://user-images.githubusercontent.com/12862695/67834932-b5d10880-fb0e-11e9-88b8-66a3fd462151.jpeg" height="300" />
<img src="https://user-images.githubusercontent.com/12862695/67834939-b7023580-fb0e-11e9-9273-c6bcad1417d3.jpeg" height="300" />

#### Core Algorithm:

Following `draw()` function is called in an infinite loop by p5.js library to update canvas. Based on user's input point (given by either mouse or touch input), this algorithm draws 7 other mirror points to simulate symmetrical figure.

```js
function draw() {
  translate(width/2,height/2);
  fill(r,g,b);
  if(mouseIsPressed && isMouseInCanvas()) {
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

```