const buttons = document.querySelectorAll("li");
const display = document.querySelector(".numDisplay");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => { 
        press(e.target);
    })
});


function press(target) {
    console.log(target.textContent);

    if (target.textContent == "AC") clear();
}

function clear() {
    display.textContent = 0;
}