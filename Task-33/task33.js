var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
    var num = nums_1[_i];
    switch (true) {
        case num === 1:
            console.log("".concat(num, "st"));
            break;
        case num === 2:
            console.log("".concat(num, "nd"));
            break;
        case num === 3:
            console.log("".concat(num, "rd"));
            break;
        default:
            console.log("".concat(num, "th"));
            break;
    }
}
