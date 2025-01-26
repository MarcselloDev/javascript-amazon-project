import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import "../data/car.js"
import { loadProducts } from "../data/products.js";
// import "../data/backend-practice.js"
// import '../data/cart-oop.js'
// import '../data/cart-class.js'
loadProducts(() => {
  renderOrderSummary()
  renderPaymentSummary()
})

  
