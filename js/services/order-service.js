import * as shippingService from "./shipping-service.js";

export function total(order) {
    const ship = shippingService.shipping(order);
    return order.basic - (order.basic * order.discount/100) + ship;
}