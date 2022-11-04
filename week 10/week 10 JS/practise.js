let c = document.getElementById("container");

let awkwardSilence = [
    "The answer is obvious",
    "I don't care", 
    "...",
    "I'm trying to take notes" ];



let collect  = awkwardSilence.filter( 
     (thought) => thought.toLowerCase().includes("-") 
    );

console.log(collect);

if(collect.length > 0)
{
    c.innerHTML = "Test Failed!";
}
//map
    //modifies elements


//reduce
    //returns a single number


//foreach
    //loops through all the elements


//where aka filter
    //returns a sub-array









    // let tally = 0;
    let passed = true; //called a flag
    // for(let i = 0; i <awkwardSilence.length; i++)
    // {
    //     let thought = awkwardSilence[i];
    //     console.log(i);
    //    if(thought.toLowerCase().includes("i"))
    //    {
    //       passed = false;
    //      break;
    //    }     
    // }
    // console.log(passed);

    // if(!passed)
    // {
    //     c.innerHTML = "test failed!";
    // }
    // else
    // {
    //     c.innerHTML = "test failed!";
    // }

