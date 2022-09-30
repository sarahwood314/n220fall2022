/*
Write the markup and JavaScript to place a square div on the page (100px x 100px), with a blue background.
 Using onmouseover and onmouseout (instead of "onclick"), change the div's color to black when the mouse is over the div, and back to blue when the mouse leaves.
*/

//use onmuseover and onmouseout 
//when mouse is away from square it will be blue.
//when mouse is on the square it will be black

let width = 100;
let height = 100;


let sirbox = document.getElementById("sirbox");

sirbox.style.backgroundColor = "#00CCCC";
sirbox.style.width = width + "px";
sirbox.style.height = height + "px";

sirbox.onmouseover = earlOfBox();
sirbox.onmouseout = earlOfBox();

function
earlOfBox()
{
    if(sirbox.type == 'mouseover')
    sirbox.style.color = "#000000";
    else
    sirbox.style.color = "#00CCCC";
}

/*function
baronOfBox()
{
    sirbox.style.color = "#00CCCC";
}*/