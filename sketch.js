var cat,mouse;
var catImage,mouseImage;
function preload() {
    catImage=loadAnimation("images/cat1.png","images/cat2.png","images/cat3.png","images/cat4.png")
    mouseImage=loadAnimation("images/mouse1.png","images/mouse2.png","images/mouse3.png","images/mouse4.png")
    //load the images here
}

function setup(){
    createCanvas(1000,800);
    cat= createSprite(50,50,50,50);
    mouse= createSprite(50,200,50,50);
    cat.addAnimation(catImage);
    mouse.addAnimation(mouseImage);

    //create tom and jerry sprites here

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
