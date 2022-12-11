let m = document.getElementById("mC");
let selectedEle = null;

let pageC = ["This is the home page",
            "This is the about page",
            "This is the works page",
            "This is the scream page"
            ];


let navItems = document.getElementsByClassName("navItem");
for(let i = 0; i < navItems.length; i++){
    let navItem = navItems[i];
    console.log(navItem);
    navItem.addEventListener("click", doThing);
}

function
doThing(event)
{
    //event.target is alwaus the thing that was clicked on.
   
    event.target.style.color = "#00FF00";
   //let c =  event.target.dataset.content;
   let pageId = Number(event.target.dataset.content);
    m.innerText = pageC[pageId];

    if(selectedEle){
        selectedEle.style.color = "#000"
    }
    selectedEle = event.target;
}