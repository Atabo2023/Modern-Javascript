// Exporting Module
console.log("Exporting Module");

// Blocking code
// console.log("Start fetching users");
// const res = await fetch("https://jsonplaceholder.typicode.com/users");
// console.log("Finish fetching users");

const shippingCost = 10;
export const cart = [];

export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
};

const totalprice = 237;
const totalQuantity = 23;

export { totalprice, totalQuantity };

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to cart`);
}
