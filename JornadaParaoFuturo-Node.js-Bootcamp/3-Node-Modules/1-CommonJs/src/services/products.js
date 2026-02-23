// Func que lidam com produto
async function getFullName(codeId, productName) {
  return codeId + "---" + productName;
}

async function getProductLabel(productName) {
  console.log("Product: " + productName);
  doBreakLine();
}

function doBreakLine() {
  console.log("/n");
}

module.exports = {
  getFullName,
  getProductLabel,
};
