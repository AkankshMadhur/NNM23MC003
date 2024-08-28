let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));
let num3 = parseFloat(prompt("Enter the third number:"));

let largest = num1;
if (num2 > largest) {
    largest = num2;
}
if (num3 > largest) {
    largest = num3;
}

document.write("The largest number is: " + largest + "<br>");
