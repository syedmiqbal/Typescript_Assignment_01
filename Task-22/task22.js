var languages = ["JavaScript", "Python", "C++", "Go", "Java", "PHP"];
// Mentioning index number that is beyond the length of this array
// Also using the try catch block in order to run the program without crashing
// for some reason my try catch block is not working as desired and only showing 'undefined'
try {
    console.log(languages[10]);
}
catch (error) {
    console.log("This error is called: ".concat(error.name, " \n and it says: ").concat(error.message));
}
// Now console logging with a valid index number of the array
console.log(languages[1]);
