const display = document.querySelector('input');
const buttons = document.querySelectorAll('button');
const specialChars = ['+', '-', '*', '/', '=', '%'];
let output = '';

const calculate = (btnValue) => {
    if (btnValue === "=" && output !== ""){
        output = eval(output.replace("%", "/100"));
    } else if (btnValue === "AC") {
        output = '';
    } else if (btnValue === "DEL") {
        output = output.toString().slice(0, -1);
    } else {
        if (specialChars.includes(btnValue) && output === '') {
        return; // Prevent starting with an operator
        }
        output += btnValue;
    }
    display.value = output;
}
// Add event listener to buttons, call calculate()
buttons.forEach((button) => {
    button.addEventListener('click', (e) => calculate(e.target.dataset.value));
});