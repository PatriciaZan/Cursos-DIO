async function addItem(userCart, item) {
  userCart.push(item);
}

async function deleteItem(userCart, name) {
  const index = userCart.findIndex((item) => item.name === name);
}

async function removeItem(userCart, index) {}

async function calculateTotal(userCart) {
  const result = userCart.reduce((total, item) => total + item.subtotal());
  console.log(result);
}

export { addItem, deleteItem, removeItem, calculateTotal };
