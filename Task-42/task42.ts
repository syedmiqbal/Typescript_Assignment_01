// Adding "the Great" to each magician's name
function makeGreat(magicians: string[]): string[] {
    return magicians.map((magician) => `The Great ${magician}`);
}

// Function to show magicians
function showMagicians(magicians: string[]): void {
    magicians.forEach((magician, index) => {
        console.log(`Magician ${index + 1}: ${magician}`);
    });
}

// Example array of magician's names
const magicianNames: string[] = ["Ghazi", "Tariq", "Hammad", "Babar"];

// Call makeGreat to modify the magician names
const greatMagicians = makeGreat(magicianNames);

// Call showMagicians to see the modified list
showMagicians(greatMagicians);
