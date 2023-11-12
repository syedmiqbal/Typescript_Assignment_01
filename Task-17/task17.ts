let guests: string[] = ["Kamran Tessori", "Zia Khan", "Danial Nagori", "Hamza Syed", "Okasha Tanoli"];
const maxGuests : number = 2;


const invitation: string = `You are still invited at the dinner party
to be held at Sheraton Hotel, Karachi on 12-Nov-2023 @ 9:00 PM`;

console.log("\n------------- IMPORTANT ANNOUNCEMENT TO ALL INVITEES -------------\n");
console.log(`Further to our previously planned dinner party,
please note that we will now invite only two guests to the party.
We will send separate notifications to our respected friends\n`);

console.log("\n------------- IMPORTANT ANNOUNCEMENT TO THOSE BEING REMOVED -------------\n");

while (guests.length > maxGuests) {
    const removedGuest = guests.pop();
    const removedIndex = guests.length;
    console.log(`\nMr.${removedGuest}, please accept our sinecere apology
    as we are unable to invite you at the dinner reception
    that was previously planned on 12-Nov-2023 due to
    some unavoidable circumstances`);
}

console.log("\n------------- INVITATIONS TO FINALLY SELECTED GUESTS -------------\n");

guests.forEach((guest) => console.log(`\nDear Mr.${guest}, ${invitation}\n`));

