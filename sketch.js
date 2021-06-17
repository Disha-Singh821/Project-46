var mario, mario_running, coin, coinImg, pipe, pipeImg;
var ground, groundImg, cloudImg;

function preload() {
  mario_running = loadAnimation("mario_running1.png", "mario_running3.png","mario_running4.png");
  groundImg = loadImage("background.png");
  cloudImg = loadImage("cloud.png");
}

function setup() {
  createCanvas(800,500);

 ground = createSprite(300,300);
 ground.addImage("ground", groundImg);
 ground.scale = 1.5;
 ground.x = ground.width/2;

mario = createSprite(50,400,20,20);
mario.addAnimation("running",mario_running);
mario.scale = 0.3;

edges = createEdgeSprites();

}

function draw() {
  background("white");  

 ground.velocityX = -4;
  if(ground.x < 0) {
    ground.x = ground.width/2;
  }

  if (keyDown("space") && mario.y >= 400) {
    mario.velocityY = -10;
  }

mario.velocityY = mario.velocityY + 0.5;

mario.collide(edges[3]);

spawnClouds();
  drawSprites();
}

function spawnClouds() {
  if(frameCount%60===0){
    var cloud = createSprite(800,120,40,10);
    cloud.addImage(cloudImg);
    cloud.y = Math.round(random(280,50));
    cloud.scale = 0.4;
    cloud.velocityX = -3;

    cloud.depth = mario.depth;
    mario.depth = mario.depth + 1;

  }
}
