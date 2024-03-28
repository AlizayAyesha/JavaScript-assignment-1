
// 7. Write a program to create a calculator for +,-,*, / & % using if
// statements. Take the following input:**
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

var firstNumber = parseFloat(prompt("Enter the first number:"));
var secondNumber = parseFloat(prompt("Enter the second number:"));
var operation = prompt("Enter the operation (+, -, *, /, %):");


var result;


if (!isNaN(firstNumber) && !isNaN(secondNumber)) {

    switch (operation) {
        case "+":
            result = firstNumber + secondNumber; break;
        case "-":
            result = firstNumber - secondNumber; break;
        case "*":
            result = firstNumber * secondNumber; break;
        case "/":
            result = secondNumber !== 0 ? firstNumber / secondNumber : "Error: Division by zero"; break;
        case "%":
            result = secondNumber !== 0 ? firstNumber % secondNumber : "Error: Modulus by zero"; break;
        default:
            result = "Error: Invalid operation"; break;
    }
    alert(result);
} else {
    alert("Invalid input. Please enter valid numbers.");
}