



// ———————————————————
// ChatGTP Prompt:
// ———————————————————
//im setting image to width of 400 (image(img,x,y,400))how do //i make the height proportional to width p5js
// ———————————————————



// ———————————————————
// ChatGTP Response:
// ———————————————————
//Great question! If you want to set the image width to 400 and scale the height proportionally, you need to maintain the aspect ratio of the image.
//Here's how you can do that in p5.js:

//✅ Code Example (Keep Aspect Ratio)
//javascript
//CopyEdit
//let img;

//function preload() {
//  img = loadImage("your-image.png");
//}

//function setup() {
//  createCanvas(600, 600);

 // let newWidth = 400;
 // let aspectRatio = img.height / img.width;
 // let newHeight = newWidth * aspectRatio;

 // image(img, 100, 100, newWidth, newHeight);
//}

//🔍 Explanation:
//* aspectRatio = img.height / img.width gives you the //proportion of height to width.
//* Then you multiply your desired width (400) by that ratio //to get the new height.
//This way, the image scales exactly to 400 pixels wide, and the height adjusts proportionally to keep it from looking stretched or squished.





var c = 0;
var i=0;
var b;
var l;
var o;
var s;
var m;
var blossom=[];
var clicked;


var y;
var x;
var xx;

var r;

// lines 68-70 used ChatGTP-see entire prompt above
var newWidth;//
var newHeight;//
var aspectRatio;//




function preload(){
  goudy=loadFont("assets/goudy.ttf");
  spirax=loadFont("assets/spirax.ttf");
  
  b=loadImage("assets/b.gif");
  l=loadImage("assets/l.gif");
  o=loadImage("assets/o.gif");
  s=loadImage("assets/s.gif");
  m=loadImage("assets/m.gif");
}

function setup() {
  createCanvas(1150, 742);
  blossom=[b,l,o,s,s,o,m]

  clicked=false;
  
  y=height;
  x=13;
  
  r=0;
}



function draw() {
  background('#182D09');
  imageMode(CORNER);
  

    
    if (y>-300){
      
      // lines 120-122 used ChatGTP-see entire prompt above
      newWidth = 500;
      aspectRatio = blossom[i].height / blossom[i].width;
      newHeight = newWidth * aspectRatio;
        
      
      
      if (clicked==false){
        image(blossom[i],x,y,newWidth,newHeight);
        blossom[i].setFrame(0);
      }

      else{
        image(blossom[i],x,y,newWidth,newHeight);
        blossom[i].setFrame(c);
        c++;

        if (c>25){
          clicked=false;
          c=0;
          
          
          if(r<6){
            x=x+((1/11)*width);
            r++;
          }
          else{
            x=13;
            r=0;
          }

          if (i<blossom.length-1){
            i++;
          }
          else{
            i=0;
          }
          y=height;
        } 
      }
        
      if(clicked==false){
        y=y-2;
      }
    }
    else{
      y=height;
    }


  

  
  
  
}
  
 function mousePressed() {
   if(((mouseX>=x)&&(mouseX<=(x+newWidth)))&&((mouseY>=y)&&(mouseY<=(y+newHeight)))){
     clicked=true;
   }
 }




