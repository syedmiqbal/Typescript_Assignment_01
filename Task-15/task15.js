var guests = ["Kamran Tessori", "Zia Khan", "Danial Nagori"];
var guestNotComing = guests.filter(function (guest) { return guest === "Danial Nagori"; });
guests = guests.map(function (element) { return (element === "Danial Nagori" ? "Hamza Syed" : element); });
var invitation = "You are cordially invited at the dinner party\nto be held at Sheraton Hotel, Karachi on 12-Nov-2023 @ 9:00 PM";
guests.forEach(function (guest) { return console.log("Dear Mr.".concat(guest, ", ").concat(invitation, "\n")); });
console.log("\n------------- IMPORTANT ANNOUNCEMENT -------------\n");
console.log("Due to some other engagements, Mr.".concat(guestNotComing[0], " is not coming to the party.\n\n"));
