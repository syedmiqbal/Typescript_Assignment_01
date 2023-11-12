var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var pkPlacesToVisit = ["Skurdu", "Muree", "Neelam Valley", "Kaghan", "Balakot"];
// Original order
console.log("\nOriginal order of my array:-", pkPlacesToVisit);
// Alphabetical order without modifying the actual list
console.log("\nAlphabetical order with original intact:-", __spreadArray([], pkPlacesToVisit, true).sort());
// Still original order
console.log("\nOriginal order of my array:-", pkPlacesToVisit);
// Reverse alphabetical order of the array without changing original array
console.log("\nReverse alphabetical order with original intact:-", __spreadArray([], pkPlacesToVisit, true).sort().reverse());
// Still original order
console.log("\nOriginal order of my array:-", pkPlacesToVisit);
// Reverse the order of the list
pkPlacesToVisit.reverse();
console.log("\nReversed order:-", pkPlacesToVisit);
// Reverse the order of the list again
pkPlacesToVisit.reverse();
console.log("\nChanging to original order:-", pkPlacesToVisit);
// Sort the array in alphabetical order
pkPlacesToVisit.sort();
console.log("\nSorted in alphabetical order:-", pkPlacesToVisit);
// Sort the array in reverse alphabetical order
pkPlacesToVisit.sort(function (a, b) { return b.localeCompare(a); });
console.log("\nSorted in reverse alphabetical order:-", pkPlacesToVisit);
