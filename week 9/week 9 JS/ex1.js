//Create an application that with an input and a button. 
//When the user clicks on the button, update a div on the page to tell the user
// if what the user typed into the input is divisible by 7 or not.
// Use a separate function from the onclick function to discern if it is divisible. 
//This function should return either true if it is divisible  or false if it is not.

//button
//need on click for button
//results in div
//prompt function
// modulus % will be needed
//if it returns 0 then true, else false
//two functions?????
// i think i just need the one tho in espanol tho

//DO NOT DO COMMAND SHIFT N 
//holy s*** do not do that on a mac.
//great reminder to save before being curious.
//i lost my train of thought on this 
//big rip :p
// prompt time i think????
//we need that parse thingy to change the scanner input from string to an int

let a = document.getElementById("a");

let mod = 0;


function
siete()
{
    let num = prompt("Input WHOLE number, WHOLE number, we do not do doubles here ", "0");
    num = parseInt(num);

    if(num != null) //second air quotes in prompt
    {
        if(num % 7 == 0) //it will check this after num, doing the modulus thingy.
        {
           a.innerHTML = "true";
        }

        else
            a.innerHTML = "false"; //else should be the secondary case if the modulus fails.
    }
}