var obstacleImage,bananaImage,obstacleGroup,back1,back;
var player,player_running,foodGroup;
var ground;
var score;

function preload(){
back = loadImage("jungle.png");
player_running = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
bananaImage = loadImage("banana.png");
obstacleImage = loadImage("stone.png");
}



function setup() {
  createCanvas(400,400);
  
  back1 = createSprite(200,200,400,400);
  player = createSprite(100,340,20,50);
  
  
  player.addAnimation("running", player_running);
  player.scale = 0.1;
  
  back1.addImage(back);
  back1.scale = 2;
  back1.x = back.width/2;
  back1.velocityX = -4;
  
  
  ground = createSprite(390,370,400,10);
  ground.x= ground.width/2;
  ground.visible = false;
  
  score = 0;
  
  obstacleGroup = new Group();
  foodGroup = new Group();
 
}

function draw() {
  background(220);
  
  if(back1.x<0){
  back1.x = back1.width/2;
  }
  
  if(keyDown("space")&&player.y>333){
    player.velocityY = -8;
  }
  player.velocityY = player.velocityY+0.2;
  
  
 
if(obstacleGroup.isTouching(player))
   {
   player.scale = 0.10;
   score = 0;
   }


 player.collide(ground);
  
   if(player.isTouching(foodGroup)){
     foodGroup.destroyEach();
     score = score+2;
     }

   food();
  obstacles();
  drawSprites();

  switch(score){
  case 10: player.scale = 0.12;
          break;
  case 20: player.scale = 0.14;
          break;  
  case 30: player.scale = 0.16;
          break;  
  case 40: player.scale = 0.18;
          break;  
  default:break;
}  


 
     textSize(24);
     fill("black");
     textFont("Algerian");
     text("SCORE:" + score,240,20);
    


}

function obstacles() 
  {
  
  if(frameCount%200 ===0){
  var stone = createSprite(350,370,20,30);
  
  stone.x = Math.round(random(390,390));
  stone.addImage(obstacleImage);
  stone.scale = 0.3;
  stone.velocityX = -4;
  
   stone.setCollider("rectangle",2,1,48,48,0);  
  
  stone.lifetime = 100;
  obstacleGroup.add(stone);
    
   
  }
}

function food() 
  {
  if(frameCount%80===0){
    var banana = createSprite(200,150,20,20);
  banana.x = Math.round(random(395,390));
  banana.addImage(bananaImage);
  banana.scale = 0.065;
  banana.velocityX = -4;
  
  banana.lifetime = 100;
  foodGroup.add(banana);
    }
  }
