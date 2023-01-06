import Order from "./models/order.js";
import { total } from "./services/order-service.js";

const data = document.getElementById("orderInputData").innerHTML.split("\n");
const order = new Order(Number(data[0]), Number(data[1]), Number(data[2]));

const orderTotal = total(order);

console.log("Pedido código " + order.code);
console.log("Valor total: R$ " + orderTotal.toFixed(2));