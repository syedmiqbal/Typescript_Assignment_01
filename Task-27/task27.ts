function alienColor(color: string) {
    if (color === 'green') {
        return 'Because alienColor is green, you just earned 5 points.';
    } else if (color === 'yellow') {
        return 'Because alienColor is yellow, you just earned 10 points.';
    } else if (color === 'red') {
        return 'Because alienColor is red, you just earned 15 points.';
    } else {
        return 'Invalid color'; // Handle cases where the color is not 'green', 'yellow', or 'red'
    }
}

console.log(`Check green: ${alienColor("green")}`);
console.log(`Check yellow: ${alienColor("yellow")}`);
console.log(`Check red: ${alienColor("red")}`);
console.log(`Check an invalid alienColor: ${alienColor("purple")}`);


