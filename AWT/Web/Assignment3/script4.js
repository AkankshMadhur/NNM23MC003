let a = parseFloat(prompt("Enter coefficient a:"));
let b = parseFloat(prompt("Enter coefficient b:"));
let c = parseFloat(prompt("Enter coefficient c:"));

let discriminant = b * b - 4 * a * c;
if (discriminant > 0) {
    let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    document.write("Roots are real and different: " + root1 + " and " + root2 + "<br>");
} else if (discriminant === 0) {
    let root = -b / (2 * a);
    document.write("Roots are real and same: " + root + "<br>");
} else {
    let realPart = -b / (2 * a);
    let imaginaryPart = Math.sqrt(-discriminant) / (2 * a);
    document.write("Roots are complex and different: " + realPart + " ± " + imaginaryPart + "i<br>");
}
