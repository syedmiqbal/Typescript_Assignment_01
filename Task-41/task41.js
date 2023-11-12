function showMagicians(magicians) {
    magicians.forEach(function (magician, index) {
        console.log("Magician ".concat(index + 1, ": ").concat(magician));
    });
}

var magicianNames = ["Ghazi", "Tariq", "Hammad", "Babar"];

showMagicians(magicianNames);
