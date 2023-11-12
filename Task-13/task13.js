// Using the forEach method of arrays, I am using
// brand names of 3 car manufacturers in an array variable 
// named brands and making 3 different sentences
var brands = ["Toyota", "BMW", "Mercedes"];
var msg = "I would like to own a ";
brands.forEach(function (brand) { return console.log("".concat(msg, " ").concat(brand, " car")); });
