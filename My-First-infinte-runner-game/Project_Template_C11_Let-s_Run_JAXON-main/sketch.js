
var path,pathimage;
var player,playerimage;
var bomb,bombimage;
var ewall,wall1image;
var ewall1,wall2image;
var coin,coinimage;
var energyDrink,energydrinkimage;
var bomb2,bomd2image;
var bomb3,bomd3image;

function preload(){
  //pre-load images
  pathimage = loadImage("path.png");
  playerimage = loadAnimation("Runner-1.png","Runner-2.png");
  bombimage = loadImage("bomb.png");
  coinimage = loadImage("coin.png");
  energydrinkimage = loadImage("energyDrink.png");
  bomb2image = loadImage("bomb.png");
  bomb3image = loadImage("bomb.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here

path = createSprite(200,200,400,400);
path.addImage("path1",pathimage);
path.y=path.height /6;
path.scale=0.6;
path.velocityY = 4;
  
player = createSprite(204,380,10,10);
player.addAnimation("player2",playerimage);
player.scale=0.03;

ewall = createSprite(290,200,5,400);
ewall.visible=false;

ewall1 = createSprite(110,200,5,400);
ewall1.visible=false;

bomb = createSprite(204,0,10,10);
bomb.addImage("bomb1",bombimage);
bomb.scale=0.06;
bomb.velocityY=4;

coin = createSprite(150,50,10,10);
coin.addImage("coin1",coinimage);
path.y=path.height /6;
coin.scale=0.3;
coin.velocityY=4;

energyDrink = createSprite(255,150,10,10);
energyDrink.addImage("enerydrink1",energydrinkimage);
path.y=path.height /6;
energyDrink.scale=0.08;
energyDrink.velocityY=4;

bomb2 = createSprite(255,200,10,10);
bomb2.addImage("bomb2",bomb2image);
bomb2.y=bomb2.height/2;
bomb2.scale=0.06;
bomb2.velocityY=4;

bomb3 = createSprite(150,350,10,10);
bomb3.addImage("bomb3",bomb3image);
bomb3.y=bomb3.height/4;
bomb3.scale=0.06;
bomb3.velocityY=4;
}

function draw(){
  background(0);

  if(path.y>300){
    path.y=path.height /6;
  }
  if(bomb.y>400){
    bomb.y=bomb.height /100;
  } 
  if(bomb2.y>400){
    bomb2.y=bomb2.height /8;
  } 
  if(bomb3.y>400){
    bomb3.y=bomb3.height /100;
  }
  if(energyDrink.y>400){
    energyDrink.y=energyDrink.height /100;
  }
  if(coin.y>400){
    coin.y=coin.height /100;
  }
  if (keyDown("LEFT_ARROW")){
    player.x=player.x-4;
  }
  if (keyDown("RIGHT_ARROW")){
    player.x=player.x+4;
  }
  if(player.isTouching(bomb)){
    player.destroy();
  }
  if(player.isTouching(bomb2)){
    player.destroy();
  }
  if(player.isTouching(bomb3)){
    player.destroy();
  }
  if(player.isTouching(coin)){
    player.x=player.x-10;
  }
  if(player.isTouching(energyDrink)){
    player.x=player.x+10;
  }
  player.collide(ewall);
  player.collide(ewall1);
  drawSprites();
}