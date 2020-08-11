var fixedRect, movingRect;
var r2,r3

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  r2=createSprite(200,300,70,80);
  r3=createSprite(200,700,60,100);
  r2.velocityY=4
  r3.velocityY=-4
}

function draw() {
  background(0,0,0);  
  bounceOff(movingRect,fixedRect);
  bounceOff(r2,r3);
  drawSprites();
}
