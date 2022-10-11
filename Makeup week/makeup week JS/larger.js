/*
    Create an application that draws a circle to the center of the screen every update frame,
     starting with a diameter of 1. Using a global variable, change increase the diameter of the circle by 1 every frame.
      Once the circle gets a diameter of 200, set its diameter back to 1.
*/

let r = 1;
let s = 1;

let x = 400;
let y = 400;

function
setup()
{
    createCanvas(800,800);
}

function
draw()
{
    background(0);

    //fill(30,0,150);
    //circle(x,y,r);
   //
    r++;

    if(r == 200)
        r = 0;
        
    
    

    fill(30,0,150);
    circle(x,y,r);

}
