// Function to store information about a car
function carInfo(manufacturer: string, modelName: string, ...options: { [key: string]: any }[]): { manufacturer: string; modelName: string; [key: string]: any } {
    const car: { manufacturer: string; modelName: string; [key: string]: any } = {
        manufacturer: manufacturer,
        modelName: modelName,
    };

    options.forEach(option => {
        const key = Object.keys(option)[0];
        const value = option[key];
        car[key] = value;
    });

    return car;
}

// Example function call
const myCar = carInfo("Toyota", "Camry", { color: "Blue", year: 2022, features: ["Navigation", "Sunroof"] });

// Print the car information
console.log(myCar);
