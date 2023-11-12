let guests: string[] = ["Kamran Tessori", "Zia Khan", "Danial Nagori"];

// let guestNotComing = guests.filter((guest) => guest === "Danial Nagori");
// guests = guests.map((element) => (element === "Danial Nagori" ? "Hamza Syed" : element));

guests.unshift("Okasha Tanoli")
guests.splice(2,0,"Imran Ahmed")
guests.push("Jameel Ahsan")

const invitation: string = `You are cordially invited at the dinner party
to be held at Sheraton Hotel, Karachi on 12-Nov-2023 @ 9:00 PM`;

guests.forEach((guest) => console.log(`Dear Mr.${guest}, ${invitation}\n`));

console.log("\n------------- IMPORTANT ANNOUNCEMENT -------------\n");

console.log(`Please note that we have booked a larger table in anticipation that 
our valued guests will show maximum turnaround on this auspicious gathering.

We therefore request you to grace this occasion by attending this dinner party & oblige.

Thanks
PIAIC Administration\n\n`);
