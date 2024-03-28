
// 11. Write a program that take time as input from user in 24 hours clock
// format like: 1900 = 7pm. Implement the following case using if, else &
// else if statements


var time24 = parseInt(prompt("Enter time in 24-hour clock format (e.g., 1900):"));


var hour12, period;

if (time24 >= 0 && time24 <= 2400) {
    if (time24 === 0) {
        hour12 = 12;
        period = 'AM';
    } else if (time24 < 1200) {
        hour12 = Math.floor(time24 / 100);
        period = 'AM';
    } else if (time24 === 1200) {
        hour12 = 12;
        period = 'PM';
    } else {
        hour12 = Math.floor((time24 - 1200) / 100);
        period = 'PM';
    }

    alert("Time in 12-hour clock format: " + hour12 + (time24 % 100 === 0 ? '' : ':' + (time24 % 100)) + ' ' + period);
} else {
    alert("Invalid input. Please enter time in the range 0000 to 2400.");
}




