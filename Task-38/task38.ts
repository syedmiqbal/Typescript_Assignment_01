function describe_city(city: string,country: string = "Pakistan") {
    console.log(`${city} is in ${country}`);
    
}

describe_city("Karachi");  // We are only mentioning city here bcz country has a default 
describe_city("Tokyo","Japan");
describe_city("Istanbul", "Turkey");
describe_city("Islamabad")