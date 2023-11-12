var currentUsers = ['Kashif', 'Zahir', 'Majeed', 'Wazir', 'Hisham'];
var newUsers = ['Haisam', 'Iqbal', 'Majeed', 'Kamil', 'Azeem'];
// Function to check if a username is already in use
function isUsernameTaken(username) {
    return currentUsers.some(function (user) { return user.toLowerCase() === username.toLowerCase(); });
}
// Using Loop to check names in the new_users list if they already exisit in current users list
newUsers.forEach(function (newUser) {
    if (isUsernameTaken(newUser)) {
        console.log("Username '".concat(newUser, "' is not available. Please choose a different one."));
    }
    else {
        console.log("Username '".concat(newUser, "' is available."));
    }
});
