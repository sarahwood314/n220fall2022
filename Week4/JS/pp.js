//unit circle gang (1,0),(0,1),(-1,0),(0,-1)
//sin and cos
//function polarPoint
//will need an if statement
//need var r for radius
//let x = r * Math.sin(mouseX);
//wtf is  createVector?????
//it contains magnitude and direction, w/ two or three dimensions available
// i will wager it has something to do with the x and y variables but thats just a guess.
//need var res
//var res == polarPoint();
// translate(100,100); <- will go before drawing methods
// r = 10;
// res.x res.y
//circle(res.x; res.y; r);

// pP() is called in draw
// y == x; bc it is the result of x's math. 
//res will equal the result after calling pP() in draw.

// i am dumb, it it will not be the at the coordinates above. it will be the true unit circle gang





function
setup()
{
 createCanvas(800,800);
}

function 
draw()
{
    var r = 10;
let x = r * Math.sin(mouseX);
let y = r * Math.cos(mouseY);
let v = createVector(x,y); 
res = (x, y);

    background(255);


  /*  let v = createVector(x,y);*/



    translate(100,100);
    
    polarPoints(x,y,r);
    print(v);

}


function
polarPoints(x,y,r)
{
    
    circle(res.x , res.y , r);

    if(x < r || y < r)
        {
            x == 0;
            y == 0;
        }
}