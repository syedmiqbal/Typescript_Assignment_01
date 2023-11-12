let guests: string[] = ["Kamran Tessori", "Zia Khan", "Danial Nagori"];

let guestNotComing = guests.filter((guest) => guest === "Danial Nagori");
guests = guests.map((element) => (element === "Danial Nagori" ? "Hamza Syed" : element));

const invitation: string = `You are cordially invited at the dinner party
to be held at Sheraton Hotel, Karachi on 12-Nov-2023 @ 9:00 PM`;

guests.forEach((guest) => console.log(`Dear Mr.${guest}, ${invitation}\n`));

console.log("\n------------- IMPORTANT ANNOUNCEMENT -------------\n");

console.log(`Due to some other engagements, Mr.${guestNotComing[0]} is not coming to the party.\n\n`);



