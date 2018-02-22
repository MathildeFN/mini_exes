function setup() {
 createCanvas(windowWidth, windowHeight);   //create a drawing canvas
 background(0);
 frameRate (25);  //speed
}

function draw() {
noStroke();
fill(61, 8, 26, 80);
rect(0, 0, width, height);
drawThrobber(20);

}

function drawThrobber(num) {

  push();
  translate(width/2, height/2);
  // 360/num >> degree of each ellipse' move ;frameCount%num >> get the remainder that indicates the movement of the triangels
  var cir = 360/num*(frameCount%num); //to know which one among 20 possible positions.
  rotate(radians(cir));
  noStroke();
  fill ('#fae');
  if (mouseX >= 1000) {
  triangle(160, 150, 58, 30, 85, 100);
} else if (mouseX > 300) {
  fill (231, 224, 122, 100)
  triangle(160, 150, 50, 60, 180, 200);
} else if(mouseX > 100){
  fill ('#fae');
triangle(160, 150, 58, 30, 85, 100);
}
pop();


}
      function mousePressed() {
        console.log(mouseX, mouseY);


}
