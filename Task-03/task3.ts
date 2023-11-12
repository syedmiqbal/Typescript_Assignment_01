const pName = "syed MUHAMMAD iqbal";
const newName = pName.split(" ").map((l: string) => l[0].toUpperCase() + l.substring(1)).join(" ");
console.log(pName.toLowerCase());
console.log(pName.toUpperCase());
console.log(newName);

