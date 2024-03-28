// 6. Write a program that checks whether the given input is an even
// number or an odd number.**

var input = prompt("Enter a number:");

var number = +input;

if (!isNaN(number)) {
    
    if (number % 2 === 0) {
        alert(number + " is an even number.");
    } else {
        alert(number + " is an odd number.");
    }
} else {
    alert("Invalid input. Please enter a valid number.");
}