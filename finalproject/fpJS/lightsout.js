let div = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ]
    
    let colors = [
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ["", "", "", "", ""],
    ]
    
    
    let h1 = document.getElementById("h1");
    
    let y = 0;
    let x = 0;
    
    let counter = 0;
    
    for (let i = 0; i < 25; i++) {
    let randy = Math.floor(Math.random() * 25);
    let color;
    if (randy >= 0 && randy <= 18) {
    color = "grey"
    } else if (randy > 18) {
    color = "white";
    }
    
    if (x === 5) {
    x = 0
    y++;
    }
    
    div[y][x] = document.getElementById("div" + i.toString())
    
    div[y][x].setAttribute("data-color", color)
    colors[y][x] = div[y][x].getAttribute("data-color")
    
    div[y][x].style.backgroundColor = colors[y][x]
    x++;
    }
    
    let y1;
    let x1;
    
    function play(event) {
    y1 = parseInt(event.target.getAttribute("data-y"));
    x1 = parseInt(event.target.getAttribute("data-x"));
    
    changeColor(y1, x1);
    }
    
    function changeColor(y, x) {
    //in middle
    if (y > 0 && x > 0 && y < 4 && x < 4) {
    if (colors[y][x] === "white") {
    colors[y][x] = "grey"
    checkUp(y - 1, x);
    checkDown(y + 1, x);
    checkRight(y, x + 1);
    checkLeft(y, x - 1);
    div[y][x].setAttribute("data-color", colors[y][x])
    div[y][x].style.backgroundColor = colors[y][x]
    } else if (colors[y][x] === "grey") {
    colors[y][x] = "white"
    checkUp(y - 1, x);
    checkDown(y + 1, x);
    checkRight(y, x + 1);
    checkLeft(y, x - 1);
    div[y][x].setAttribute("data-color", colors[y][x])
    div[y][x].style.backgroundColor = colors[y][x]
    }
    }
    
    // in firsl line (y = 0)
    else if (y === 0 && x === 0) {
    if (colors[y][x] === "white") {
    colors[y][x] = "grey"
    checkDown(y + 1, x);
    checkRight(y, x + 1);
    div[y][x].setAttribute("data-color", colors[y][x])
    div[y][x].style.backgroundColor = colors[y][x]
    } else if (colors[y][x] === "grey") {
    colors[y][x] = "white"
    checkDown(y + 1, x);
    checkRight(y, x + 1);
    div[y][x].setAttribute("data-color", colors[y][x])
    div[y][x].style.backgroundColor = colors[y][x]
    }
    } else if (y === 0 && x > 0 && x <= 3) {
    if (colors[y][x] === "white") {
    colors[y][x] = "grey"
    checkDown(y + 1, x);
    checkRight(y, x + 1);
    checkLeft(y, x - 1);
    div[y][x].setAttribute("data-color", colors[y][x])
    div[y][x].style.backgroundColor = colors[y][x]
    } else if (colors[y][x] === "grey") {
    colors[y][x] = "white"
    checkDown(y + 1, x);
    checkRight(y, x + 1);
    checkLeft(y, x - 1);
    div[y][x].setAttribute("data-color", colors[y][x])
    div[y][x].style.backgroundColor = colors[y][x]
    }
    } else if (y === 0 && x === 4) {
    if (colors[y][x] === "white") {
    colors[y][x] = "grey"
    checkDown(y + 1, x);
    checkLeft(y, x - 1);
    div[y][x].setAttribute("data-color", colors[y][x])
    div[y][x].style.backgroundColor = colors[y][x]
    } else if (colors[y][x] === "grey") {
    colors[y][x] = "white"
    checkDown(y + 1, x);
    checkLeft(y, x - 1);
    div[y][x].setAttribute("data-color", colors[y][x])
    div[y][x].style.backgroundColor = colors[y][x]
    }
    }
    
    // in firsl lane (x = 0)
    else if (x === 0 && y > 0 && y <= 3) {
    if (colors[y][x] === "white") {
    colors[y][x] = "grey"
    checkUp(y - 1, x);
    checkDown(y + 1, x);
    checkRight(y, x + 1);
    div[y][x].setAttribute("data-color", colors[y][x])
    div[y][x].style.backgroundColor = colors[y][x]
    } else if (colors[y][x] === "grey") {
    colors[y][x] = "white"
    checkUp(y - 1, x);
    checkDown(y + 1, x);
    checkRight(y, x + 1);
    div[y][x].setAttribute("data-color", colors[y][x])
    div[y][x].style.backgroundColor = colors[y][x]
    }
    } else if (x === 0 && y === 4) {
    if (colors[y][x] === "white") {
    colors[y][x] = "grey"
    checkUp(y - 1, x);
    checkRight(y, x + 1);
    div[y][x].setAttribute("data-color", colors[y][x])
    div[y][x].style.backgroundColor = colors[y][x]
    } else if (colors[y][x] === "grey") {
    colors[y][x] = "white"
    checkUp(y - 1, x);
    checkRight(y, x + 1);
    div[y][x].setAttribute("data-color", colors[y][x])
    div[y][x].style.backgroundColor = colors[y][x]
    }
    }
    
    // in lasrt lane (x = 4)
    else if (x === 4 && y > 0 && y <= 3) {
    if (colors[y][x] === "white") {
    colors[y][x] = "grey"
    checkUp(y - 1, x);
    checkDown(y + 1, x);
    checkLeft(y, x - 1);
    div[y][x].setAttribute("data-color", colors[y][x])
    div[y][x].style.backgroundColor = colors[y][x]
    } else if (colors[y][x] === "grey") {
    colors[y][x] = "white"
    checkUp(y - 1, x);
    checkDown(y + 1, x);
    checkLeft(y, x - 1);
    div[y][x].setAttribute("data-color", colors[y][x])
    div[y][x].style.backgroundColor = colors[y][x]
    }
    } else if (x === 4 && y === 4) {
    if (colors[y][x] === "white") {
    colors[y][x] = "grey"
    checkUp(y - 1, x);
    checkLeft(y, x - 1);
    div[y][x].setAttribute("data-color", colors[y][x])
    div[y][x].style.backgroundColor = colors[y][x]
    } else if (colors[y][x] === "grey") {
    colors[y][x] = "white"
    checkUp(y - 1, x);
    checkLeft(y, x - 1);
    div[y][x].setAttribute("data-color", colors[y][x])
    div[y][x].style.backgroundColor = colors[y][x]
    }
    }
    
    // in lasrt line (y = 4)
    else if (y === 4 && x > 0 && x <= 3) {
    if (colors[y][x] === "white") {
    colors[y][x] = "grey"
    checkUp(y - 1, x);
    checkRight(y, x + 1);
    checkLeft(y, x - 1);
    div[y][x].setAttribute("data-color", colors[y][x])
    div[y][x].style.backgroundColor = colors[y][x]
    } else if (colors[y][x] === "grey") {
    colors[y][x] = "white"
    checkUp(y - 1, x);
    checkRight(y, x + 1);
    checkLeft(y, x - 1);
    div[y][x].setAttribute("data-color", colors[y][x])
    div[y][x].style.backgroundColor = colors[y][x]
    }
    }
    }
    
    
    function checkUp(y, x) {
    if (colors[y][x] === "white") {
    colors[y][x] = "grey"
    div[y][x].setAttribute("data-color", colors[y][x])
    div[y][x].style.backgroundColor = colors[y][x]
    } else if (colors[y][x] === "grey") {
    colors[y][x] = "white"
    div[y][x].setAttribute("data-color", colors[y][x])
    div[y][x].style.backgroundColor = colors[y][x]
    }
    }
    
    function checkDown(y, x) {
    if (colors[y][x] === "white") {
    colors[y][x] = "grey"
    div[y][x].setAttribute("data-color", colors[y][x])
    div[y][x].style.backgroundColor = colors[y][x]
    } else if (colors[y][x] === "grey") {
    colors[y][x] = "white"
    div[y][x].setAttribute("data-color", colors[y][x])
    div[y][x].style.backgroundColor = colors[y][x]
    }
    }
    
    function checkLeft(y, x) {
    if (colors[y][x] === "white") {
    colors[y][x] = "grey"
    div[y][x].setAttribute("data-color", colors[y][x])
    div[y][x].style.backgroundColor = colors[y][x]
    } else if (colors[y][x] === "grey") {
    colors[y][x] = "white"
    div[y][x].setAttribute("data-color", colors[y][x])
    div[y][x].style.backgroundColor = colors[y][x]
    }
    }
    
    function checkRight(y, x) {
    if (colors[y][x] === "white") {
    colors[y][x] = "grey"
    div[y][x].setAttribute("data-color", colors[y][x])
    div[y][x].style.backgroundColor = colors[y][x]
    } else if (colors[y][x] === "grey") {
    colors[y][x] = "white"
    div[y][x].setAttribute("data-color", colors[y][x])
    div[y][x].style.backgroundColor = colors[y][x]
    }
    
    counter = 0;
    x = 0
    y = 0
    
    for(let i = 0; i < div.length; i++) {
    for(let k = 0; k < div[i].length; k++){
    if (colors[i][k] === "grey") {
    counter++;
    } else if (colors[i][k] === "white") {
    counter = 0;
    }
    
    x++;
    }
    }
    if (counter > 24) {
    h1.innerHTML = "You Won!!!";
    } else if (counter < 25) {
    h1.innerHTML = "";
    }
    }