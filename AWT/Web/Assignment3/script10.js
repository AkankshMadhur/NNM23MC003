function sumOfThree(a, b, c) {
    return a + b + c;
}

let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));
let num3 = parseFloat(prompt("Enter the third number:"));

let sum = sumOfThree(num1, num2, num3);
document.write("The sum of the three numbers is: " + sum + "<br>");
