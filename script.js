const buttons = document.querySelectorAll("li");
const numPad = document.querySelector(".numPad");
const display = document.querySelector(".numDisplay");

let displayVal = "0";
let newVal = "";
let operating = 0;
let operator = "";
let resultVal = "";


 numPad.addEventListener("click", (e) => { 
     press(e.target);
 });

function press(target) {
    

    const val = target.textContent;
    if (val == "AC") clear();
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
        val == "÷"
    )  operate(val);

    else if (val == "=") execute();
    else if (val == ".") decimal();
    
    if (operating == 1 && ( //Highlight selected operator
        val == "x" ||
        val == "-" ||
        val == "+" ||
        val == "÷")) {
            buttons[3].style.backgroundColor = "orange";
            buttons[7].style.backgroundColor = "orange";
            buttons[11].style.backgroundColor = "orange";
            buttons[15].style.backgroundColor = "orange";
            target.style.backgroundColor = "peru";
        }

    if (val == "-" && displayVal == "0") {
        console.log("we tryin to neg!");
        operating = 0;
        displayVal = "-" + displayVal;
    }

    if (operating == 1 && newVal != "") display.textContent = newVal; //Display correct variable
    else display.textContent = displayVal;
}


function clear() {
    displayVal = "0";
    newVal = "";
    operator = "";
    operating = 0;
    buttons[3].style.backgroundColor = "orange";
    buttons[7].style.backgroundColor = "orange";
    buttons[11].style.backgroundColor = "orange";
    buttons[15].style.backgroundColor = "orange";
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
    else if (operator == "÷") {
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
        console.log("adfsdf");
        if (!newVal.includes(".")) newVal += ".";
    }
}