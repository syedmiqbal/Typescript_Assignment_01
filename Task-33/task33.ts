let nums: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let num of nums) {
    switch (true) {
        case num === 1:
            console.log(`${num}st`);
            break;
        case num === 2:
            console.log(`${num}nd`);
            break;
        case num === 3:
            console.log(`${num}rd`);
            break;
        default:
            console.log(`${num}th`);
            break;
    }
}
