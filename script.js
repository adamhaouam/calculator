//const buttons = document.querySelectorAll("li");
const buttons1 = document.querySelector(".numPad");
const display = document.querySelector(".numDisplay");

let displayVal = "0";
let newVal = "";
let operating = 0;

//buttons1.addEventListener("click", press(this.target));
 buttons1.addEventListener("click", (e) => { 
     press(e.target);
 });


// buttons.forEach((button) => {
//     button.addEventListener("click", (e) => { 
//         //press(e.target);
//     })
// });


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
    )  operate(target);


    if (operating == 1 && newVal != "") display.textContent = newVal;
    else display.textContent = displayVal;
}


function clear() {
    displayVal = "0";
    newVal = "";
    operating = 0;
}

function addNum(val) {
    if (operating == 0) {
        if (displayVal.length < 11) {
            if (displayVal == "0") {
                displayVal = val;
            }
            else displayVal += val;
        }
    }
    else {
        if (newVal.length < 11) newVal += val;
    }
      
}

function operate(target) {
    operating = 1;
    //target.style.backgroundColor = "red";

    // if (val == "x") console.log("Times!");
    // if (val == "÷") console.log("Divide!");
}