var video;
var button;
var snapshots = [];
var button2;
var counter=0;
//var invert = false;

function setup() {
  createCanvas(480, 360);
  background(51);
  video = createCapture(VIDEO);
  video.size(320, 240);
  button = createButton('Publish');
  button.mousePressed(takesnap);
  button2 = createButton('Start over');
  button2.mousePressed(clearance);

}

function takesnap() {
snapshots[counter] = video.get();
counter++;
if(counter == 9) {
  counter =0;
}
  //image(video, 0,0);
}

function clearance() {
  counter = 0;
  //invert = !invert;
}

function draw() {
  var w = 160;
  var h = 120;
  var x = 0;
  var y = 0;
  for (var i = 0; i < snapshots.length; i++) {

    image(snapshots[i], x, y, w, h);
    //if(invert)  {
    //  filter(INVERT);

    //}
    x = x + w;
    if (x >= width) {
      x = 0;
      y = y + h;
    }
  }
// image(video, 0,0);

}
