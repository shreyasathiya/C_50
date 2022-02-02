var player;
var playerImg;


function preload(){
playerImg= loadImage("assets/player-removebg-preview.png");

}

function setup(){
  createCanvas(500,400)
player = createSprite(50,50,50,10);
player.addImage(playerImg);

}

function draw() {
  background("white");
  drawSprites();
  
}