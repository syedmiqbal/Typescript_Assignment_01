const fruits : string[] = ["apple", "banana", "orange"];
let checkFruit : string = "banana";

if (fruits.indexOf(checkFruit) !== -1) {
  console.log(`${checkFruit} is in fruits list.`);
} else {
  console.log(`${checkFruit} is not in fruits list.`);
}

checkFruit = "grapes";

if (fruits.indexOf(checkFruit) !== -1) {
  console.log(`${checkFruit} is in fruits list.`);
} else {
  console.log(`${checkFruit} is not in fruits list.`);
}

checkFruit = "strawberry";

if (fruits.indexOf(checkFruit) !== -1) {
  console.log(`${checkFruit} is in fruits list.`);
} else {
  console.log(`${checkFruit} is not in fruits list.`);
}

checkFruit = "apple";

if (fruits.indexOf(checkFruit) !== -1) {
  console.log(`${checkFruit} is in fruits list.`);
} else {
  console.log(`${checkFruit} is not in fruits list.`);
}

checkFruit = "orange";

if (fruits.indexOf(checkFruit) !== -1) {
  console.log(`${checkFruit} is in fruits list.`);
} else {
  console.log(`${checkFruit} is not in fruits list.`);
}
