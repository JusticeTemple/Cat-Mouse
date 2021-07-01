var cat, mouse
function preload() {
    //load the images here
    c1 = loadAnimation('images/cat1.png');
    c23 = loadAnimation("images/cat2.png", "images/cat3.png");
    c4 = loadAnimation('images/cat4.png');
    bg = loadImage("images/garden.png");
    m1 = loadAnimation("images/mouse1.png");
    m23 = loadAnimation("images/mouse2.png", "images/mouse3.png");
    m4 = loadAnimation("images/mouse4.png");
    
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(700,650);
    mouse = createSprite(200,650);
    cat.addAnimation("cat", c1);
    mouse.addAnimation("mouse", m1);
    cat.scale = 0.15
    mouse.scale = 0.1
}

function draw() {

    background(bg);
    //Write condition here to evalute if tom and jerry collide
if (cat.x - mouse.x < (cat.width - mouse.width)/2){
    //cat.addAnimation('cat', c23);
    cat.addAnimation('cat', cat4)
    cat.scale = 0.15;
    cat.velocityX = 0;
    cat.changeAnimation("cat", c4)
    cat.x = 300
    mouse.addAnimation('mouse', m23);
    mouse.scale = 0.1;
}
    drawSprites();
}


function keyPressed(){
if (keyCode === LEFT_ARROW){
    cat.addAnimation('cat', c23);
    cat.changeAnimation(c23)
    cat.velocityX = -5
    cat.scale = 0.2;
    mouse.addAnimation('mouse', m23);
    mouse.scale = 0.1
    mouse.frameDelay = 25
    mouse.changeAnimation(m23)
   
}
  //For moving and changing animation write code here


}
