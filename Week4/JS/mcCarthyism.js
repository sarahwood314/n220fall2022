//its named McCarythism because of the Red Scare during the 1950s. I thought it was clever because we are removing red.
// definitely going to need if statements that check for red.
//Like if(colour() == 179)
//{ colour == 0;}

//it would be fun for a random variable to be the colours.

function
setup()
{
    createCanvas(600,600);
    
}

function
draw()
{
    background(255);
    color(179,84,84);
    circle(300,300,40);
/*McCarythism(179,20,50);*/
}

/*function
McCarythism(r, g, b)
{
    fill(r,g,b);
    if(r == 179)
    {
        r == 0;
    }
    
    circle = (300,300, 100);
} */

function color(r, g, b)
{
    fill(r,g,b)
}