let language : string = "Python"
console.log("Is language == Python", "I predict True");
console.log(language == "Python");

let lang : string = "Java"
console.log("Is lang !== Java", "I predict True");
console.log(lang !== "java");

let myNumber : number = 18/2;
console.log("Is myNumber 18/2 == 9, I predict True");
console.log(myNumber == 9);


let sname : string = "Adil"
console.log("Is sname == sname.toLowerCase()");
console.log(sname == sname.toLowerCase());

let school : string = "Beaconhouse"
console.log("Is school == school.toUpperCase()");
console.log(school == school.toUpperCase());

let lessThanOrEqualTo : boolean = ('ba' <= 'bg');
console.log("Is lessThanOrEqualTo ('ba' <= 'bg'), I predict True");
console.log(lessThanOrEqualTo);

let checkGreater : boolean = 7>5;
console.log("Is checkGreater 7>5, I predict true");
console.log(checkGreater);

let checkLessThan : boolean = 9<3;
console.log("Is checkLessThan 9<3, I predict false");
console.log(checkLessThan);

let checkGreaterThanOrEqualTo : boolean = 7>=7;
console.log("Is checkGreaterOrEqualTo 7>=7, I predict true");
console.log(checkGreaterThanOrEqualTo);

let checkLessThanorEqualTo : boolean = 8<=6;
console.log("Is checkLessThan 8<=6, I predict false");
console.log(checkLessThanorEqualTo);

// Using "and" operator (&&)
// Check if the person a student and younger than 30?");
let age : number = 25;
let isStudent : boolean = false;
console.log("isStudent && age < 30, I predict false because both conditions are not met");
console.log(isStudent && age < 30);

// Using "or" operator (||)
// Is the person either a student or younger than 30?"
console.log("isStudent || age < 30, I predict true because one of these two conditions is met");
console.log(isStudent || age < 30);  // If either condition is true, the result is true

const fruits : string[] = ["banana","apple", "orange", "papaya"]
console.log("Check if apple is in the list of fruits, I predict true");
const filteredFruits1 = fruits.filter(fruit => fruit === "apple");
console.log(filteredFruits1.length > 0);

console.log("Check if grapefruit is in the list of fruits, I predict false");
const filteredFruits2 = fruits.filter(fruit => fruit === "grapefruit");
console.log(filteredFruits2.length > 0);


 




