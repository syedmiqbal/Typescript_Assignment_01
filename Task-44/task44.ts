// Function to print a summary of the sandwich order
function orderSandwich(...items: string[]): void {
    console.log("Sandwich Order:");

    if (items.length === 0) {
        console.log("No items selected. Please specify items for your sandwich.");
    } else {
        console.log("Items:");

        items.forEach((item, index) => {
            console.log(`${index + 1}. ${item}`);
        });
    }

    console.log("\n-----------------\n");
}

// Example function calls
orderSandwich("Turkey", "Cheese", "Lettuce", "Tomato");
orderSandwich("Ham", "Swiss Cheese", "Mustard");
orderSandwich("Veggie Patty", "Avocado", "Sprouts", "Hummus");
