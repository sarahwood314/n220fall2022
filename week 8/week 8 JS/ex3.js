//number guesser easy mode
// random int between 1 and 21 (so it goes to 20)
// user has to play higher or lower
// while loop will be needed


const randy = math.floor(math.random() * 20) + 1; //maybe a const will keep it the same instead of let???
let g = document.getElementById("g");

function
idk()
{
    let rNum = prompt("guess the number :p", "");

    rNum = parseInt(rNum); //changes back number to a string, idk what the random is gonna do
        //if(rNum != null) // it will keep going until the correct number is guessed
        //i changed it to the if statement, maybe i try do...
        do {
            if(rNum < randy) // number doesnt equal randy random
            {
                g.innerHTML = "too low, try again :p";
               
            }
            else if(rNum > randy) //ditto
            {
                g.innerHTML = "too high, try again :p"
            }  
           
            rNum = prompt("guess the number :p", "");
        }
        while(rNum != null)

    }
        // while(rNum != null)
        // {

            
        //     if(rNum < randy) // number doesnt equal randy random
        //    {
        //        g.innerHTML = "too low, try again :p";
              
        //    }
        //    else if(rNum > randy) //ditto
        //    {
        //        g.innerHTML = "too high, try again :p"
        //    }  
          
        //    rNum = prompt("guess the number :p", ""); //runs through both prompts then applies one then asks again.
        //    // only problem is it might be changing the number each time???
        // }
    

