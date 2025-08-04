// Exercise 1: if Statement
let num = -10;
if (num >= 0) {
    console.log("this is positive number");
}

// Exercise 2: if-else Statement
let age = 20;
if (age <= 18) {
    console.log("this is child person");
} else {
    console.log("this is adult person");

}

// Exercise 3: else-if Statement
let numb = 0;
if (numb > 0) {
    console.log("this is positive value");
} else if (numb < 0) {
    console.log("this is nagetive value");
} else {
    console.log("this is zero");
}

// **Exercise 4: `switch` Statement**
let WeekDay = "sunday";
switch (WeekDay) {
    case "sunday":
        console.log("this is sunday");
        break;

    case "monday":
        console.log("this is monday");
        break;
    case "tuesday":
        console.log("this is Tuesday");
        break;
    case "wednesday":
        console.log("this is Wednesday");
        break;
    case "thursday":
        console.log("this is Thursday");
        break;
    case "friday":
        console.log("this is Friday");
        break;
    case "saturday":
        console.log("this is Saturday");
        break;
    default:
        console.log("this is not a weekend");
        break;
}