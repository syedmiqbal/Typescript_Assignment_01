var current_users = ['Kashif', 'Zahir', 'admin', 'Majeed', 'Wazir', 'Hisham'];
var msgAdmin = ", would you like to see a status report?";
var msgUsers = ", thank you for logging in again";
current_users.forEach(function (user) {
    if (user === 'admin') {
        console.log("Dear Admin ".concat(msgAdmin));
    }
    else {
        console.log("Dear ".concat(user, " ").concat(msgUsers));
    }
});
