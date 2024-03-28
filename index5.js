// 5. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable. Prompt
// user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show “Close
// enough to the correct answer”.

var secretNumber = Math.floor(Math.random() * 10) + 1;

var guess = (prompt("Guess the secret number (between 1 and 10):"));

if (guess === secretNumber) {
    alert("Bingo! Correct answer");
} else if (guess + 1 === secretNumber || guess - 1 === secretNumber) {
    alert("Close enough to the correct answer");
} else {
    alert("Sorry, wrong guess. The correct answer was " + secretNumber);
}
