var pic, pic2, pic3, pic4, pic5, pic6, pic7, pics, randomHeight;
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
  //rectMode(CENTER, CENTER);
  textFont(font);
  textAlign(LEFT, CENTER);
  textSize(width/5);
  textLeading(height/13);
  //textLeading(width/24);
  textWrap(CHAR);
  text("COLLIDEDLESSFESTIVALOFCONTEMPORARYCOLLAGE2024SKOVGAARDMUSEET", 0, 60,0.9*width,0.9*height);
  pics=[pic, pic2, pic3, pic4, pic5, pic6, pic7];
  randomHeight=random(10,100);
  
}

function draw() {
  
  if (frameCount>120){
  //let g = myRadio.value();
  //background(bgcol); 
  if (bgblue===true){background(0, 0, 255, 7);}
  else{background(255, 0, 0, 7);}
  let thispic = int(map(frameCount, 200, 800, 0, 6));
  if (frameCount%100==0){randomHeight=random(10,100);}
  ar = pics[thispic].width / pics[thispic].height;
  image(pics[thispic], randomHeight/100*width, randomHeight/100*height, ar*height, height);

  textSize(width/5);
  fill(fillcol);
  textLeading(height/48 * width/ (mouseY - mouseX));
  noStroke();
  select('canvas').elt.style.letterSpacing = "1px";
  textWrap(CHAR);
  //scale(map(mouseX, 0, width, 1, 1.5), map(mouseY, 0, height, 1, 4));
  text("COLLIDEDLESSFESTIVALOFCONTEMPORARYCOLLAGE2024SKOVGAARDMUSEET",0,0,width,height);
  //background("blue");
  //image (pic, width/2, height/2, height/pic.height*pic.width, height);
  //image(pic, mouseX, mouseY, 100, 100);
  }
  if (frameCount>800){frameCount=100; background(bgcol);fill(fillcol); textLeading(width/12); scale(1);randomHeight=random(10,100);
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
