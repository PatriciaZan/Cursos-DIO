//const products = require("./services/products");
const config = require("./services/config");
const database = require("./services/database");

const { getFullName, getProductLabel } = require("./services/products");

async function main() {
  console.log("Olá");
  //products.getFullName("408", "teclado");
  //products.getProductLabel("Mouse");

  console.log("----------------");

  console.log(config.production);
}

main();
