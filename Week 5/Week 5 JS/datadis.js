//object does graphics with properties: width, height, color, and position.
//in draw function draw the object using data from object.
//create a function that takes an argument and draws an object on the screen from the object argument.

let dino = {width: 400, height: 200, color: "green", x: 175, y: 500, r: 120};

function
setup()
{
    createCanvas(1000,1000);
}

function
draw()
{
    drawDino(dino)
}

function
drawDino(dino)
{
    background(0);

    fill(dino.color);

    
    rect(dino.x,dino.y - 300, dino.width - 350, dino.height * 2);
    circle(dino.x,dino.y -290, dino.r);

    fill(0);
    circle(dino.x - 10, dino.y - 300, dino.r - 100);

    fill(dino.color);
    rect(dino.x, dino.y, dino.width, dino.height);
    rect(dino.x + 30, dino.y + 200, dino.width - 380, dino.height - 180);
    rect(dino.x + 90, dino.y + 200, dino.width - 380, dino.height - 180);
    rect(dino.x + 300, dino.y + 200, dino.width - 380, dino.height - 180);
    rect(dino.x + 350, dino.y + 200, dino.width - 380, dino.height - 180);
}


