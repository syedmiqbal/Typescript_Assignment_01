function make_shirt(size:string,message: string) {
    return `The size of this shirt is <<${size}>> and it has "${message}" printed on it.`
}

console.log(make_shirt("Medium","I love Pakistan"));
console.log(make_shirt("28","I love Karachi"));