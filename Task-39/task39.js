function city_country(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, ", ").concat(country));
}
city_country("Karachi"); // We are only mentioning city here bcz country has a default 
city_country("Tokyo", "Japan");
city_country("Istanbul", "Turkey");
city_country("Islamabad");
