const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var edges;
var ball,ballImg;
var player1,player2;

var player1score=0;
var player2score=0;
var gameState = "serve";


function preload(){
  ballImg = loadImage("./assets/ball1.png");


}


function setup() {
  var canvas = createCanvas(500, 500);

  edges = createEdgeSprites();

  engine = Engine.create();
  world = engine.world;
  player1 = createSprite(10,250,10,70);
  
  player2 =  createSprite(490,250,10,70);

  ball = createSprite(250,250);

  ball.addImage(ballImg);
  ball.scale = 0.15;
  ball.velocityX = -5;
  ball.velocityY = 7;

  
  



}

function draw() {


  background(59);
 // Engine.update(engine);


 if(gameState=='serve'){
   text("Press Space to Start",200,250)
 }

 text(player1score, 170,20);
  text(player2score, 230,20);
  if(gameState=="serve"&&keyIsDown(SPACE)){
    gameState = "play"
    
   }
   gamePlay();
 
    if (player2score == 5 || player1score == 5){
      gameState = "over";
      text("Game Over!",160,160);
  

   }
   
  drawSprites();
}
function gamePlay(){

  if(keyIsDown(UP_ARROW)&& player2.y>=40){

    player2.y-=5
    
     }
     if(keyIsDown(DOWN_ARROW)&&player2.y<460){
    
      player2.y+=5
      
       }
    
       player1.y = ball.y
    
       ball.bounceOff(edges[2])
       ball.bounceOff(edges[3])
       ball.bounceOff(player1);
       ball.bounceOff(player2);
    
       if(ball.x>500 ||ball.x < 0  ){
        if(ball.x>500){
          player1score = player1score + 1;  
        }
        if(ball.x < 0) {
          player2Score = player2Score + 1; 
        }
         
        gameState = "serve";
        reset();
      

}
function ballMovement() {
  if(keyIsDown(SPACE)){
    ball.velocityX = 2;
  ball.velocityY = 4;
 // gameState ="play";
  }
  
}


function reset() {
  ball.x = 250;
  ball.y = 250;
  ball.velocityX = 0;
  ball.velocityY = 0;
} 