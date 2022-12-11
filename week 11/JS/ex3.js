// double array
// runs through a cycle of prompts
// button
// input
// display correct answer in div

let query = document.getElementById("vroomQ");
let ans = document.getElementById("vroomA");
let m = document.getElementById("mishawaka");
let ad;
let h = document.getElementById("hi");

let indy = [
    ["what is the capital of Indiana?","What is the state birb?","What year did Indiana become a state?"],
    ["Indianapolis","Cardinal","1816"]];



//console.table(indy);
function
iso()
{
    let a = event.target.getAttribute("data-iupui");

    ad = a.toUpperCase();
    for(let i = 0; i <indy.length; i++)
    {
        // for(let j = 0; j <indy[i].length; j++)
        // {
        //     query.innerHTML=indy[0][i];

            // if(ad = indy[1][j].toUpperCase())
            // {
            //     ans.innerHTML = "correct!";
            // }
            // else if(ad != indy[1][j].toUpperCase())
            // {
            //     ans.innerHTML = "incorrect :( the answer is: " + indy[1][j];
            // }
        // }
            query.innerHTML = indy[0][i];

            if(ad === indy[1][i])
            {
                ans.innerHTML = "correct!";
            }
            else if(ad !== indy[1][i])
            {
                ans.innerHTML = "inccorect :( the answer is: " + indy[1][j];
            }
    }
    
}