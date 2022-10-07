//just like fizzbuzz from highschool
//need the modulus for this
// lot of if statements
//wont be that bad

let cow = document.getElementById("cow");

fizzbuzz();

function
fizzbuzz()
{
    for(let i = 1;  i <= 25 ; i++)
    {
        if(i % 3 == 0 )
        {
            cow.innerHTML += "beep <br>"
           
        }
        else if(i % 5 == 0)
        {
            cow.innerHTML += "bop <br>"
           
        }

        else if(i % 3 == 0 && i % 5 == 0)
        {
            cow.innerHTML += "beepbop <br>"
            
        }

        else
        {
            cow.innerHTML += i+" <br>"
           
        }
    }
}