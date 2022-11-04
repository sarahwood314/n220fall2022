//Create a function that generates and returns a random whole number between 0 and 10. 
//Write a web page to test it by having a button that,
//when clicked runs a function that: - Uses that function to generate a random number.
// - Displays that number on the screen. 
//Your final application should have two functions - one to make the random number,
// and one to handle the click.

//aight button time is upon us once more.
// two functions
//function A generates Randy Random
//Randy Random appears in div

//function B is just pure clicky boi
//B will need to call A to initiate the whole Javascript heist.
//i think B is the guy in the van.
// the variables are definitely getting named after ocean eleven characters

let ocean = document.getElementById("danny"); //div id variable
// let linus = 0;
// let linus = Math.random() * max;
// console.log(max);

function
rusty(max) //handles the randy random
{
    return Math.floor(Math.random() * max); //i didnt think return was a thing is JS
                                            // my day has been made with this knowledge
}


function
livingston() //the guy in the van
{
    ocean.innerHTML = rusty(11); //puts the whole thing together
}
