var n = 0;// n is the number of the ellipses, which is the ordering number of a floret, counting outward from the center
var c = 8; // c is the number of the scaling parameter
var farve1
var farve2
var farve3
var farve4


function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  colorMode(HSB);
  background(0);

  farve1=color(218, 79, 244); //blue
  farve2=color(62, 78, 200); //yellow
  farve3=color(322, 28, 150); //rosa
  farve4=color(337, 86, 80); //dark pink

}

function draw() {
  var a = n * 137.5; //a is the angel in which the ellipses is applied.
  var r = c * sqrt(n); //r is the radius (the distance between the center of the capitulum and the center of the n(th) floret) given a constant scaling parameter c. Sqrt stand for square root.
//to create my flower pattern I have used formula: cos(n*degrees) = (x or y)/r, which is writting in my code like this:
  var x = r * cos(a) + width/2;// the width and height divided by 2 makes thes flower appear in the center of the screen
  var y = r * sin(a) + height/2;


fill(farve1);
noStroke();
ellipse(x, y, 8, 8);

  n++;

/*if(mouseIsPressed){
  farve1=farve2
}else{
  farve1=color(255, 255, 255);
}*/
}
//You can change the colors of the ellipses by pressing the arrow keys:
function keyPressed() {
  if (keyCode === UP_ARROW) {
    farve1=farve2;
  } else if(keyCode === DOWN_ARROW) {
    farve1=farve3;
  } else if(keyCode === RIGHT_ARROW) {
    farve1=farve4;
  } else if(keyCode === LEFT_ARROW) {
    farve1=color(218, 79, 244);
  }
}
