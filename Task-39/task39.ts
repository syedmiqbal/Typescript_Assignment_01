function city_country(city: string,country: string = "Pakistan") {
    console.log(`${city}, ${country}`);
    
}

city_country("Karachi");  // We are only mentioning city here bcz country has a default 
city_country("Tokyo","Japan");
city_country("Istanbul", "Turkey");
city_country("Islamabad")