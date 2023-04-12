import { ISelectedCoffee } from "../reducers/cart/reducer";

export const sumPrices = (coffees: ISelectedCoffee[]) => {
  // let sum = 0.0;
  // coffees.forEach(c => sum += (c.price * c.quantity))
  // return sum;

  // usando reduce
  let sum = coffees.reduce((accumulator, coffee) => accumulator + coffee.price * coffee.quantity, 0.0)
  return sum
}