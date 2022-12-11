let playButtons = document.getElementsByClassName("play");
let blues = document.getElementById("blues");
let timeoutId;
for(let i = 0; i < playButtons.length; i++)
    playButtons[i].addEventListener("click", function(event){
        console.log(event.target.dataset.start);
        let st = Number(event.target.dataset.start);
        blues.currentTime = startTime;
        blues.play();

        clearTimeout(timeoutId);

       timeoutId =  setTimeout(function() {
            blues.pause();
        }, 2000);
    })

   