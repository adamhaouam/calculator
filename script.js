const buttons = document.querySelectorAll("li");
const numPad = document.querySelector(".numPad");
const display = document.querySelector(".numDisplay");

let displayVal = "0";
let newVal = "";
let operating = 0;
let operator = "";
let resultVal = "";


 numPad.addEventListener("click", (e) => { 
     press(e.target.textContent);
 });


addEventListener("keypress", (e) => press(e.key));


function press(val) {
    if (val == "AC") clear();
    else if (val == "DEL" || val.toLowerCase() == "d") backSpace();
    else if (val == "0" ||
        val == "1" ||
        val == "2" ||
        val == "3" ||
        val == "4" ||
        val == "5" ||
        val == "6" ||
        val == "7" ||
        val == "8" ||
        val == "9"
    ) addNum(val);

    else if (val == "x" ||
        val == "-" ||
        val == "+" ||
        val == "÷" ||
        val == "/"
    )  operate(val);

    else if (val == "=" || val == "Enter") execute();
    else if (val == ".") decimal();
    
    
    updateScreen(val);
    
    currentOperation(val);

}


function clear() {
    displayVal = "0";
    newVal = "";
    operator = "";
    operating = 0;
}

function addNum(val) {
    if (operating == 2) {
        clear();
        operating = 0;
    }
    
    if (operating == 0) {
        if (displayVal.length < 11) {
            if (displayVal == "0") {
                displayVal = val;
            }
            else if (displayVal == "-0") {
                displayVal = "-" + val;
            }
            else displayVal += val;
        }
    }
    else {
        if (newVal.length < 11) newVal += val;
    }
      
}

function operate(val) {
    operating = 1;
    operator = val;
}

function execute() {
    if (operator == "+") {
        displayVal = String(Number(displayVal) + Number(newVal));
    }
    else if (operator == "-") {
        displayVal = String(Number(displayVal) - Number(newVal));
    }
    else if (operator == "x") {
        displayVal = String(Number(displayVal) * Number(newVal));
    }
    else if (operator == "÷" || operator == "/") {
        if (newVal == "0") broken();
        else displayVal = String(Number(displayVal) / Number(newVal));
    }
    newVal = "";
    operating = 2;
    operator = "";
    buttons[3].style.backgroundColor = "orange";
    buttons[7].style.backgroundColor = "orange";
    buttons[11].style.backgroundColor = "orange";
    buttons[15].style.backgroundColor = "orange";
}

function broken() {
    displayVal = "YOU BROKE IT WTF";
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    numPad.style.backgroundColor = `rgb(${[r,g,b].join(',')})`;
    buttons.forEach(button => {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        button.style.backgroundColor = `rgb(${[r,g,b].join(',')})`;
    })
}

function decimal() {
    if (operating == 0) {
        if (!displayVal.includes(".")) displayVal += ".";
    }
    else if (operating == 1) {
        if (!newVal.includes(".")) newVal += ".";
    }
}

function screenLimit() { //Ensures result fits on screen
    if (displayVal.length > 11 && displayVal != "YOU BROKE IT WTF") {
        if (Number(displayVal > 999999999)) { //If too high a number to fit without scientific notation
            displayVal = "99999999999";
        }

        else {

            let splitDec = displayVal.split("");
            let rounder = Number(splitDec[10]); //Number to be rounded up or down

            if (Number(splitDec[11]) >= 5) { //Round up!
                splitDec.splice(10, displayVal.length, rounder + 1);
            }
            else { //Round down!
                splitDec.splice(10, displayVal.length, rounder);
            }
            
            displayVal = splitDec.join("");            
        }
    } 
}


function updateScreen(val) {
    if (operating == 1 && ( //Highlight selected operator
    val == "x" ||
    val == "-" ||
    val == "+" ||
    val == "÷")) {
        currentOperation(val);
        
    }

    if (val == "-" && displayVal == "0") {
        operating = 0;
        displayVal = "-" + displayVal;
    }


    

    screenLimit();  
    if (operating == 1 && newVal != "") display.textContent = newVal; //Display correct variable
    else display.textContent = displayVal;
}


function currentOperation(val) {
    buttons[3].style.backgroundColor = "orange";
    buttons[7].style.backgroundColor = "orange";
    buttons[11].style.backgroundColor = "orange";
    buttons[15].style.backgroundColor = "orange";
    if (val == "÷") {
        buttons[3].style.backgroundColor = "peru";
    }
    else if (val == "x") {
        buttons[7].style.backgroundColor = "peru";
    }
    else if (val == "-") {
        buttons[11].style.backgroundColor = "peru";
    }
    else if (val == "+") {
        buttons[15].style.backgroundColor = "peru";
    }
}



function backSpace() {
    console.log("deleted!");
    if (operating == 0) {
        if (displayVal != "0") {
            displayVal = displayVal.split("").slice(0, displayVal.length-1).join("");
        } 
    }
    else if (operating == 1) {
        newVal = newVal.split("").slice(0, newVal.length-1).join("");
    }
}


