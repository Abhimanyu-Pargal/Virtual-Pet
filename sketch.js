//Create variables here
var dog,dogimg;
var database;
var food,foods;
function preload()
{
	//load images here
  dogimg = loadImage("images/dog.png");
}

function setup() {
	createCanvas(800, 700);
  database = firebase.database();
  dog = createSprite(250,300,150,150);
  dog.addImage(dogimg);
}


function draw() {  

  drawSprites();
  //add styles here

}



