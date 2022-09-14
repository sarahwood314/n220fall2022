/*drawing drawer*/
//car go vroom vroom
//function will follow mouseX and mouseY
// 3+ times called in setup() or draw().


function
setup()
{
    createCanvas(600,600);
    
   
}

function
draw()
{
    background(0);
    vroom(mouseX,mouseY, 40);
    vroom(-mouseX + 300,-mouseY + 300,40);
    vroom(-mouseX + 300, mouseY, 40);
}

function
vroom(x,y,r)
{
    
    fill(235, 64, 52);
    rect(x,y, 150,70); 
    fill(84, 179, 179);
    rect(x + 25 ,y, 25,25);
          fill(117, 116, 116);
    circle(x + 20 , y + 65, r);
    circle(x + 90 , y + 65, r);
}
