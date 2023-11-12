const guests : string[] = ["Kamran Tessori", "Zia Khan", "Danial Nagori", "Hamza Syed", "Okasha Tanoli"];
//const invitation : string =   `You are cordially invited at the dinner party
//to be held at Sheraton Hotel, Karachi on 12-Nov-2023 @ 9:00 PM`

console.log("\nOur valued guests for the party are:-\n");
guests.forEach((friend) => console.log(`(${guests.indexOf(friend)+1}) Mr.${friend}\n`));

console.log(`\nTotal guests invited to the part are ${guests.length} in total.`);
