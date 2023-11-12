var guests = ["Kamran Tessori", "Zia Khan", "Danial Nagori"];
var invitation = "You are cordially invited at the dinner party\nto be held at Sheraton Hotel, Karachi on 12-Nov-2023 @ 9:00 PM";
guests.forEach(function (friend) { return console.log("Dear Mr.".concat(friend, ", ").concat(invitation, "\n")); });
