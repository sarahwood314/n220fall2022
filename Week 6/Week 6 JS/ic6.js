//if clicked it will be off or on
//object fam
//can only use the variables in the object.
//function needs to be pasted into the draw function
//need an array c that is an object argument
//now im lost

//Katie and Sarah :)

let tv = {x: 200, y: 200, width: 350, height:300, colora:"grey", colorb: "green", colorcasi:"black", isClicked: false};

function
setup()
{
    createCanvas(800,800);
}

function
draw()
{
    background(255);

    drawTV(tv);
}

function
drawTV(tv)
{
    fill(tv.colora);
    rect(tv.x, tv.y, tv.width, tv.height);

    fill(tv.colorcasi);
    rect(tv.x + 50 , tv.y + 30, tv.width -100, tv.height - 100);
}



