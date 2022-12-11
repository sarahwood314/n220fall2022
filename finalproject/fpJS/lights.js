//lights out is annoying to beat
// but when one square is clicked the others surrounding it turn off
// 5 x 5 should suffice
// divs 
// label rows???
//then use an 2d array


//displays if the player has completed 
let r = document.getElementById("results");

//on and off colors
let onlight = "#E9D520";
let off = "#03134A";

let selectBox = null;

//Dimensions
let wid = 50;
let hei = 50;

//randy for on and off starting positions
let randy = Math.round(Math.random() * 1);

//to add the clicky thingy to all of the page
// let kevin = document.getElementsByClassName("kevin");
// kevin.addEventListener("click", electricBill); bad idea


function
electricBill(event)
{
    let l = Number(event.target.dataset.l);
    let w = Number(event.target.dataset.w);

    l.style.width = wid;
    w.style.width = hei;

    let box = [l][w];

for(let i = 0; i < box.length; i++)
{
    for(let k = 0; k < box[i].length; k++)
    console.log(box[i][k]);

    if(randy === 1)
    {
        box[i][k] = onlight;
    }
    else
    {
        box[i][k] = off;
    }
}
event.target.style.color = off;

   

}