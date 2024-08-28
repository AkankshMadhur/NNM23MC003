function variableScope() {
    let localVar = "I am local"; // Local variable
    document.write("Inside function: " + localVar + "<br>");
}

variableScope();
// Trying to access localVar outside its scope will cause an error
// document.write(localVar); // This will throw an error

let globalVar = "I am global"; // Global variable
document.write("Outside function: " + globalVar + "<br>");
