var sourceText = ["blackbox", "deeper understanding of things behind", "not just use but understand", "craft", "obstacles of not knowing", "Communication", "What is possible", "sketch ideas", "creativity", "cool", "new ways of thinking", "not only for experts", "useful", "understand what engineers do", "Computational thinking", "fear/scary", "essential skills"];
var index = 0;
var img;

function preload() {
  img = loadImage("billede.png");
}

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // put drawing code here

  frameRate(2);
  background(img);
  textAlign(LEFT);
  textSize(random(100));
  textFont('avenir');
  fill(random(0, 255), random(0, 255), random(0, 255));
  noStroke();
  for (i = 0; i < 20; i++) {
   ellipse(random(windowWidth), random(windowHeight), random(100));
  }

  strokeWeight(1);
  stroke(0);
  text(sourceText[index], random(100, 800), random(100, 700));
  index=index+1;
  if (index==sourceText.length) {
    index = 0;
    fill(random(0, 255), random(0,225), random(0,255));
  }
}
