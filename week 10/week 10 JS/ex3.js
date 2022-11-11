// Given the array

 let objects = [
  { color: "#FF0000", height: 100, width: 300 },
  { color: "#FFFF00", height: 200, width: 200 },
  { color: "#ff0000", height: 300, width: 100 },
 ];
let h = document.getElementById("holder");
// Write a loop that creates three divs based on the data in the array. 
// You should only have one document.createElement in your code.
starbies();

function
starbies()
{
    for(let i = 0; i < objects.length; i++)
    {
        
    let b   = document.createElement("div");
        b.innerHTML = objects[i];
        console.log(objects[i]);
       b.append(h);
    }
}