function make_shirt(size:string = "Large",message: string="I love TypeScript.") {
    return `The size of this shirt is "${size}" and it has "${message}" printed on it.`
}

console.log(make_shirt());
console.log(make_shirt("Medium"));
console.log(make_shirt("Small","The heat is on!"));
console.log(make_shirt(undefined, "The heat is on!"));
