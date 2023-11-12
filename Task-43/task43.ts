// Function to add "the Great" to magician names
function makeGreat(magicians: string[]): string[] {
    return magicians.map((magician) => `the Great ${magician}`);
}

// Function to show magicians
function showMagicians(magicians: string[]): void {
    magicians.forEach((magician, index) => {
        console.log(`Magician ${index + 1}: ${magician}`);
    });
}

// Example array of magician's names
const magicianNames: string[] = ["Ghazi", "Tariq", "Hammad", "Babar"];

// Call makeGreat with a copy of the magician names to create a new array
const greatMagicians = makeGreat([...magicianNames]);

// Call showMagicians to display the original array
console.log("Original Magicians:");
showMagicians(magicianNames);

// Call showMagicians to display the array with "the Great" added to each magician's name
console.log("\nGreat Magicians:");
showMagicians(greatMagicians);
