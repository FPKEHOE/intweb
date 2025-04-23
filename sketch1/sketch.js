//Franny Kehoe

var wid;
var hei;

var a;
var b;
var c;
var d;
var e;
var f;
var imgs1=[];
var imgs2=[];
var imgs3=[];

var sweetwid;
var imposwid
var blossomwid;

var words=[];



var wordx1;
var wordy1;
var wordx2;
var wordy2;
var wordx3;
var wordy3;

var x1;
var x1;
var y1;
var y1;
var x2;
var x2;
var y2;
var y2;
var x3;
var x3;
var y3;
var y3;


//var for sweet origins
//var for impos orgiins
//var for blossom orgins

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

}

function setup() {
//  wid=400;
  wid=windowWidth;
 // hei= 400;
  hei=windowHeight;
 
  wordx1=wid*(2/9);
  wordy1=hei*(1.5/9);
  wordx2=wid*(4.5/9);
  wordy2=hei*(3/9);
  wordx3=wid*(6/9);
  wordy3=hei*(4.5/9);

  x1=wid*(0.9/9);
  y1=hei*(1.5/9);
  w1=wid*(2.25/9);
  h1=hei*(0.9/9);

  x2=wid*(2.3625/9);
  y2=hei*(3.15/9);
  w2=wid*(4.5/9);
  h2= hei*(0.9/9);

  x3=wid*(4.275/9);
  y3=hei*(4.545/9);
  w3=wid*(3.375/9);
  h3=hei*(0.9/9);

  
  
  
  createCanvas(wid, hei);
  background('#182D09');
  imgs1=[a,b];
  imgs2=[c,d];
  imgs3=[e,f];
// noSmooth();
  
  words=["sweet","impossible","blossom"];
  sweetwid=textWidth(words[0]);
  imposwid=textWidth(words[1]);
  blossomwid=textWidth(words[3]);

}

function draw() {
poem(
  
)


}



function mousePressed(){
  flower(a,b,c,d,e,f,imgs1,imgs2,imgs3);
}













function poem(xa,ya,xb,yb,xc,yc){
    textAlign(CENTER,TOP);
  fill("#F3FFB6");
  textFont(spirax);
  textSize(40);
  text(words[0],wordx1,wordy1);
  text(words[1],wordx2,wordy2);
  text(words[2],wordx3,wordy3);
  
  // rect(wid*(0.9/9),  hei*(1.5/9), wid*(2.25/9),  hei*(0.9/9));
 // rect(wid*(2.3625/9),  hei*(3.15/9), wid*(4.5/9),  hei*(0.9/9));
//rect(wid*(4.275/9),  hei*(4.545/9), wid*(3.375/9),  hei*(0.9/9));

  
  
}










function flower(u,v,w,x,y,z,array1,array2,array3){
  imageMode(CENTER);    
      let current;
      let size=random(100,200)
 

        
  if ((mouseX>x1&&mouseX<=x1+w1)&&(mouseY>y1&&mouseY<=y1+h1)){

      let amountarray=[1,2,3];
      let amount=random(amountarray);

      for (let i = 0; i < amount; i++) {
          current=random(array1).get();
          size=random(100,200);
          current.resize(size,0);
          image(current,random(0,wid),random(0,hei)); 
      }
    }
  
   if ((mouseX>x2&&mouseX<=x2+w2)&&(mouseY>y2&&mouseY<=y2+h2)){
  
      let amountarray=[1,2,3];
      let amount=random(amountarray);

      for (let i = 0; i < amount; i++) {
          current=random(array2).get();
          size=random(100,200);
          current.resize(size,0);
          image(current,random(0,wid),random(0,hei)); 
      }
    }
  
  
    if ((mouseX>x3&&mouseX<=x3+w3)&&(mouseY>y3&&mouseY<=y3+h3)){
  
      let amountarray=[1,2,3];
      let amount=random(amountarray);

      for (let i = 0; i < amount; i++) {
         // current=array[random(0,1)].get();
        current=random(array3).get();
          size=random(100,200);
          current.resize(size,0);
          image(current,random(0,wid),random(0,hei)); 
      }
    }
      
}

