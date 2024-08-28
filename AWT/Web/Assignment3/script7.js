let day = new Date().getDay();
let menu;

switch (day) {
    case 0:
        menu = "Sunday: Pizza";
        break;
    case 1:
        menu = "Monday: Pasta";
        break;
    case 2:
        menu = "Tuesday: Tacos";
        break;
    case 3:
        menu = "Wednesday: Burgers";
        break;
    case 4:
        menu = "Thursday: Sushi";
        break;
    case 5:
        menu = "Friday: Steak";
        break;
    case 6:
        menu = "Saturday: Salad";
        break;
}

document.write("<table border='1'><tr><td>" + menu + "</td></tr></table>");
