//Create an application that:

//Takes in a list of comma-separated numbers from the user
///Splits that list into an array of numbers
//Converts the string version of the numbers into number versions
// Loops through the array and sums up the values
// Calculates the average of the array
// Displays to the user
// The average
// The sum
// Removes the text from the input so the user can type in new numbers

//array is initially empty
//we need the .includes to get rid of the commas
//indexOf can return the location????
//then push the new array with the new information
//puts array string into int form
// for loop to sum array
//divs by array.length
// displays average and sum.
let w = document.getElementById("witty");



let archive = [];
let sum = 0;

let nums;

function
mean() 
{
    let num = document.getElementById("ahhh").value;
    // let p = prompt("Enter in a list with numbers, plz:", "0"); //prompt
    // archive[p];

    nums = num.split(",");

    // let collect = archive.filter(
    //     (ahhh) => ahhh.split(",")
    // ); //function ahhh filters through p in lowercase mode scowering for ,
    // // it puts that into a variable...
    // // it uses split to split into the array
    // // 

    // let melt = parseInt(collect); //transfigures from string to int

    // archive[melt]; //archive is filled by melt as archive was empty earlier

    for(let i = 0; i < nums.length; i++)
    {
        sum = sum + parseInt(nums[i]); // sum collects each int and adds it to a total
    }
    let avg = sum / nums.length; //takes the whole sum and divides it


    console.log(sum + " " + avg);

    // w.innerHTML = avg; //displays the avg in div tag
    document.getElementById("ahhh").value = "";
}

//error 1 - filter is not a function
//i need another empty array to store p in????
//or archive can just be put through the ringer
//trying archive

//error 2 - div put out NaN
//its not deleting the commas most likely
