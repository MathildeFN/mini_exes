let snow = [];
let button;


function setup() {
  createCanvas(windowWidth, windowHeight);
  button = createButton('Let it snow');
  button.style('color','#555555');
  button.mousePressed(add);

  snow[0] = new Snow(color(255,255,255), 3, 800, 300, 10);
  snow[1] = new Snow(color(255,255,255), 2, 400, 300, 10);

}

function draw() {
  background(144,219,255);
  button.position(width/2,5);

  for(let i = 0; i <snow.length; i++) {
    snow[i].snow();
    snow[i].display();
  }
}

function add() {
  append(snow,  new Snow(color(random(255,255)), random(2,10), random(10,20), random(15,500), random(50)));
}

class Snow {
  constructor(getcolor, speed, xpos, ypos, size) {
    this.getcolor = getcolor;
    this.speed = speed;
    this.pos = new createVector(xpos, ypos);
    this.size = size
  }

  snow() {
    this.pos.y+=this.speed;
    if (this.pos.y > height) {
      this.pos.y = 0;
      this.pos.x = random(windowWidth);
    }
  }
  display() {
    noStroke();
    fill(this.getcolor);
    ellipse(this.pos.x, this.pos.y, this.size, this.size);
  }
}
