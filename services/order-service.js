import { shipping } from "./shipping-service";

export function total(order) {
    const ship = shipping(order);
    return (order.basic * order.discount) + ship;
}