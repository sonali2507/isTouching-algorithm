var fixedRect, movingRect

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 50);
  fixedRect.shapeColor = "green"
  fixedRect.debug = true

  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green"
  movingRect.debug = true

  o1 = createSprite(50, 100, 50,50)
  o1.shapeColor = "green"

  o2 = createSprite(150, 100, 50,50)
  o2.shapeColor = "green"

  o3 = createSprite(250, 100, 50,50)
  o3.shapeColor = "green"

  o4 = createSprite(350, 100, 50,50)
  o4.shapeColor = "green"

}

function draw() {
  background(0,0,0);
  movingRect.x = World.mouseX  
  movingRect.y = World.mouseY

 
  if(isTouching(movingRect,o2)){
    movingRect.shapeColor = "red"
    o2.shapeColor = "red"
  }
  else {
    movingRect.shapeColor = "green"
    o2.shapeColor = "green"
  }


  drawSprites();
}

function isTouching(object1,object2){
  if (object1.x - object2.x <object1.width/2 +object2.width/2
    && object2.x - object1.x <object2.width/2 +object1.width/2 
    && object1.y - object2.y <object1.height/2 +object2.height/2
    &&  object2.y - object1.y <object1.height/2 +object2.height/2){
      return true
  }
  else {
    return false
  }

}