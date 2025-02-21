//const buttons = document.querySelectorAll("li");
const buttons1 = document.querySelector(".numPad");
const display = document.querySelector(".numDisplay");

let displayVal = "0";

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
    if (val == "0" ||
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


    display.textContent = displayVal;
}


function clear() {
    displayVal = "0";
}

function addNum(val) {
    if (displayVal == "0") {
        displayVal = val;
    }
    else displayVal += val;
}