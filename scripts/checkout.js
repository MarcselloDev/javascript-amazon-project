import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import "../data/car.js"
import { loadProducts } from "../data/products.js";
import { loadCart } from "../data/cart.js";
// import "../data/backend-practice.js"
// import '../data/cart-oop.js'
// import '../data/cart-class.js'

Promise.all([
  new Promise(resolve => {
  loadProducts(() =>  {
    resolve('value1')
  })
}),

new Promise(resolve => {
  loadCart(() => {
    resolve()
  })
})
]).then((values) => {
  console.log(values);
  renderOrderSummary()
  renderPaymentSummary()
})

/*
new Promise(resolve => {
  loadProducts(() =>  {
    resolve('value1')
  })
}).then(value => {
  console.log(value);

  return new Promise(resolve => {
    loadCart(() => {
      resolve()
    })
  })
}).then(() => {
  renderOrderSummary()
  renderPaymentSummary()
})
  */

/*
loadProducts(() => {
  renderOrderSummary()
  renderPaymentSummary()
})
*/