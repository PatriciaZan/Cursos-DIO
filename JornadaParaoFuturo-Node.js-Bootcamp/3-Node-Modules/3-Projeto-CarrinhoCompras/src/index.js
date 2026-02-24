import createItem from "./services/item.js";

import {
  addItem,
  deleteItem,
  calculateTotal,
  removeItem,
  cartService,
} from "./services/cart.js";

const myCart = [];

console.log("Welcome to yout shop cart!");

const item1 = await createItem("hotwheels", 20.99, 1);
const item2 = await createItem("Carrinho", 39.99, 2);

await addItem(myCart, item1);
await addItem(myCart, item2);

//await deleteItem(myCart, item1.name);
//await deleteItem(myCart, item2.name);

await removeItem(myCart, 2);

//console.log("Your cart total is: ");
await calculateTotal(myCart);

await cartService(myCart);
