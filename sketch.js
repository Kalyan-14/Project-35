var dog, happyDog;
var foodS, foodStock;
var database;
var dog;

function preload()
{
  dogImage = loadImage("dog.png");
  happyDogImage = loadImage("happydog.png");
}

function setup() {
	createCanvas(500, 500);
  
  dog = createSprite(250,250)
  dog.addImage("dogImg",dogImage);

}


function draw() {  

  drawSprites();
  //add styles here

}



