var pic1, pic2, pic3;
var randPic1x, randPic1y;
function preload(){
 pic1= loadImage("data/collage_1.png");
 pic2= loadImage("data/IMG_0206.png")
 pic3= loadImage("data/test.png")

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255,0,0);
  randPic1x = random(width-300);
  randPic1y = random(height-300);

}

function draw() {
  background(255,0,0);
 
 image(pic1, randPic1x, randPic1y);
 // cat collage
 
 image(pic2, 300, 300);
 
 
 image(pic3, width/2, height/2);
}

function keyPressed(){
  randPic1x = random(width-300);
  randPic1y = random(height-300);
}
