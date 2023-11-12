// List of animals
const animals: string[] = ["Dog", "Cat", "Rabbit"];

// Print the names of each animal
console.log("Names of Animals:");
for (let animal of animals) {
    console.log(animal);
}

// Print statements about each animal
console.log("\nStatements about Animals:");
for (let animal of animals) {
    console.log(`A ${animal.toLowerCase()} would make a great pet.`);
}

// Print a common characteristic
console.log("\nCommon Characteristic:");
console.log("Any of these animals would make a great pet!");
