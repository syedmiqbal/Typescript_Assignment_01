var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Function to add "the Great" to magician names
function makeGreat(magicians) {
    return magicians.map(function (magician) { return "the Great ".concat(magician); });
}
// Function to show magicians
function showMagicians(magicians) {
    magicians.forEach(function (magician, index) {
        console.log("Magician ".concat(index + 1, ": ").concat(magician));
    });
}
// Example array of magician's names
var magicianNames = ["Ghazi", "Tariq", "Hammad", "Babar"];
// Call makeGreat with a copy of the magician names to create a new array
var greatMagicians = makeGreat(__spreadArray([], magicianNames, true));
// Call showMagicians to display the original array
console.log("Original Magicians:");
showMagicians(magicianNames);
// Call showMagicians to display the array with "the Great" added to each magician's name
console.log("\nGreat Magicians:");
showMagicians(greatMagicians);
