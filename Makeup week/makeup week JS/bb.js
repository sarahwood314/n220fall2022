//2 variables to manipulate: the x, velocity.
//direction..... if it is -1 it goes left but 1 goes right
// definitely need to vibe on some if statements, they will most likely be nested
//we need another variable to check for world bounds
//if the ball goes out of bounds it needs the velocity to be multiplied and the direction to be switched the other way.
//the y needs to be modified too. so i will need 2 variables for world bounds.


//x and y variables acting as world bounds??
// may have to change the variables since the computer only counts 0-599 technically
//definitely will need tinkering.
let r = 40;
let x =  - r;
let xv = 1;
let y = 80;
let vy = 1;

//it has to be a true DVD bouncy thingy



//world bounds
wx = 800;
wy = 600;
bwx = -1;
bwy = -1;
//speed or velocity variable. In physics they are interchangeable.
//I actually need two speeds since like in physics the x and y are seperate but going at the same time.
let sx = 5;
let sy = 5;

//direction
let d = 1;


//the fun part will all go in draw()
function
setup()
{
    createCanvas(wx,wy);
}

function
draw()
{
    background(0);

   x += sx;
   y += sy;

    fill(3,252,128);
    //arc(400,300,x,y,radians(0), radians(360));
 
   circle(x,y,r);
   if(x > wx  || r + x <= 1 /*|| sx == -1 && r - x < bmx*/)
   {
        sx = sx * -1;
        
        
    
       /* if(sx == -1 && x < bmx)
        {
            sx = sx * -1;
        }*/
       
   }
  if(y > wy || y <= -1 /*|| sy == -1 && r -y < bmy*/)
  {
     sy = sy * -1;
   

     /*if( y < bwy && y < -1 && r < wy)
     {
         sy = sy * -1;
     }*/
    /* if()
     {
        sy = sy * -1;
     }
     */
        /*if(sy == -1 && y < bmy)
         {
             sy = sy * -1;
         }*/
     
    
    //finished
    
  }
     

 }

 



