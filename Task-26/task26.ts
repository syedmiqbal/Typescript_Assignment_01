let alienColorGreen : string = "green";

//  Checking the pass test where alienColor is Green, so a passed test
if (alienColorGreen === 'green') {
    console.log('Because alienColor is green, you just earned 5 points.');
} else { (alienColorGreen !== 'green') 
    console.log('Because alienColor is not green, you just earned 10 points.');
};


// alienColor is set to RED for the failed test to earn 10 points
let alienColorNotGreen : string = "red";

//  Checking the pass test where alienColor is NOT Green, so a failed test
if (alienColorNotGreen === 'green') {
    console.log('Because alienColor is green, you just earned 5 points.');
} else { (alienColorNotGreen !== 'green') 
    console.log('Because alienColor is not green, you just earned 10 points.');
};