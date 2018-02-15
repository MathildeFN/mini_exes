var gif;

function preload() {
 // preload() runs once
gif=createImg("giphy.gif");

}

function setup() {
  // put setup code here
createCanvas(1200,600);
 }

function draw() {
  // put drawing code here
gif.position(320,80);

ellipse(428, 314, 450, 450);

ellipse(329, 281, 55, 55);
ellipse(528, 281, 55, 55);
fill(51);
ellipse(528, 281, 25, 25);
fill(51);
ellipse(329, 281, 25, 25);
//noStroke();
fill('#fae');
ellipse(286,344, 30, 30);
fill('#fae');
ellipse(555,344, 30, 30);

fill('red');
beginShape();
vertex(428, 413);
vertex(393, 398);
vertex(367, 426);
vertex(431, 458);
vertex(486, 426);
vertex(461, 396);
vertex(428,413);
endShape(CLOSE);

fill('#222222');
beginShape();
vertex(430, 320);
vertex(455, 355);
vertex(400, 355);
endShape(CLOSE);



noFill();
beginShape();
curveVertex(427,88);
curveVertex(426, 59);
curveVertex(276, 33);
curveVertex(114, 200);
curveVertex(77, 523);
curveVertex(174, 524);
curveVertex(27, 544);
endShape();

noFill();
beginShape();
curveVertex(427, 88);
curveVertex(426, 59);
curveVertex(577, 26);
curveVertex(700,86);
curveVertex(778,533);
curveVertex(640, 534);
curveVertex(572, 485);
endShape();

noFill();
beginShape();
curveVertex(273, 266);
curveVertex(287, 241);
curveVertex(305, 230);
curveVertex(352, 231);
curveVertex(376, 246);
endShape();

noFill();
beginShape();
curveVertex(479, 256);
curveVertex(503, 230);
curveVertex(536, 224);
curveVertex(566, 233);
curveVertex(584, 260);
endShape();

}
function mousePressed() {
  console.log(mouseX, mouseY);
}
