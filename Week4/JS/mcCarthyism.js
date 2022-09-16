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
   

    

    let x = random(256);
    let y = random(256);
    let z = random(256);
    let rb = color(x,y,z);
    
    background(255);
    


   fill(rb);
   McCarythism(rb);
    circle(300,300,40);
    
/*McCarythism(179,20,50);*/
}

function
McCarythism(x,y,z)
    {
        if(x <= 179)
        {
            x == 0;
        }
    }