let arr = [1, 2, 3, 4, 5];

document.write("Original Array: " + arr + "<br>");
arr.push(6);
document.write("After push(6): " + arr + "<br>");
arr.pop();
document.write("After pop(): " + arr + "<br>");
arr.shift();
document.write("After shift(): " + arr + "<br>");
arr.unshift(1);
document.write("After unshift(1): " + arr + "<br>");
arr.unshift(0);
document.write("After unshift(0): " + arr + "<br>");
let slicedArr = arr.slice(1, 4);
document.write("After slice(1, 4): " + slicedArr + "<br>");
