// Using the forEach method of arrays, I am sending a birthday
// party reminder to each of my 3 friends in an array variable 
// named friends
var friends = ["Faiq", "Laiq", "Shaiq"];
var msg = "Don't forget to attend my birthday party on 12-Nov-2023";
friends.forEach(function (friend) { return console.log("Hello!, Dear ".concat(friend, ", ").concat(msg)); });
