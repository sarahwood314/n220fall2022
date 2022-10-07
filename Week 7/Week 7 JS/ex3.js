//needs to arrange the times in order from least to highest
// a sorting method will be needed
// wait no i just need to write them in order myself like a peasant
// the method needs to sort kinda like min and maz
//stupid div tags

/*
Create an array with 3 "best times" (numbers). Write the array so the times in order, from lowest to highest.

Then, write the line of code that displays the runner-up times (second and third place) in two different divs.


*/

let a = [1.23, 3.27, 5.20];

let t = document.getElementById("two");

let tr = document.getElementById("three");
run()

function
run()
{
    for(let i = 0; i < a.length; i++)
    {
        if(i == 1)
        {
            t.innerHTML += "second place: " + a[i];
        }
        else if(i == 2)
        {
            tr.innerHTML +=  "third place: " + a[i];
        }
    }
}