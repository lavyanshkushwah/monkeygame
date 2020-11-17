
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime=0;
function preload(){
  var ground;
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
  monkey=createSprite(80,315,20,20) 
monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
 
  console.log(ground.x)
 
  score=0
  survivalTime=0
FoodGroup=new Group();
  obstacleGroup=new Group();
}


function draw() {
createCanvas(600,400);
   monkey.y=monkey.y+0.8; 
   monkey.collide(ground);
  if(keyDown("space")){
    monkey.velocityY=-5 ;
     
  }
  //gravity
  monkey.velocityY=monkey.velocityY+0.8    
 
  
  if(ground.x<0){
      ground.x=ground.width/2;
     
     }
  
  
  
  
  
  
  
  
  
  stroke("red");
  fill("white");
  textSize(20);
  text("score:"+score,450,50);
  stroke("red");
  fill("black")
  textSize(20);
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survivalTime"+survivalTime,100,50);
  console.log(survivalTime);
  fruits();
  obstacles();
  
  
  
  
  
  drawSprites();
  
}
function fruits(){
 if(frameCount%80===0){
    banana=createSprite(150,200,40,30) ;
  banana.addImage(bananaImage);
  banana.scale=0.1; 
   banana.velocityX=-3; 
   banana.y=Math.round(random(120,200));
 banana.lifetime=150;
 FoodGroup.add(banana);
 }
 
}
function obstacles(){
 if(frameCount%300===0){
    obstacle=createSprite(150,300,20,20);
   obstacle.addImage(obstacleImage);
   obstacle.scale=0.1
    obstacle.velocityX=-3;
    obstacle.lifetime=150;
   obstacleGroup.add(obstacle);
    } 
  
  
  
  
}




