//two objects with x,y,width, and height for a tall rectangle.
// x prp[erties should be set to the left and right sides of the screen

//draw function
//both rectangles on the screen
// if up key pressed the first object moves up and the other mirrors down
//down key is the same jist


//rectangle alto. el otraves es opuesto de la originale.
let pong = {x: 10, y: 400, width: 40, height: 200, color: "white"};
let ponga = {xa: 710, ya: 400, widtha:40, alto: 200, color: "white"};
function
setup()
{
 createCanvas(800,800);
}

function
draw()
{
    background(0)
    drawPong(pong);
}

function
drawPong(pong)
{
    fill(pong.color);
    rect(pong.x, pong.y, pong.width, pong.height);
    rect(ponga.xa, ponga.ya, ponga.widtha, ponga.alto);
    if(keyIsDown(UP_ARROW))
    {
        pong.y--;
        
       if(keyIsDown(UP_ARROW))
       {
        ponga.ya ++;
       }
    }
    if(keyIsDown(DOWN_ARROW))
    {
        pong.y++;

        if(keyIsDown(DOWN_ARROW))
        {
            ponga.ya --;
        }
        
    }

}