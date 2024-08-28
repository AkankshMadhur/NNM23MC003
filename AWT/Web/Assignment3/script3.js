let currentDate = new Date();

document.write("Current Date: " + currentDate.toDateString() + "<br>"); 
document.write("Current Time: " + currentDate.toTimeString() + "<br>"); 
document.write("Year: " + currentDate.getFullYear() + "<br>"); 
document.write("Month: " + (currentDate.getMonth() + 1) + "<br>");
document.write("Day of the Week: " + currentDate.getDay() + "<br>"); 
