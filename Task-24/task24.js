var language = "Python";
console.log("Is language == Python", "I predict True");
console.log(language == "Python");
var lang = "Java";
console.log("Is lang !== Java", "I predict True");
console.log(lang !== "java");
var myNumber = 18 / 2;
console.log("Is myNumber 18/2 == 9, I predict True");
console.log(myNumber == 9);
var sname = "Adil";
console.log("Is sname == sname.toLowerCase()");
console.log(sname == sname.toLowerCase());
var school = "Beaconhouse";
console.log("Is school == school.toUpperCase()");
console.log(school == school.toUpperCase());
var lessThanOrEqualTo = ('ba' <= 'bg');
console.log("Is lessThanOrEqualTo ('ba' <= 'bg'), I predict True");
console.log(lessThanOrEqualTo);
var checkGreater = 7 > 5;
console.log("Is checkGreater 7>5, I predict true");
console.log(checkGreater);
var checkLessThan = 9 < 3;
console.log("Is checkLessThan 9<3, I predict false");
console.log(checkLessThan);
var checkGreaterThanOrEqualTo = 7 >= 7;
console.log("Is checkGreaterOrEqualTo 7>=7, I predict true");
console.log(checkGreaterThanOrEqualTo);
var checkLessThanorEqualTo = 8 <= 6;
console.log("Is checkLessThan 8<=6, I predict false");
console.log(checkLessThanorEqualTo);
// Using "and" operator (&&)
// Check if the person a student and younger than 30?");
var age = 25;
var isStudent = false;
console.log("isStudent && age < 30, I predict false because both conditions are not met");
console.log(isStudent && age < 30);
// Using "or" operator (||)
// Is the person either a student or younger than 30?"
console.log("isStudent || age < 30, I predict true because one of these two conditions is met");
console.log(isStudent || age < 30); // If either condition is true, the result is true
var fruits = ["banana", "apple", "orange", "papaya"];
console.log("Check if apple is in the list of fruits, I predict true");
var filteredFruits1 = fruits.filter(function (fruit) { return fruit === "apple"; });
console.log(filteredFruits1.length > 0);
console.log("Check if grapefruit is in the list of fruits, I predict false");
var filteredFruits2 = fruits.filter(function (fruit) { return fruit === "grapefruit"; });
console.log(filteredFruits2.length > 0);
