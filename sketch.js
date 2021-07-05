var towerImg,tower;
var ghostImg,ghost;
var door,doorImg,doorGrp;
var climber,climberImg,climberGrp;
var invisibleblock,invisibleblockGrp;
var gameState="play"
var sound 

function preload(){
towerImg=loadImage("tower.png")
ghostImg=loadImage("ghost-standing.png")
climberImg=loadImage("climber.png")
doorImg=loadImage("door.png")
sound=loadSound("spooky.wav")
}

function setup(){
createCanvas(600,600)
tower=createSprite(300,300)
tower.addImage(towerImg)
tower.velocityY=1
ghost=createSprite(300,300)
ghost.addImage(ghostImg)
ghost.scale=0.3
//sound.loop()
doorGrp=new Group()
climberGrp=new Group()
invisibleblockGrp=new Group()
}

function draw(){
background (0)
if (gameState==="play"){
if (keyDown("left_arrow")){
ghost.x=ghost.x-3
}
if (keyDown("right_arrow")){
ghost.x=ghost.x+3
}
if (keyDown("space")){
ghost.velocityY=-10
}
ghost.velocityY=ghost.velocityY+0.3  
if (tower.y>500){
tower.y=300
}
  if(climberGrp.isTouching(ghost)){
    ghost.velocityY=0
  }
  if(invisibleblockGrp.isTouching(ghost)||ghost.y>600){
    gameState="end"
    ghost.destroy();
  }
spawndoor()
drawSprites();

}
if (gameState==="end"){
text ("gameover",250,250)
}
}
function spawndoor(){
if (frameCount%200===0){
door=createSprite(200,-50)
door.addImage(doorImg)
door.velocityY=1

climber=createSprite(200,10)
climber.addImage(climberImg)
climber.velocityY=1

invisibleblock=createSprite(200,15)
invisibleblock.velocityY=1

door.x=Math.round(random(100,400))
climber.x=door.x
invisibleblock.x=door.x
invisibleblock.height=1

  doorGrp.add(door)
climberGrp.add(climber)
invisibleblockGrp.add(invisibleblock)
}

}
