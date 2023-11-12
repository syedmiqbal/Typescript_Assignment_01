// Function to print a summary of the sandwich order
function orderSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Sandwich Order:");
    if (items.length === 0) {
        console.log("No items selected. Please specify items for your sandwich.");
    }
    else {
        console.log("Items:");
        items.forEach(function (item, index) {
            console.log("".concat(index + 1, ". ").concat(item));
        });
    }
    console.log("\n-----------------\n");
}
// Example function calls
orderSandwich("Turkey", "Cheese", "Lettuce", "Tomato");
orderSandwich("Ham", "Swiss Cheese", "Mustard");
orderSandwich("Veggie Patty", "Avocado", "Sprouts", "Hummus");
