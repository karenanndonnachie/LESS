var pic, pic2, pic3, pic4, pic5, pic6, pic7, pics;
var bgcol="blue";
var fillcol="red";
var bgblue=true;
var myRadio;
function preload(){
  font=loadFont("data/HelveticaNeueLTPro-Lt.otf");
  pic = loadImage("data/KATE_STREET_Flicker.png");
  pic2= loadImage("data/AdamBrierley_.png");
  pic3 = loadImage("data/QUARESMA.jpg");
  pic4= loadImage("data/MOTMANS.jpg");
  pic5= loadImage("data/sergei_fellini_.jpg");
  pic6=loadImage("data/pic6.png");
  pic7=loadImage("data/pic7.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(bgcol);
  fill(fillcol);
  imageMode(CENTER, CENTER);
  textFont(font);
  textAlign(LEFT, CENTER);
  textSize(width/5);
  textLeading(width/12);
   textWrap(CHAR);
  text("COLLIDEDLESSFESTIVALOFCONTEMPORARYCOLLAGE2024SKOVGAARDMUSEET",0,60,width,height);
  pics=[pic, pic2, pic3, pic4, pic5, pic6, pic7];

}

function draw() {
  
  if (frameCount>200){
  //let g = myRadio.value();
  background(bgcol); 
  let thispic = int(map(frameCount, 200, 800, 0, 6));
  image(pics[thispic], width/2, height/2);

  textSize(width/5);
  fill(fillcol);
  textLeading(height/48 * width/ (mouseX - mouseY));
  noStroke();
  select('canvas').elt.style.letterSpacing = "1px";
  textWrap(CHAR);
  scale(map(mouseX, 0, width, 0.5, 1.5));
  text("COLLIDEDLESSFESTIVALOFCONTEMPORARYCOLLAGE2024SKOVGAARDMUSEET",0,60,width,height);
  //background("blue");
  //image (pic, width/2, height/2, height/pic.height*pic.width, height);
  //image(pic, mouseX, mouseY, 100, 100);
  }
  if (frameCount>800){frameCount=200;  textLeading(width/12); scale(1);
}
}
function mousePressed(){
   
}
function keyTyped(){
  if (key==" "){bgblue=!bgblue;}
  if (bgblue==false){
      bgcol="red";
      fillcol="blue";
  }
  else {bgcol="blue";
      fillcol="red";}
}
