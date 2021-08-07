var garden,rabbit;
var gardenImg,rabbitImg;
var apple, appleImg;
var leaf, leafImage;


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImage = loadImage("orangeLeaf.png")
}

function setup(){
  
createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating rabbit running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

}


function draw() {
  background(0);
  
  //obstacles
  var select = Math.round(random(1,2))
  if (frameCount % 80 ==0){
    if (select == 1) {
      apples();
    }
    if(select == 2){
      leaves();
    }
  }

  //moving rabbit
  if(keyWentDown("left")){
    rabbit.velocityX = -3;
  }

  if(keyWentUp("left")){
    rabbit.velocityX = 0;
  }

  if(keyWentDown("right")){
    rabbit.velocityX = 3;
  }

  if(keyWentUp("right")){
    rabbit.velocityX = 0;
  }

  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
}

//make the apples function
function apples(){
  if (frameCount%80 === 0){
    apple = createSprite(250,50,50,50);
    apple.addImage("appleImg", appleImg);
    apple.scale = 0.07;
    apple.velocityY = 3;
    apple.x = Math.round(random(20,380));
    apple.lifetime = 450;
    apple.depth = rabbit.depth;
    rabbit.depth = rabbit.depth+1;
  }
}

//make the leaves function
function leaves(){
  if (frameCount%80 === 0){
    leaf = createSprite(250,50,50,50);
    leaf.addImage("leafImage", leafImage);
    leaf.scale = 0.07;
    leaf.velocityY = 3;
    leaf.x = Math.round(random(50,380));
    leaf.lifetime = 450;
    leaf.depth = rabbit.depth;
    rabbit.depth = rabbit.depth+1;
  }
}





