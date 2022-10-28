//button
//div displays results
//function needs a prompt and to do a calculation on tip 
//im going with 10% as a tip
//baristas have book buying addictions to feed too
//and im a god tier barista

let tip = document.getElementById("tip");
let total = document.getElementById("total");
let mocha = 0; //a
let espresso = 0; //b 

barista();
function
barista()
{
    let latte = prompt("Input bill: ", "");

    latte = parseInt(latte);
    if(latte != null) //a
    {
        mocha = latte * .1; //b

        espresso = mocha + latte; //c

        tip.innerHTML = "tip: $" + mocha; // print b
        total.innerHTML = "total: $" + espresso; // print c
    }

    // let a = 20;
    // let b = 0;
    // let c = 0;

    // b = a * .1;
    // console.log(b);

    // c = a + b;
    // console.log(c);
}