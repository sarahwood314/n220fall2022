let res = document.getElementById("result"); //return

let randy = 0;

function
rps(event)
{
    randy = Math.round(Math.random() * 2);

    let a = event.target.getAttribute("data-game");
    a = parseInt(a);
    if(a === 0 && randy === 0){
        res.innerHTML = "Tis a tied game :p ";
    }
    else if(a === 0 && randy === 1) {
        res.innerHTML = "You lose >:p Randy chose paper :D RANDY IS GOD";
    }   
    else if(a === 0 && randy === 2){
        res.innerHTML = "I lost :^( Randy chose scissors plz have mercy on Randy :( ";
    }
    else if(a === 1 && randy === 1){
        res.innerHTML="Tied game for Randy ;p";
    }
    else if(a === 1 && randy === 2){
        res.innerHTML="HAHAHA YOU lOSE >:p Randy chose scissors :] RANDY AM GOD";
    }
    else if(a === 1 && randy === 0){
        res.innerHTML="I lost :[ Randy chose rock plz dont smother randy in paper plz";
    }
    else if(a === 2 && randy === 2){
        res.innerHTML="well this is awkward.... nice weather??? we tied btw ;D";
    }
    else if(a === 2 && randy === 0){
        res.innerHTML="AM GOD :D RANDY WON HAHAHHAA RANDY CHOSE SCISSORS :p";
    }
    else if(a === 2 && randy === 1){
        res.innerHTML="ope. Randy lost. Big rip to Randy :(";
    }
}