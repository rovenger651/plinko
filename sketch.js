const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var ground1
var particles=[]
var plinkos=[]
var divisions=[]
var divisionHeight=300




function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  ground1=new Ground(240,799,800,15)
  ground2=new Ground(0,240,1,800)
  ground3=new Ground(480,240,1,800)
  
for(var k = 0; k <=width; k = k + 80){
    divisions.push(new division(k, height-divisionHeight/2, 10, divisionHeight));
     }
     for (var j = 55; j <=width; j=j+50){
    plinkos.push(new Plinko(j,75))}
 
    for (var j = 30; j <=width-10 ; j=j+50){
     plinkos.push(new Plinko(j,175))
   }
 
   for (var j = 55; j <=width; j=j+50){
     plinkos.push(new Plinko(j,275))
   }
 
   for (var j = 30; j <=width-10; j=j+50){
     plinkos.push(new Plinko(j,375))
   }

}

function draw() {
  background(0); 
   
  Engine.update(engine); 
  ground1.display()

for(var k = 0; k<divisions.length;k++){
  divisions[k].display();
}
for(var i = 0; i<plinkos.length;i++){
  plinkos[i].display()
}
if (frameCount% 80 === 0){
  particles.push(new Particle(random(width/2 -30,width/2 +30),10,10))
  
}


for (var p = 0; p<particles.length; p++){
  particles[p].display();
}



drawSprites();
}

