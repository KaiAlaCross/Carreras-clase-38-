var canvas, backgroundImage;

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var cars,car1,car2,car3,car4;
var carImage1,carImage2,carImage3,carImage4;
var carreteraImg;

var form, player, game;

function preload(){
  carImage1=loadImage("image/car1.png");
  carImage2=loadImage("image/car2.png");
  carImage3=loadImage("image/car3.png");
  carImage4=loadImage("image/car4.png");
  carreteraImg=loadImage("image/carretera.png");
}

function setup(){
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
}
