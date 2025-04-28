var i;

var a;
var b;
var c;
var d;
var e;
var f;
var imgs=[];

var poem=[];

var goudy;
var spirax;


var stamping;


function preload(){
  a=loadImage("assets/eggflower1.png");
  b=loadImage("assets/eggflower2.png");
  c=loadImage("assets/eggflower3.png");
  d=loadImage("assets/eggflower4.png");
  e=loadImage("assets/eggflower5.png");
  f=loadImage("assets/eggflower6.png");
  
  goudy=loadFont("assets/goudy.ttf");
  spirax=loadFont("assets/spirax.ttf");
  
  poem=["sweet","impossible","blossom"];

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#182D09');
  imgs=[a,b,c,d,e,f];
  i=0;
  stamping=createGraphics(width, height);
  stamping.background('#182D09');
  
}

function draw() {  
  imageMode(CORNER);
  image(stamping, 0, 0);
  textAlign(CENTER,CENTER);
  fill('#182D09');
 // fill(0,0,0,0);
  stroke('#FFC800');
   //fill('#FFC800');
  //stroke('#182D09');
  strokeWeight(3);
  textSize(40);
  textFont(spirax);
  text(poem[i],mouseX,mouseY);  
  noCursor();
}
  


function mousePressed(){
  flower(a,b,c,d,e,f,imgs);
  if (i<poem.length-1){
    i++;
  }
  else{
  i=0;
  }
  
}

function flower(u,v,w,x,y,z,array){
  
  
  let current=random(array).get();
  let size=random(100,200)
  stamping.imageMode(CENTER);
  stamping.image(current,mouseX,mouseY,size,size);
}





function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
  
}