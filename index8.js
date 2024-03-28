// 8. Write a program that takes input a number from user & state whether
// the number is positive, negative or zero.


var number = prompt("Enter a number:");
number = +number;
if (number > 0) {
    alert("The number is positive.");
} else if (number < 0) {
    alert("The number is negative.");
} else if (number === 0) {
    alert("The number is zero.");
} else {
    alert("Invalid input. Please enter a valid number.");
}


