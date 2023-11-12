let pkPlacesToVisit = ["Skurdu", "Muree", "Neelam Valley", "Kaghan", "Balakot"];

// Original order
console.log("\nOriginal order of my array:-", pkPlacesToVisit);

// Alphabetical order without modifying the actual list
console.log("\nAlphabetical order with original intact:-", [...pkPlacesToVisit].sort());

// Still original order
console.log("\nOriginal order of my array:-",pkPlacesToVisit);

// Reverse alphabetical order of the array without changing original array
console.log("\nReverse alphabetical order with original intact:-",[...pkPlacesToVisit].sort().reverse());

// Still original order
console.log("\nOriginal order of my array:-",pkPlacesToVisit);

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
pkPlacesToVisit.sort((a, b) => b.localeCompare(a));
console.log("\nSorted in reverse alphabetical order:-", pkPlacesToVisit);
