// Counting the number of characters
// Create a program in JavaScript that 
// prompts for an input string and displays output that shows 
// the input string and the number of characters the string contains.

let input = prompt("Enter any input and we will count its quantity. (q - to quit)");
let length = input.length;

while (input != "q") {
    alert(input + ": " + input.length);
    input = prompt("Enter any input and we will count its quantity.");
}