// Define an array of objects containing the products, their price per unit and the amount purchased
const products = [
  {
    id: 4,
    name: "Summer hat",
    price: 7.5,
    amount: 3,
    categorty: "summer",
    rating: 40,
  },
];

function calculateTotalPrice(products) {
  const newProducts = products.map((product) => {
    return {
      name: product.name,
      totalPrice: product.price * product.amount,
    };
  });
  return newProducts;
}

function calculateTotalCost(products) {
  const newProducts = calculateTotalPrice(products);
  const total = newProducts.reduce(
    (acc, product) => acc + product.totalPrice,
    0
  );
  const shippingCost = 320;
  const grandTotal = total + shippingCost;
  return {
    numProducts: newProducts.length,
    shippingCost: shippingCost,
    total: grandTotal,
  };
}

const totalCost = calculateTotalCost(products);
console.log(
  `You got ${totalCost.numProducts} in cart, shipping cost is ${totalCost.shippingCost}, your total is ${totalCost.total}.`
);
