// Function to store information about a car
function carInfo(manufacturer, modelName) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        modelName: modelName,
    };
    options.forEach(function (option) {
        var key = Object.keys(option)[0];
        var value = option[key];
        car[key] = value;
    });
    return car;
}
// Example function call
//const myCar = carInfo("Toyota", "Camry", color: "Blue", year: 2022, features: ["Navigation", "Sunroof"]);
var myCar = carInfo("Toyota", "Camry", { color: "Blue", year: 2022, features: ["Navigation", "Sunroof"] });
// Print the car information
console.log(myCar);
