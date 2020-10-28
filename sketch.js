var car;
var wall,thickness;
var bullet
var speed;
var weight;
var damage;

function setup() {
  createCanvas(1600,400);
  
speed=random(55,90);
weight=random(30,52);

thickness=random(223,321);
  
  bullet=createSprite(50,200,50,5);
  bullet.velocityX=speed
  bullet.shapeColor=color(255)

wall.createSprite(1200,200,thickness,height/2);

wall.shapeColor=color(80,80,80)

}

function draw() {
  background(0,0,0);  

 if(bullet.x-car.x  <  (car.width+wall.width)/2){
   car.velocityX=0;
   var deformation=0.5 * weight * speed * speed/22509;
   if(deformation>180){
     car.shapeColor=color(255,0,0);
   }
  
   if (deformation<180 && deformation>100){
     car.shapeColor=color(230,230,0)
   }

   if(deformation<100){
     car.shapeColor=color(0,255,0);
   }
 }
  drawSprites();
}
function hasCollided(bullet,wall){
  bullet.velocityX=0;
 var damage= 0.5 * weight * speed * speed * speed/(thickness * thickness*thickness)

 if (damage>10)
 {
   wall.shapeColor=color(255,0,0)
 }
  


if (damage<10)
 {
   wall.shapeColor=color(0,255,0)
 }


  bulletRightEdge=lbullet.x +bullet.width;
  wallleftEadge=lwall.X;
  if (bulletRightEdge>=wallLeftEdge)
  {
     return true
  }
    return false;

}