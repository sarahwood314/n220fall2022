let name = "Travis";
let age = 36;
let hungry = true;

let me = {
    name: "Travis", age: 36, hungry: true, fashionSense: 1, }

let orb = {x: 200, y: 50, r: 15}
   
function
setup()
{
    createCanvas(800,600);
}
function 
draw()
{
    background(0);
circle(orb.x, orb.y, orb.r)
orb.y += Math.sin(frameCount / 60) * 2
}
function
drawface(x,y)
{

}