var bullet,wall;
var  thickness,speed,weigth;



function setup() 
{
  createCanvas(1250,400);
 
   bullet = createSprite(50, 200, 50, 20);
   wall = createSprite(1200,200,thickness,height/2);
  
speed = random(50,90);
thickness = random(23,83);
weigth = random(400,1200);
  bullet.velocityX = speed;
}

function draw() {
  background(0,0,0);  
  




if( hasCollided(bullet,wall) )
{
  bullet.velocityX=0;
  var damage = 0.5*weigth*speed*speed/(thickness*thickness*thickness)
  
  if(damage > 10)
{
    wall.shapeColor = color(0,255,0);
    bullet.x=1150;
  }
 if(damage < 10 )
 {

wall.shapeColor = color(255,0,0);
bullet.x=1150;

 }

}


  drawSprites();
 

}


function hasCollided(o1,o2)
{
  if(o2.x - o1.x <o1.width/2 + o2.width/2 )
  {
    return true;

  }
  else 
  {
    return false;
  }
}
