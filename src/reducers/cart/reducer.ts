import { produce } from 'immer'
import { ActionTypes } from "./actions"

export type PaymentMethods = 'Cartão de débito' | 'Cartão de crédito' | 'Dinheiro'

export interface ICustomer {
  cep: string
  address: string
  number: number
  description: string
  district: string
  city: string
  state: string

  paymentMethod: PaymentMethods
}

export interface ICoffee {
  id: string
  name: string
  description: string
  types: string[]
  price: number
  image: string
}

export interface ISelectedCoffee extends ICoffee {
  quantity: number
}

interface ICartState {
  coffees: ISelectedCoffee[]
  customer: ICustomer | null
}

export const cartReducer = (state: ICartState, action: any) => {
  switch (action.type) {
    case ActionTypes.ADD_COFFEE_TO_CART:
      // usar immer para manipular estado
      // return {
      //   ...state,
      //   coffees: [...state.coffees, action.payload.data.coffee]
      // }
      return produce(state, draft => {
        const index = draft.coffees.findIndex((coffee) => coffee.id === action.payload.data.coffee.id )
        if(index !== -1) {
          draft.coffees[index].quantity = action.payload.data.coffee.quantity
        } else {
          draft.coffees.push(action.payload.data.coffee)
        }
      })
    case ActionTypes.REMOVE_COFFEE_FROM_CART:
      // usar immer para manipular estado
      // return {
      //   ...state,
      //   coffees: state.coffees.map((coffee) => coffee.id !== action.payload.data.coffeeId)
      // }
      return produce(state, draft => {
        const index = draft.coffees.findIndex((coffee) => coffee.id === action.payload.data.coffeeId )
        if(index !== -1) {
          draft.coffees.splice(index, 1)
        }
      })
    case ActionTypes.CHANGE_COFFEE_QUANTITY:
      // usar immer para manipular estado
      // let { id, quantity } = action.payload.data
      // return {
      //   ...state,
      //   coffees: state.coffees.filter(c => {
      //     if (c.id === id) {
      //       c.quantity = quantity;
      //       return c
      //     } else return c
      //   })
      // }
      return produce(state, draft => {
        const index = draft.coffees.findIndex((coffee) => coffee.id === action.payload.data.coffeeId )
        if(index !== -1) {
          draft.coffees[index].quantity = action.payload.data.quantity
        }
      })
    case ActionTypes.FINISH_ORDER:
      // usar immer para manipular estado
      // return {
      //   ...state,
      //   coffees: [],
      //   customer: action.payload.data.customerData
      // }
      return produce(state, draft => {
        draft.coffees = []
        draft.customer = action.payload.data.customerData
      })
    default:
      return state

  }
}