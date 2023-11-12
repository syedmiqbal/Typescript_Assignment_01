function make_shirt(size, message) {
    return "The size of this shirt is <<".concat(size, ">> and it has \"").concat(message, "\" printed on it.");
}
console.log(make_shirt("Medium", "I love Pakistan"));
