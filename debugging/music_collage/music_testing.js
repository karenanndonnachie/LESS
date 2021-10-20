var moon, butterfly, butterfly2, uh, mountain, grass, drummer, dancer, bell, oldman, melody, bell, kick, uh, bass, bass2, snare, lead, lead2, snare2, uhsound, avWidth;
var tracks=[];
var buttons=[];
var playTrack=false;
var buttonList=[];
var gogo=false;
function preload() {
  soundFormats('mp3');
  moon = loadImage("data/moon.png");
  butterfly = loadImage("data/butterfly.png");
  butterfly2 = loadImage("data/butterfly2.png");
  uh = loadImage("data/uh.png");
  mountain = loadImage("data/mountain.png");
  grass = loadImage("data/grass.png");
  drummer = loadImage("data/drummer.png");
  dancer = loadImage("data/dance.png");
  bell = loadImage("data/bell_2.png");
  oldman = loadImage("data/oldman.png"); 
  melody = loadSound("data/melody.mp3");
  uhsound = loadSound("data/uh.mp3");
  snare = loadSound("data/snare2.mp3");
  snare2 = loadSound("data/snare2.mp3");
  bell = loadSound("data/bell.mp3");
  bass = loadSound("data/bass2.mp3");
  bass2 = loadSound("data/bass.mp3");
  kick = loadSound("data/kick.mp3");
  lead = loadSound("data/lead.mp3");
  lead2 = loadSound("data/lead2.mp3");  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background (255, 210, 97); 
  avWidth  =  width/13;
  tracks=[bass2, lead2,  bass, bell, lead, uhsound,  kick, snare, melody, snare2];
  buttonList=[grass, mountain,  moon, butterfly, butterfly2, uh, drummer, dancer, bell, oldman];
  buttons=[];
  makeScene();
  textAlign(CENTER, CENTER);
}

function draw() {
  background(255, 210, 97);
  if (gogo==true){
  for (let i=0; i<buttons.length; i++){ 
    if (buttons[i].x < mouseX && mouseX < buttons[i].x + buttons[i].w && mouseY > buttons[i].y && mouseY < buttons[i].y + buttons[i].h){
      console.log("hit");
      buttons[i].playTrack=!playTrack;
      buttons[i].hover();
    }
    else {
    buttons[i].show();}
  }
  }
  else {text('click to start', width/2, height/2);}
 }


class ButtonMaker {
 constructor(pic, track, x, y, w, h, playTrack){
   this.pic=pic;
   this.track=track;
   this.x=x;
   this.y=y;
   this.w=w;
   this.h=h;
   this.playTrack=playTrack;
 }
 hover(){
   
     if (this.track.isPlaying()){
     this.track.stop();
   }
 
   else { 
     if (this.track.isPlaying()){
       // don't change
       }
     else {
     this.track.play();
     }
   }
   push();
   translate(this.x, this.y);
   scale(1.05);
   image(this.pic, 0, 0, this.w, this.h);
   pop();
 }
 show(){
    if (this.track.isPlaying()){
      this.x+=random(-1, 1);
      this.y+=random(-1, 1);
    }
  push();
  translate(this.x, this.y);
  image(this.pic, 0, 0, this.w, this.h);
  pop();
 }
}
function makeScene(){
  //  buttonList=[grass, mountain,  moon, butterfly, butterfly2, uh, drummer, dancer, bell, oldman];
  //grass 0
  buttons.push(new ButtonMaker(buttonList[0], tracks[0], 0, height-width/grass.width*grass.height, width, width/grass.width*grass.height, playTrack));
   //mountain 1
  buttons.push(new ButtonMaker(buttonList[1], tracks[1], 0.45*width, height/3, 0.4*height/mountain.height*mountain.width, 0.4*height, playTrack));
  //moon 2
  buttons.push(new ButtonMaker(buttonList[2], tracks[2], 0.7*width, 50, avWidth, avWidth/moon.width*moon.height, playTrack));
  //butterfly 3
  buttons.push(new ButtonMaker(buttonList[3], tracks[3], width/6, height/6, avWidth, avWidth/butterfly.width*butterfly.height, playTrack));
  //butterfly2 4
  buttons.push(new ButtonMaker(buttonList[4], tracks[4], 0.9*width, height/3, avWidth, avWidth/butterfly2.width*butterfly2.height, playTrack));
  //uh 5
  buttons.push(new ButtonMaker(buttonList[5], tracks[5], width/3, height/2, avWidth, avWidth/uh.width*uh.height, playTrack));
  //drummer 6
  buttons.push(new ButtonMaker(buttonList[6], tracks[6], width/8, 0.5*height, avWidth, avWidth/drummer.width*drummer.height, playTrack));
   //dancer 7
  buttons.push(new ButtonMaker(buttonList[7], tracks[7], width/2, height/3, avWidth, avWidth/dancer.width*dancer.height, playTrack));
   //bell
  //buttons.push(new ButtonMaker(buttonList[8], tracks[8], width/3, height/4, avWidth, avWidth/bell.width*bell.height, playTrack));
   //oldman
  buttons.push(new ButtonMaker(buttonList[9], tracks[9], width/5, height/8, avWidth, avWidth/oldman.width*oldman.height, playTrack));
}
//function windowResized(){
//  resizeCanvas(windowWidth, windowHeight);
//  avWidth  =  width/12;
//  buttons=[];
//  makeScene();
//}
function mousePressed(){
  if (gogo==false){
  gogo = true;
  }
  else { 
     for (let i=0; i<buttons.length; i++){ 
        buttons[i].track.stop();
    }
  }
}
