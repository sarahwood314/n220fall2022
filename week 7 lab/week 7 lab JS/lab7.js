/*
let num = [1,2,25,21];
let sum = 0;

let edward = document.getElementById("edward");

dracula();

function
dracula()
{
    for(let i = 0; i < num.length ; i++)
    {
        if(num[i] >= 20)
        {
            sum ++;
        } 
    }
    if(sum < 3)
            {
                //console.log(sum);
                //innerhtml == sum;
                edward.innerHTML += sum;
            }

            else 
            {
                //console.log(-1);
                //innerhtml == -1;
                edward.innerHTML += -1;
            }
}
*/

let idk = [
    [22,33,44,55],
    [1,2,3,4],
    [8,2,4,10],
    [22,22,22,22]
];

pie();

function
pie()
{
   for(let i = 0; i < idk.length; i++)
   {
       for(let k = 0; k < idk[i].length; k++)
       {
            console.log(idk[i][k]);
       }
   } 
}