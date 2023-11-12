// Adding "the Great" to each magician's name
function makeGreat(magicians) {
    return magicians.map(function (magician) { return "The Great ".concat(magician); });
}
// Function to show magicians
function showMagicians(magicians) {
    magicians.forEach(function (magician, index) {
        console.log("Magician ".concat(index + 1, ": ").concat(magician));
    });
}
// Example array of magician's names
var magicianNames = ["Ghazi", "Tariq", "Hammad", "Babar"];
// Call makeGreat to modify the magician names
var greatMagicians = makeGreat(magicianNames);
// Call showMagicians to see the modified list
showMagicians(greatMagicians);
