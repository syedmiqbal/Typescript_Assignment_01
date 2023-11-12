var guests = ["Kamran Tessori", "Zia Khan", "Danial Nagori", "Hamza Syed", "Okasha Tanoli"];
var maxGuests = 2;
var invitation = "You are still invited at the dinner party\nto be held at Sheraton Hotel, Karachi on 12-Nov-2023 @ 9:00 PM";
console.log("\n------------- IMPORTANT ANNOUNCEMENT TO ALL INVITEES -------------\n");
console.log("Further to our previously planned dinner party,\nplease note that we will now invite only two guests to the party.\nWe will send separate notifications to our respected friends\n");
console.log("\n------------- IMPORTANT ANNOUNCEMENT TO THOSE BEING REMOVED -------------\n");
while (guests.length > maxGuests) {
    var removedGuest = guests.pop();
    var removedIndex = guests.length;
    console.log("\nMr.".concat(removedGuest, ", please accept our sinecere apology\n    as we are unable to invite you at the dinner reception\n    that was previously planned on 12-Nov-2023 due to\n    some unavoidable circumstances"));
}
console.log("\n------------- INVITATIONS TO FINALLY SELECTED GUESTS -------------\n");
guests.forEach(function (guest) { return console.log("\nDear Mr.".concat(guest, ", ").concat(invitation, "\n")); });
