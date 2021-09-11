# Part 3 of LESS Digital tools

# LOADING IMAGES IN P5JS 
<img src="https://github.com/karenanndonnachie/LESS/blob/main/previewImages/turtle_topLeft.JPG" width="400px"/><br/>
* [See video here](https://vimeo.com/602397543) {pw ATOTHEK}
* step 1 = make or dl an image (**do not use filenames with spaces or special characters**) save at a 'decent' size (not too many kb & not too huge) & remember most browsers/devices are less than 1400 px across, while mobiles are around 400px across
* step 2 = start a new sketch with a full size canvas and save your sketch (name as loadimage or something recognisable)
* step 3 = drag the image from your finder to the white edit section of your sketch
* step 4 = declare a variable (you can name it anything you want, except protected names like 'image' or 'shape' etc., I use pic in the example)
* step 5 = preload the image into your pic variable
* step 6 = display the image in the draw (or setup) function (use <code>image(x, y, w, h)</code>)

<pre>
<code>
var pic; //declare variable which will hold the image

function preload(){
  pic=loadImage("data/AAA_PATRICIA_PICCININI.jpg"); //assign our loaded image to pic **note that the path must be exact!**
}

function setup() {
 createCanvas(windowWidth, windowHeight);
 background(255,255,0);
}

function draw() {
  //to show an image, use the image() function ~> image(x, y, w, h)
  //image(pic, 0, 0); //display image in top left corner at natural size (no w or h)
  //image(pic, 0, 0, 400, 300); //display image in top left corner at 400 x 300 px
  image(pic, mouseX, mouseY, 400, 300); //display image at 400 x 300px and make it follow the mouse
}
</code>
</pre>


 
