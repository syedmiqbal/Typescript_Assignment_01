const current_users: string[] = ['Kashif', 'Zahir', 'admin', 'Majeed', 'Wazir', 'Hisham'];
const msgAdmin : string = ", would you like to see a status report?"
const msgUsers : string = ", thank you for logging in again"

current_users.forEach( function (user) {
    if (user === 'admin') {
        console.log(`Dear Admin ${msgAdmin}`);
        
    } else {
        console.log(`Dear ${user} ${msgUsers}`);
    }
});