var gif;


function preload(){
  gif=loadImage("assets/vinefinal.gif");

  
  goudy=loadFont("assets/goudy.ttf");
  spirax=loadFont("assets/spirax.ttf");
  


}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {  
  background('#182D09');
  imageMode(CORNER);
  image(gif, 0, 0);

}
  
function mousePressed() {
  gif.play();
}

// Play the GIF when the user releases the mouse.
function mouseReleased() {
  gif.pause();
}



function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
  
}