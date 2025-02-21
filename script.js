//const buttons = document.querySelectorAll("li");
const buttons1 = document.querySelector(".numPad");
const display = document.querySelector(".numDisplay");

let displayVal = 0;

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
    console.log(target.textContent);
    if (target.textContent == "AC") clear();


    
}


function clear() {
    display.textContent = 0;
}