var wid;
var hei;

var i;

var a;
var b;
var c;
var d;
var e;
var f;
var imgs=[];

var yomama=[];

var goudy;
var spirax;

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
  wid=400;
  hei=400;
  background('#182D09');
  createCanvas(wid, hei);
  imgs=[a,b,c,d,e,f];
  i=0;
}

function draw() {
  background('#182D09');
  textAlign(CENTER,CENTER);
  fill("#F3FFB6");
  textSize(40)
  textFont(spirax);
  text(poem[i],mouseX,mouseY);
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
  
  imageMode(CENTER);
  let current=random(array).get();
  let size=random(100,200)
  current.resize(size,0);
  size++;
  image(current,mouseX,mouseY);
}
