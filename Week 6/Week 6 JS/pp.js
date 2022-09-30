/*
Write the markup and JS to place a square div on the page. 100px by 100px, green background.
Make it so that when the div its clicked, it increases its size by 10% every time.

Hints:

Make a variable to store the height and with of the object
to set the height and width, set to varName + "px"
10% is .1 bigger,or 1.1 * the original size
*/

//draw and setup function for the canvas???
//but where is the html in this.....
// i will need to id it first off.
//and then in the js I can make the id a variable and start messing with it
//i can call functions through the div tag from the js to make it do what I want.
// who knew.
// i have no idea if i need the p5 tag so my homie is just going to chill at the end.
// its a good thing i kept my notes from sophomore year cause html is not ringing rn, and these cheezits are bad.

let width = 100;
let height = 100; 

let howdy = document.getElementById("howdy");
howdy.style.backgroundColor = "#DAF7A6";
howdy.style.width = width + "px";
howdy.style.height = height + "px";






function
grow()
{
    width += 10;
    height += 10
       howdy.style.width = width +"px";
        howdy.style.height = height  +"px";
    
}
