// Importing Module
// import {
//   addToCart,
//   totalprice as price,
//   totalQuantity as tq,
// } from "./shoppingCart.js";

// addToCart("bread", 5);
// console.log(price, tq);

console.log("Importing Module");
// console.log(shoppingCost);

// import * as shoppingCart from "./shoppingCart.js";
// shoppingCart.addToCart("bread", 5);
// console.log(shoppingCart.totalprice);
// {
//   // addToCart, totalprice as price, totalQuantity as tq,
// console.log(price);
// }
// INTRODUCTION TO NPM
// import add, { cart } from "./shoppingCart.js";
// import add, { cart } from "./shoppingCart.js";
// add("pizza", 2);
// add("bread", 5);
// add("apples", 7);

// console.log(cart);

// TUTORIAL #274 (TOP-LEVEL AWAIT ES2022)
// console.log("start fetching");
// const res = await fetch("https://jsonplaceholder.typicode.com/posts");
// const data = await res.json();
// console.log(data);
// console.log("something");

const getLastPost = async function () {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  console.log(data);

  return { title: data.at(-1).title, text: data.at(-1) };
};

const lastPost = getLastPost();
console.log(lastPost);

// Not Very clean
// lastPost.then(last => console.log(lastPost));

// const lastpost2 = await getLastPost();
// console.log(lastpost2);

// TUTorial #275 (THE MODULE PATERN)

const shoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalprice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalQuantity,
    totalprice,
  };
})();

shoppingCart2.addToCart("apple", 5);
shoppingCart2.addToCart("pizza", 7);
console.log(shoppingCart2.shippingCost);

// TUTORIAL #277 (COMMON JS MODULE)

// Example of Export
// export.addToCart = function (product, quantity) {
//   cart.push({ product, quantity });
//   console.log(
//   console.log(`${quantity} ${product} added to cart`)
//   )
// };

// Example of Import
// const {addToCart} = require ("./shoppingCart.js")

// TUtorial #278 (A BRIEF INTRODUCTION TO THE COMMAND LINE)
// console.log();

// import cloneDeep from "_./nose_modeule/lodash-cloneDeep.js";

const state = {
  cart: [
    { product: "bread", quantity: 5 },
    { product: "pizza", quantity: 3 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
// const stateDeepClone = cloneDeep(state);
state.user.loggedIn = false;
console.log(stateClone);

// console.log(stateDeepClone);

// if (module.hot) {
//   module.hot.accept();
// }

class Person {
  greeting = "Hey";
  constructor(name) {
    this.name = name;
    console.log(`${this.greeting}, ${this.name}`);
  }
}

const victor = new Person("victor");

console.log("victor" ?? null);
console.log(cart.find(el.quantity) >= 2);
promise.resolve("TEST").then(function (x) {
  return el.quantity >= 2;
});

import "core-js/stable";
// import "core-js/stable/array/find";
// import "core-js/stable/array/promise";

// POLIFILLING ASYN FUNCTION
import "regenerator-runtime/runtime";

// TUTORIAL #279 (BUNDLING WITH PARCEL AND NPM SCRIPTS)

// TUTORIAL #280 (Configuring Barbel and Polyfilling)
// TUTORIAL #281 (HOW TO WRITE CLEAN MODERN JAVASCRIPT CODE.)
