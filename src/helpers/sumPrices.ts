import { ISelectedCoffee } from "../pages/Checkout";

export const sumPrices = (coffees: ISelectedCoffee[]) => {
  let sum = 0.0;
  coffees.forEach(c => sum += (c.price * c.quantity))
  return sum;
}