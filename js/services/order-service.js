import { shipping } from "./shipping-service.js";

export function total(order) {
    const ship = shipping(order);
    return order.basic - (order.basic * order.discount/100) + ship;
}