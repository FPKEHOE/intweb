//Franny Kehoe




// ———————————————————
// ChatGTP Prompt:
// ———————————————————
// how do I change this so that each time I click image grows from the og size not continues to grow from size~var img; var imgSize = 10; // initial size var maxSize = 100; // maximum size var growthRate = 2; // how fast it grows var clicked; var x; var y;
// var grafficks;
// function preload() { // Load any image (you can replace this URL with your own image) img = loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pierre-Person.jpg/220px-Pierre-Person.jpg'); }
// function setup() { createCanvas(400, 400); imageMode(CENTER); clicked=0;
// grafficks=createGraphics(width, height);
// grafficks.background('#182D09');
// }
// function draw() { imageMode(CORNER); image(grafficks, 0, 0);
// if (imgSize < maxSize) {
//     if(clicked==1){
      
//   imgSize += growthRate;
// grafficks.imageMode(CENTER); grafficks.image(img,x,y,imgSize,imgSize); } //image(img, width / 2, height / 2, imgSize, imgSize); } else{ imgSize=10; clicked=0; }
// text("hello",mouseX,mouseY); }
// function mouseClicked(){ clicked=1; x=mouseX; y=mouseY;
// }
// ———————————————————



// ———————————————————
// ChatGTP Response:
// ———————————————————
// To make the image start growing from the original size (10) every time you click — instead of continuing to grow from the last size — you should reset imgSize to the original value (10) on every click.
// Right now, imgSize only resets when it hits maxSize, but you want it to reset at the start of each new click event.
// ✅ Fix:
// In your mouseClicked() function, simply reset imgSize to 10 when the user clicks.
// javascript
// CopyEdit
// function mouseClicked() {
//   clicked = 1;
//   x = mouseX;
//   y = mouseY;
//   imgSize = 10; // Reset size on each click
// }

// Optional improvement:
// If you want the image to fully animate its growth (and not draw multiple growing images on top of each other), you might want to clear that area on each click or frame, but from your code it looks like you're intentionally layering images on the grafficks buffer. If you ever want to clear that, you could reset grafficks.background(...) on click too.
// Let me know if you'd like to animate multiple growing images independently on each click, or just one at a time!
// ———————————————————




// ———————————————————
// ChatGTP Prompt:
// ———————————————————

// so this worls but now when I click the previous clicking image stops growing
// ———————————————————



// ———————————————————
// ChatGTP Response:
// ———————————————————
// Ah, I see! You're trying to have multiple images grow independently from their own click locations, each starting from size 10 and growing until they hit maxSize. Right now, your code supports only one image growing at a time because it uses single variables: x, y, imgSize, and clicked.
// To allow multiple independently growing images, you need to:
// 1. Store each image's position and current size in an array.
// 2. Add a new "growing image" to the array on each click.
// 3. In draw(), update and display all growing images.

// ✅ Updated Code (Supports Multiple Growing Images):
// javascript
// CopyEdit
// var img;
// var maxSize = 100;
// var growthRate = 2;

// var grafficks;
// var growingImages = []; // Array to store all growing images

// function preload() {
//   img = loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pierre-Person.jpg/220px-Pierre-Person.jpg');
// }

// function setup() {
//   createCanvas(400, 400);
//   imageMode(CENTER);

//   grafficks = createGraphics(width, height);
//   grafficks.background('#182D09');
// }

// function draw() {
//   imageMode(CORNER);
//   image(grafficks, 0, 0);

//   // Draw and grow all stored images
//   for (let i = growingImages.length - 1; i >= 0; i--) {
//     let imgObj = growingImages[i];
    
//     if (imgObj.size < maxSize) {
//       imgObj.size += growthRate;
//       grafficks.imageMode(CENTER);
//       grafficks.image(img, imgObj.x, imgObj.y, imgObj.size, imgObj.size);
//     } else {
//       // Optionally remove finished images
//       growingImages.splice(i, 1);
//     }
//   }

//   text("hello", mouseX, mouseY);
// }

// function mouseClicked() {
//   // Add a new growing image at mouse position
//   growingImages.push({
//     x: mouseX,
//     y: mouseY,
//     size: 10
//   });
// }

// 🔁 How it works:
// * On each click, a new object is added to growingImages with x, y, and size.
// * In draw(), it loops through all of them, updating and displaying each.
// * Once an image reaches maxSize, it's removed from the array (optional, for cleanup).
// Let me know if you'd like the images to persist after reaching full size, or to fade out, or animate in other ways!
// ———————————————————




var bckgrnd;

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

// line 154 used ChatGTP-see entire prompt above
var growing=[]; 
var current;
var size;
var speed;
var thex;
var they;






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
  
  bckgrnd=loadImage("assets/screenfull.png")

}

function setup() {
  speed=3;
  createCanvas(windowWidth, windowHeight);    imgs=[a,b,c,d,e,f];
  i=0;
  stamping=createGraphics(1150, 735);
  stamping.background('#182D09');
  //stamping.image(bckgrnd, 0,0,)
  
}

function draw() {  
  imageMode(CORNER);
  image(stamping, 0, 0);

// lines 199-207 used ChatGTP-see entire prompt above
  for (let p = 0; p<growing.length; p++) {
    let obj = growing[p];

    if (obj.size < obj.maxx) {
        obj.size+=speed;
        stamping.imageMode(CENTER);
        stamping.image(obj.img, obj.thex, obj.they, obj.size, obj.size);
    }
  }

//text
  textAlign(CENTER,CENTER);
  stroke('#182D09');
  fill('#F3FFB6')
  strokeWeight(3);
  textSize(60);
  textFont(spirax);
  text(poem[i],mouseX,mouseY);  
  noCursor();
}
  

function mouseClicked(){
  current=random(imgs);
  size=random(50,150);

  let maxx=size+100;
  thex=mouseX;
  they=mouseY;

 // line 226 used ChatGTP-see entire prompt above
  growing.push({img:current,thex:thex,they:they,size:size,maxx:maxx,speed:speed});
}


function mousePressed(){
  if (i<poem.length-1){
    i++;
  }
  else{
  i=0;
  }
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}



