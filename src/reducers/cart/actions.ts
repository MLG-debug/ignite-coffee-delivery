import { ICoffee, ICustomer } from "./reducer"

export enum ActionTypes {
  ADD_COFFEE_TO_CART = 'ADD_COFFEE_TO_CART',
  REMOVE_COFFEE_FROM_CART = 'REMOVE_COFFEE_FROM_CART',
  CHANGE_COFFEE_QUANTITY = 'CHANGE_COFFEE_QUANTITY',
  FINISH_ORDER = 'FINISH_ORDER'
}

export interface IChangeItemQuantityActionProps {
  coffeeId: string
  quantity: number
}

export const addCoffeeToCartAction = (selectedCoffee: ICoffee) => {
  return {
    type: ActionTypes.ADD_COFFEE_TO_CART,
    payload: {
      data: {
        coffee: selectedCoffee
      }
    }
  }
}
export const removeCoffeeFromCartAction = (id: string) => {
  return {
    type: ActionTypes.REMOVE_COFFEE_FROM_CART,
    payload: {
      data: {
        coffeeId: id
      }
    }
  }
}
export const changeCoffeeQuantityAction = ({ coffeeId, quantity }: IChangeItemQuantityActionProps) => {
  return {
    type: ActionTypes.CHANGE_COFFEE_QUANTITY,
    payload: {
      data: {
        coffeeId,
        quantity
      }
    }
  }
}
export const finishOrderAction = (customerData: ICustomer) => {
  return {
    type: ActionTypes.FINISH_ORDER,
    payload: {
      data: {
        customerData
      }
    }
  }
}