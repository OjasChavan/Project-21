var bullet;
var wall;
var speed;
var weight;
var thickness;

function setup() {
  createCanvas(1600,400);

speed = random(223,321);

  weight = random(30,52);

thickness = random(22,83);

  bullet = createSprite(30, 200, 50, 10);
  bullet.velocityX = speed;
  bullet.shapeColor = "white";

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = (80,80,80);

  
}

function draw() {

if(wall.x - bullet.x < (bullet.width + wall.width)/2){

bullet.velocityX = 0;
var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness);

if(damage = 3.68){
bullet.shapeColor = "green";
}



if(damage = 12.43){

bullet.shapeColor = "red";


}

}

  background("black");  
  drawSprites();
}
