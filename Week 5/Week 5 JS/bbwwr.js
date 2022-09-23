//bb code
// recoded so object will store ball's size, color, and velocity.
//no global variables nor hardcoded values can be used in new version.



  

let dvd = {rad: 40, x: - 40, xv: 1, y: 80, vy: 1, sx: 5, sy: 5,  wx: 800, wy: 600, bmx: -1, bmy: -1};

function
setup()
{
    createCanvas(800,600)
}

function
draw()
{
    background(0);

    drawBB(dvd);
}

function
drawBB(dvd)
{
    let a = random(256);
    let b = random(256);
    let c = random(256);
    let rb = color(a,b,c);
    
   fill(rb);


dvd.x += dvd.sx;
dvd.y += dvd.sy;


    circle(dvd.x, dvd.y, dvd.rad);
    if(dvd.x > dvd.wx || dvd.rad + dvd.x <= 1)
    {
        dvd.sx = dvd.sx * -1;
    }

    if(dvd.y >dvd.wy || dvd.y <= -1)
    {
        dvd.sy = dvd.sy * -1;
    }
}
