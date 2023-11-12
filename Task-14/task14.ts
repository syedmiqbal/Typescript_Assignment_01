const guests : string[] = ["Kamran Tessori", "Zia Khan", "Danial Nagori"];
const invitation : string =   `You are cordially invited at the dinner party
to be held at Sheraton Hotel, Karachi on 12-Nov-2023 @ 9:00 PM`

guests.forEach((friend) => console.log(`Dear Mr.${friend}, ${invitation}\n`));