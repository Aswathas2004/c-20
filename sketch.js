function setup() {
  createCanvas(800,400);

  movingRect=createSprite(400, 200, 50, 50);
  movingRect.shapeColor="green";
 

  fixedRect=createSprite(600, 200, 50, 50);
  fixedRect.shapeColor="green";
 
}



function draw() {
  background(0);  
  console.log(fixedRect.x-movingRect.x);

  if(fixedRect.x-movingRect.x<fixedRect.width/2+movingRect.width/2 &&
   movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2  &&
   fixedRect.y-movingRect.y<fixedRect.height/2+movingRect.height/2 &&
   movingRect.y-fixedRect.y< fixedRect.height /2+movingRect.height /2){
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }
  else{
    fixedRect.shapeColor="green";
    movingRect.shapeColor="green";
  }

  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
  drawSprites();
}