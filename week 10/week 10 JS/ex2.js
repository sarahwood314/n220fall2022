// Bad word catcher with loops

 

// For the purposes of this exercise, bad words are: clear, water, tires.

// Create an application that:

// Takes input from a user using a simple text input field.
// Splits the string on spaces
// Loops through  the array looking for bad words in the array
// Adds 1 to a tally count when a bad word is found
// Outputs to the document
// If any bad words were found (found / not found)
// How many bad words, in total, were found
// Clears out the text field so the user can input a new string
 

// For example, if the user input "clear water is clear",
// there are 3 bad words in the string.



let m = document.getElementById("maybe");



let sum = 0;

let france;

function
french()
{
   let naughty = document.getElementById("howdy").value.toLowerCase();

    france = naughty.split(" ");
    

    for(let i = 0; i < france.length; i++)
    {
        // if(france[i] = "clear")
        // {
        //     sum++;
        // }
        // else if(france[i] = "water")
        // {
        //     sum++;
        // }
        // else(france[i] = "tires")
        // {
        //     sum++;
        // }
        if(france[i]==="clear" || france[i]==="water" || france[i]==="tires")
        {
            sum++;
        }
    }
    

    document.getElementById("howdy").value = "";
    m.innerHTML = sum;
}