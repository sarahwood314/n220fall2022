
let kevin = document.getElementById("kevin");
let marv;
let brrr;

let onlight = "#E9D520";
let off = "#03134A";

let box = [[5],[5]];

let randy = Math.round(Math.random() * 1);


for(let i = 0; i < box.length; i++) 
{
    for(let k = 0; k < box[i].length; k++)
    {
        box[i][k] =  marv;
        marv = document.createElement('div');

        //line breaks for square playing field
        box[i+1] = brrr;
        brrr = document.createElement('br');

        // marv.style.width = 200 + 'px';
        // marv.style.height = 200 + 'px';
        // marv.style.color = off;
        
        // marv.innerHTML = " ";
        // kevin.appendChild(marv);
        // marv.addEventListener("click", electricBill);
    }
}
marv.style.width = 200 + 'px';
marv.style.height = 200 + 'px';
marv.style.color = off;

marv.innerHTML = " ";
kevin.appendChild(marv);
marv.appendChild(brrr);
marv.addEventListener("click", electricBill);


function
electricBill(event){
    //needs randy to set the playing field
    let loc = event.target.dataset.location;
    for(a = 0; a < box.length; a++)
    {
        for(b = 0; b < box[a].length; b++)
        {
            box[a][b] = randy;

            if(randy === 1)
            {
                marv.style.color = onlight;
            }
            else if(randy === 0)
            {
                marv.style.color = off;
            }
        }
    }



}

lightSwitch(event){

}