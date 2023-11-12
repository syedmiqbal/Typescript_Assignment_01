function showMagicians(magicians: string[]): void {
    magicians.forEach((magician, index) => {
        console.log(`Magician ${index + 1}: ${magician}`);
    });
}

const magicianNames: string[] = ["Ghazi", "Tariq", "Hammad", "Babar"];

showMagicians(magicianNames);
