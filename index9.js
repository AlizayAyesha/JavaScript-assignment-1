// 9. Write a program that takes a character (i.e. string of length 1) and
// returns true if it is a vowel, false otherwise

var character = prompt("Enter a character (a single letter):");

character = character.toLowerCase();

var isVowel = false;
if (character.length === 1) {
    isVowel = ['a', 'e', 'i', 'o', 'u'].includes(character);
}

if (isVowel) {
    alert("'" + character + "' is a vowel.");
} else {
    alert("'" + character + "' is not a vowel.");
}
