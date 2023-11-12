// Using the forEach method of arrays, I am sending a birthday
// party reminder to each of my 3 friends in an array variable 
// named friends
const friends : string[] = ["Faiq", "Laiq", "Shaiq"];
const msg : string = "Don't forget to attend my birthday party on 12-Nov-2023"
friends.forEach((friend) => console.log(`Hello!, Dear ${friend}, ${msg}`));


