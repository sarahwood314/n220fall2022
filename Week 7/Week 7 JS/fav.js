//string array
//five favorite things
//piano, violin, reading, assassins creed, impressionism
//The Witcher is the best book series
//for loop


let favo = ["piano", "violin", "reading", "assassins creed", "impressionism"];

let a = document.getElementById("fi");
let b = document.getElementById("s");
let c = document.getElementById("t");
let d = document.getElementById("fou");
let e = document.getElementById("fif");

let sanity = [a,b,c,d,e];
woo();

function
woo()
{
    for(let i = 0; i < favo.length; i++)
    {
       
            sanity[i].innerHTML += favo[i] + " is one of my favorite things";
        
       
    }
}


