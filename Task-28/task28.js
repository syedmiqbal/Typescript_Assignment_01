function checkAge(age) {
    if (age < 2) {
        return 'This person is a baby!';
    }
    else if (age >= 2 && age < 4) {
        return 'This person is a toddler!';
    }
    else if (age >= 4 && age < 13) {
        return 'This person is a kid!';
    }
    else if (age >= 13 && age < 20) {
        return 'This person is a teenager!';
    }
    else if (age >= 20 && age < 65) {
        return 'This person is an adult!';
    }
    else {
        return 'This person is an elder!'; // Handle cases where the color is not 'green', 'yellow', or 'red'
    }
}
console.log("Check 1 year old: ".concat(checkAge(1)));
console.log("Check 1.5 year old: ".concat(checkAge(1.5)));
console.log("Check 2 year old: ".concat(checkAge(2)));
console.log("Check 3.9 year old: ".concat(checkAge(3.9)));
console.log("Check 4 year old: ".concat(checkAge(4)));
console.log("Check 4.7 year old: ".concat(checkAge(4.7)));
console.log("Check 13 year old: ".concat(checkAge(13)));
console.log("Check 19.2 year old: ".concat(checkAge(19.2)));
console.log("Check 20 year old: ".concat(checkAge(20)));
console.log("Check 55 year old: ".concat(checkAge(55)));
console.log("Check 65 year old: ".concat(checkAge(65)));
console.log("Check 85 year old: ".concat(checkAge(85)));
