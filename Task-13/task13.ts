// Using the forEach method of arrays, I am using
// brand names of 3 car manufacturers in an array variable 
// named brands and making 3 different sentences

const brands : string[] = ["Toyota", "BMW", "Mercedes"];
const msg : string = "I would like to own a "
brands.forEach((brand) => console.log(`${msg} ${brand} car`));