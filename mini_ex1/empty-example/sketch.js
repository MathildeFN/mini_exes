function setup() {
  // put setup code here
createCanvas(1370, 650, WEBGL);
// setup() runs once

}
function draw() {
  // put drawing code here
background('#fae');
   rotateX(millis() / 300);
   colorMode(HSB)
   fill('rgba(0,255,0, 0.25)');
   box(200);
  rotateY(millis() / 1000);

  ellipsoid(100, 100, 100);
fill('rgba(100%,0%,100%,0.5)');
  rotateZ(millis() / 1000);
  torus(200, 30);

}
