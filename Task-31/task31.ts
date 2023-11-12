let ourUsers: string[] = ['Kashif', 'Zamin', 'Majeed', 'Wazir', 'Hisham'];
let checkUsers : boolean = !ourUsers.length

if (checkUsers) {
    console.log('We need to find some users');
} else {
    console.log("\nWe have following users on our network!\n");
    ourUsers.forEach((user) => console.log(user));
}

console.log("\nWe are removing all users from this array");
console.log("Deleting users...");
ourUsers = []
console.log("\nLength of this array: " + ourUsers.length);
console.log("\nAll users removed from the array\n");



