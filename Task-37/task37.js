function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love TypeScript."; }
    return "The size of this shirt is \"".concat(size, "\" and it has \"").concat(message, "\" printed on it.");
}
console.log(make_shirt());
console.log(make_shirt("Medium"));
console.log(make_shirt("Small", "The heat is on!"));
console.log(make_shirt(undefined, "The heat is on!"));
