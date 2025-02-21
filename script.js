const buttons = document.querySelectorAll("li");


buttons.forEach((button) => {
    button.addEventListener("click", (e) => { 
        press(e.target);
    })
});


function press(target) {
    console.log(target.textContent);
}