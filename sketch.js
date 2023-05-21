var moonlander, moonlanderimg, bg;
var vy = 0;
var g = 0.05;

function preload() {
  //to load all of your assets
  bg = loadImage("bg.png");
  moonlanderimg = loadImage("normal.png");
}

function setup() {
  //to create objects which gets executed once in your code and remains on your code
  createCanvas(1000,700);
  moonlander = createSprite(100,50,50,50);
  moonlander.addImage(moonlanderimg);
  moonlander.scale = 0.2
  moonlander.setCollider("rectangle", 0, 0, 200, 200);
  moonlander.debug = true;
}

function draw() {
  //to write your actual logic of the code and gets executed for every frame 
  //background("blue");
  image(bg, 0, 0);
  push();
  fill(255);
  text("VERTICAL VELOCITY: " + round(vy), 800, 75);
  pop();
    //fall down
    vy += g;
  moonlander.position.y = moonlander.position.y + vy;


  

  drawSprites();
}
function keyPressed (){
  if(keyDown("UP_ARROW")) {
    upward_thrust();
     //moonlander.velocityY = moonlander.velocityY
   }
}
  function upward_thrust () {
    vy = -1;
}