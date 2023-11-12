// // Vegetable. ...Fujaita. ...Pepperoni. ...
// const pizzaNames : string[] = ['Vegetable', 'Fujaita', 'Pepperoni']
// const pizza = {
//     vegPizza : "I enjoy the Vegetable Pizza for its vibrant medley of fresh, colorful vegetables that add a burst of flavors and textures.",
//     fujPizza : "The Fajita Pizza is a personal favorite due to its unique fusion of Mexican and Italian flavors.",
//     pepPizza : "the Pepperoni Pizza never fails to satisfy my cravings with its timeless combination of zesty tomato sauce, gooey melted cheese, and the bold, savory punch of pepperoni slices."
// }

// pizzaNames.forEach((pName) => console.log(pizzaNames.indexOf(pName)+1,')',pName));
// console.log('\n--------------- Now Pizza sentences ---------------\n');
// pizzaNames.forEach((pName) => console.log(`I like ${pName} pizza`));
// console.log('\n--------------- Now Pizza with few more sentences ---------------\n');
// pizzaNames.forEach((pName) => console.log(`I like ${pName} pizza because ${pizza.fujPizza}`));

const pizza = {
    Vegetable: "I enjoy the Vegetable Pizza for its vibrant medley of fresh, colorful vegetables that add a burst of flavors and textures.",
    Fujaita: "the Fajita Pizza is a personal favorite due to its unique fusion of Mexican and Italian flavors.",
    Pepperoni: "the Pepperoni Pizza never fails to satisfy my cravings with its timeless combination of zesty tomato sauce, gooey melted cheese, and the bold, savory punch of pepperoni slices."
}

const pizzaNames : string[] = ['Vegetable', 'Fujaita', 'Pepperoni']


pizzaNames.forEach(pizzaName => {
    const pizzaDescription = pizza[pizzaName];
    console.log(`I like ${pizzaName} Pizza very much because ${pizzaDescription}\n`);
});




