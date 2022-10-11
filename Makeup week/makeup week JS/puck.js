/*
Canvas size: 400x300

Create an application that draws a circle where the mouse is at. 
(Use  the P5 variables mouseX and mouseY for this).
 When the mouse is on the right half of the canvas, draw the circle in red.
  When the mouse is on the left side of the canvas, draw the circle in blue.
*/

function
setup()
{
    createCanvas(400,300);
}

function
draw()
{
    background(0);

    fill(170,200,160);

}

function
mousePressed()
{
    if(mouseX < 200)
    {
        fill(255,0,0);
    }
    if(mouseX > 200)
    {
        fill(0,255,255);
    }
}