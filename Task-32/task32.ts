const currentUsers: string[] = ['Kashif', 'Zahir', 'Majeed', 'Wazir', 'Hisham'];
const newUsers: string[] = ['Haisam', 'Iqbal', 'Majeed', 'Kamil', 'Azeem'];

// Function to check if a username is already in use
function isUsernameTaken(username: string): boolean {
    return currentUsers.some((user) => user.toLowerCase() === username.toLowerCase());
}

// Using Loop to check names in the new_users list if they already exisit in current users list
newUsers.forEach((newUser) => {
    if (isUsernameTaken(newUser)) {
        console.log(`Username '${newUser}' is not available. Please choose a different one.`);
    } else {
        console.log(`Username '${newUser}' is available.`);
    }
});