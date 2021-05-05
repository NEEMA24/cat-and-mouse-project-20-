var backGroudImage;
function preload() {
    backGroudImage = loadImage("images/garden.png");
    catImage1 = loadAnimation("images/cat1.png")
    catImage2 = loadAnimation("images/cat2.png", "images/cat3.png")
    catImage3 = loadAnimation("images/cat4.png")
    mouseImage1 = loadAnimation("images/mouse1.png")
    mouseImage2 = loadAnimation("images/mouse2.png","images/mouse3.png")
    mouseImage3 = loadAnimation("images/mouse4.png")
    

    }

function setup(){
    createCanvas(1000,800);
    cat = createSprite(870,600);
    cat.addAnimation("sleeping",catImage1);
    cat.scale  = 0.2
    mouse = createSprite(200,600);
    mouse.addAnimation("standing mouse",mouseImage1)
    mouse.scale = 0.15

}

function draw() {

    background(backGroudImage);
  if(cat.x-mouse.x<(cat.width-mouse.width)/2){
       cat.velocityX = 0
cat.addAnimation("catstanding",catImage3);
cat.changeAnimation("catstanding");
cat.x = 300;
cat.scale = 0.2;
mouse.addAnimation("mousestanding", mouseImage3)
mouse.scale = 0.1
mouse.changeAnimation("mousestanding");
  }

    drawSprites();
}


function keyPressed(){

 if(keyCode === LEFT_ARROW){
cat.velocityX = -5
cat.addAnimation("catRunning",catImage2);
cat.changeAnimation("catRunning");
mouse.addAnimation("mouseteasing", mouseImage2)
mouse.frameDelay = 25
mouse.changeAnimation("mouseteasing");
 }


}
