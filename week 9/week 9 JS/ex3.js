//Make a function that takes a string, and removes every instance of "#" from the string,
// and returns the "cleaned up" version without the hashtags/octothorpes. 

//Write a web page to test the function - one button and input, and one div.
// When the button is pressed, take the input, use the function to remove the hashtags,
// and show the result string on the page.

//they arent hastags they are sharps
//so the function needs:
// prompt function to ask for a sentence to clean away the sharps from
// a working part to clear away the sharps
    // the working needs:
        //an if statement to run through the string
        // the .includes could help with that
        //if(idk.includes("#"))
        // in java you would substring to get rid of unwanted clutter
        // javascript has
        // we need the .includes to return the position for the substring
        // so we need a for loop to substring as it checks.

//function:
    //prompt
    //if statement for null
    //for loop
    // if statement with the i telling positon
    // if true then it will substring
    //return cleaned sentence outside of for loop with .html


    let w = document.getElementById("windex"); // the returner
    let m = document.getElementById("mop");
     let b = "";
    let t = "";
    function
    bleach()
    {
        let a = prompt("enter in a sentence with the # littered in plz", "#example");
        if(a != null)
            {
                for(let i = 0; i < a.length; i++)
                {
                    if(a.includes("#"))
                     {
                         b = a.slice(i +1); //substring did not work, so maybe slice will??
                        break;
                        
                        
                     }
                }
                w.innerHTML = b; 
                
            }
        
        
    }
   

        

        


