var gif;
var bckgrnd;
var c = 0;


function preload(){
  gif=loadImage("assets/omg.gif");  

}

function setup() {
  createCanvas(1150, 735);

}

function draw() {  
  background('#182D09');
  imageMode(CENTER);
  if(mouseIsPressed){
    if(c<153){
    c++;}
    //this re-sets it if you go past the last frame in your gif
    if (c > 153){
      c = 0;
    }
  }
  image(gif,width/2,height/2,1044,735);
  gif.setFrame(c);
  gif.setFrame(c);
  gif.setFrame(c);
  gif.setFrame(c);
  gif.setFrame(c);
  gif.setFrame(c);
  gif.setFrame(c);

}
  


