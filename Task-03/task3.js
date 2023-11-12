var pName = "syed MUHAMMAD iqbal";
console.log(pName.toLowerCase());
console.log(pName.toUpperCase());
var newName = pName.split(" ").map(function (l) { return l[0].toUpperCase() + l.substring(1); }).join(" ");
console.log(newName);
