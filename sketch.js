let ground;
let lander;
var lander_img;
var bg_img;
var marte;
var marteimg;
var mercurio;
var mercurioimg;
var netuno;
var netunoimg;
var plutao;
var plutaoimg;
var terra;
var terraimg;
var venus;
var venusimg;
var jupiter;
var jupiterimg;
var button1;
var ButtonImg;
var gameState = 1;


var vy = 0;

function preload()
{
  lander_img = loadImage("assets/normal.png");
  bg_img = loadImage("assets/bg.png");
  marteimg = loadImage("assets/marte.png");
  mercurioimg = loadImage("assets/mercurio.png");
  netunoimg = loadImage("assets/netuno.png");
  plutaoimg = loadImage("assets/plutao.png");
  terraimg = loadImage("assets/terra.png");
  venusimg =loadImage("assets/venus.png");
  jupiterimg = loadImage("assets/jupiter.png");
  ButtonImg = loadImage('assets/Button.png');
}

function setup() {
  createCanvas(1000,700);
  frameRate(80);

  lander = createSprite(100,50,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.1;
  lander.setCollider("rectangle",0,0,200,200);
  button1 = createSprite(500, 350);
  button1.addImage(ButtonImg);
  
  rectMode(CENTER);
  textSize(15);
}




function draw(){
  background(51);
  image(bg_img,0,0);
  text('jogar',485, 260);
  //descida
  if (gameState == 1){
    if (mousePressedOver(button1)){
      choosePlanet();
    }
  }
    drawSprites();
}

function choosePlanet(){
  var planet = createSprite(500, 350, 80, 80);
  
    var rand = Math.round(random(1, 7));
    switch(rand){
      case 1:planet.addImage(marteimg);
      break;
      case 2:planet.addImage(jupiterimg);
      break;
      case 3:planet.addImage(mercurioimg);
      break;
      case 4:planet.addImage(netunoimg);
      break;
      case 5:planet.addImage(plutaoimg);
      break;
      case 6:planet.addImage(terraimg);
      break;
      case 7:planet.addImage(venusimg);
      break;
      default: break;
    }
  }


