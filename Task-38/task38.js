function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country));
}
describe_city("Karachi"); // We are only mentioning city here bcz country has a default 
describe_city("Tokyo", "Japan");
describe_city("Istanbul", "Turkey");
describe_city("Islamabad");
