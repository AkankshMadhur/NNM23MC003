let n = parseInt(prompt("Enter a positive integer:"));
let sum = 0;
let i = 1;

// Using while loop
while (i <= n) {
    sum += i;
    i++;
}
document.write("Sum of first " + n + " natural numbers (while loop): " + sum + "<br>");

// Using for loop
sum = 0;
for (i = 1; i <= n; i++) {
    sum += i;
}
document.write("Sum of first " + n + " natural numbers (for loop): " + sum + "<br>");
