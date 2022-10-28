let duckELe = document.getElementsByClassName("duck");
console.log(duckEle);

// duckEle.forEach(function(duck) {
//     duck.style.display = "none";
// });

Array.from(duckEle).forEach(function(duck) {
    duck.style.display = "none";

    duck.addEventListener("click", function() {
        duck.style.display = "none";
})

