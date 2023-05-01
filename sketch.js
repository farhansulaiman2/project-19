//
var spaceship,spaceshipImg,space,spaceImg,fireball,fireballimg
var guardship1,guardship2,guardship3,guardship4,spaceshipsound,fireballsound
var guardship1img,guardship2img,guardship3img,guardship4img
var score=0
var gameState = "play"

function preload(){
spaceImg = loadImage("p.png")
guardship1img = loadImage("gardship1.png")
guardship2img = loadImage("gardship2.png")
guardship3img = loadImage("gardship3.png")
guardship4img = loadImage("gardship4.png")
spaceshipImg = loadImage("pop.png")
fireballimg = loadImage("uipo.png")
spaceshipsound = loadSound("Missile1 (1).mp3");
fireballsound.loadSound("Missile1 (1).mp3")



}

function setup() {
 createCanvas(600,600);
 space = createSprite(300,300);
  space.addImage("space",spaceImg);
  space.velocityY = 5;
space.scale=2.5
  score = 0

  guardShipGroup = new Group()
lasergroup = new Group()


spaceship = createSprite(300,300,20,20)
spaceship.addImage("spaceship",spaceshipImg)
spaceship.scale=0.3
}

function draw() {
background(9)


if(gameState === "play"){

    if(keyDown("left")){
        spaceship.x = spaceship.x - 3;
    }


    if(keyDown("right")){
        spaceship.x = spaceship.x + 3;
    }

    if(keyDown("up")){
  
        spaceship.velocityY = -10;
     spaceship.play(spaceshipsound)
   }
   spaceship.velocityY = spaceship.velocityY + 0.8;
  
   if(space.y > height ){
    space.y = height/2;
  }
spawnEnemy()

if(keyDown("space")){
  
    creteLazar()

}

if (lasergroup.isTouching(guardShipGroup)) {
    guardShipGroup.destroyEach();
    score=score + 50;
  }


if(spaceship.isTouching(guardShipGroup)||spaceship.y > 600){
spaceship.destroy()
gameState = "end"
}

drawSprites();
textSize(20);
fill(255);
text("score: "+ score,width-150,30);


}

if(gameState === "end"){

    stroke("blue");
    fill("yellow");
    textSize(30);
    text("Game Over", 300,300)

    space.destroy()

}






drawSprites()
}


function spawnEnemy(){
if(frameCount % 240 === 0){

guardship1 = createSprite(200, -50)
guardship2 = createSprite(200,10)
guardship3 = createSprite(200,60)
guardship4 = createSprite(200,90)


guardship1.x=Math.round(random(120,400))
guardship2.x=Math.round(random(120,400))
guardship3.x=Math.round(random(120,400))
guardship4.x=Math.round(random(120,400))

guardship1.addImage(guardship1img); 
    guardship2.addImage(guardship2img);
    guardship3.addImage(guardship3img);
    guardship4.addImage(guardship4img);
    
guardship1.scale=0.3
guardship2.scale=0.3
guardship3.scale=0.3
guardship4.scale=0.3

guardship1.velocityY=10
guardship2.velocityY=10
guardship3.velocityY=10
guardship4.velocityY=10

spaceship.depth = guardship1.depth;
    spaceship.depth =1;
    
    spaceship.depth = guardship2.depth;
    spaceship.depth =1;
    
    spaceship.depth = guardship3.depth;
    spaceship.depth =1;
    
    spaceship.depth = guardship4.depth;
    spaceship.depth =1;
    
    guardship1.lifetime = 800;
    guardship2.lifetime = 800;
    guardship3.lifetime = 800;
guardship4.lifetime=800




guardShipGroup.add(guardship1, guardship2,guardship3,guardship4);





}

}



function creteLazar(){

 fireball = createSprite(100,300,20,20)
fireball.addImage(fireballimg)
fireball.x = spaceship.x;
  fireball.y=360;
  fireball.velocityY = -4;
fireball.lifetime = 100;
  fireball.scale = 0.1;

lasergroup.add(fireball)

}








