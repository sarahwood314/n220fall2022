var c = 200;
var t = 10;
var f = 15;

function 
setup() {
  createCanvas(400, 400);
  
}
//turtle
// half circle, opposite of unit circle
// complete cicle for monsieur tortue's head, tinker with coords to connect with semi circle
//monsieur tortue needs an eye
// what is the main x coordinate? 
// leg day, tamper with coords
// triangle, tamper with coords
//color
//polish and tidy
function draw() 
{
  
  strokeWeight(2);
  fill(0,255,0);
  arc(150,190,30,30, radians(0),radians(360));
  fill(0,0,0);
  arc(145,185,5,5,radians(0),radians(360));
  strokeWeight(3);
  fill(0,102,0);
  arc(c,c,80,80,radians(180),radians(360));
  strokeWeight(1);
  fill(0,255,0);
  rect(165,c,t,f);
  rect(178,c,t,f);
  rect(215,c,t,f);
  rect(228,c,t,f);
  strokeWeight(1.5);
  strokeJoin(ROUND);
  triangle(240,205,280,c,235,c);
}