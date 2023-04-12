import React, { ReactNode, createContext, useEffect, useReducer, useState } from 'react'
import { coffees as coffeesData } from '../constants/coffees'
import { ICustomer, ISelectedCoffee, cartReducer } from '../reducers/cart/reducer'
import { addCoffeeToCartAction, changeCoffeeQuantityAction, finishOrderAction, removeCoffeeFromCartAction } from '../reducers/cart/actions'

interface CartContextProps {
  customer: ICustomer | null
  coffees: ISelectedCoffee[]

  finishOrder: (customerData: ICustomer) => void
  addCoffeeToCart: (id: string, quantity: number) => void
  removeCoffeeFromCart: (id: string) => void
  changeCoffeeQuantity: ({ coffeeId, quantity }: IChangeCoffeeQuantityProps) => void
}

interface IChangeCoffeeQuantityProps {
  coffeeId: string
  quantity: number
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextProps)

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  // usar reducer para manipular os eventos

  // const [coffees, setCoffees] = useState<ISelectedCoffee[]>(() => {
  //   const coffeesExists = localStorage.getItem('@coffee-delivery:coffee-cart-1.0.0')
  //   if (coffeesExists) {
  //     return JSON.parse(coffeesExists)
  //   } else return []
  // })

  const [cartState, dispatch] = useReducer(cartReducer, {
    coffees: [],
    customer: null
  }, () => {
    let coffees: ISelectedCoffee[] = []
    let customer = null

    const customerDataStored = localStorage.getItem('@coffee-delivery:customer-data-1.0.0')
    if (customerDataStored) {
      customer = JSON.parse(customerDataStored)
    }

    const coffeeCartStored = localStorage.getItem('@coffee-delivery:coffee-cart-1.0.0')
    if (coffeeCartStored) {
      coffees = JSON.parse(coffeeCartStored)
    }

    return {
      coffees,
      customer
    }
  })

  const { coffees, customer } = cartState;

  // const [customerData, setCustomerData] = useState<ICustomer | null>(() => {
  // const customerDataExists = localStorage.getItem('@coffee-delivery:customer-data-1.0.0')
  // if (customerDataExists) {
  //   return JSON.parse(customerDataExists)
  // } else return null
  // })

  const addCoffeeToCart = (id: string, quantity: number) => {
    // usar reducer para manipular os eventos

    // const coffeeAlreadySelected = coffees.find((c) => c.id === id)
    // if (coffeeAlreadySelected) {
    //   return changeItemQuantity(coffeeAlreadySelected.id, quantity)
    // }

    const coffee = coffeesData.find((c) => c.id === id)
    if (coffee) {
      let selectedCoffee: ISelectedCoffee = {
        ...coffee,
        quantity
      }
      dispatch(addCoffeeToCartAction(selectedCoffee))
      // setCoffees((state) => [...state, selectedCoffee])
    }
  }

  const removeCoffeeFromCart = (coffeeId: string) => {
    // usar reducer para manipular os eventos

    // if (coffees.length !== 0) {
    //   const coffee = coffees.find((c) => c.id === id)
    //   if (coffee) {
    //     setCoffees((state) => state.filter(c => c.id !== id))
    //   }
    // }
    dispatch(removeCoffeeFromCartAction(coffeeId))
  }

  const changeCoffeeQuantity = ({ coffeeId, quantity }: IChangeCoffeeQuantityProps) => {
    // usar reducer para manipular os eventos

    // const coffee = coffees.find((c) => c.id === id)
    // if (coffee) {
    dispatch(changeCoffeeQuantityAction({ coffeeId, quantity }))
    // setCoffees((state) =>
    //   state.filter(c => {
    //     if (c.id === id) {
    //       c.quantity = quantity;
    //       return c
    //     } else return c
    //   })
    // )
    // }
  }

  const finishOrder = (customerData: ICustomer) => {
    // usar reducer para manipular os eventos

    // addActualAddress(actualAddress)
    // setCoffees([])
    dispatch(finishOrderAction(customerData))
    localStorage.removeItem('@coffee-delivery:coffee-cart-1.0.0')
  }

  useEffect(() => {
    // salvando os dados do cliente no local storage

    if (customer) {
      const stateJSON = JSON.stringify(customer)
      localStorage.setItem('@coffee-delivery:customer-data-1.0.0', stateJSON)
    }
  }, [customer])

  useEffect(() => {
    // salvando os dados do carrinho no local storage

    const stateJSON = JSON.stringify(coffees)
    localStorage.setItem('@coffee-delivery:coffee-cart-1.0.0', stateJSON)
  }, [coffees])

  return (
    <CartContext.Provider
      value={{
        customer,
        finishOrder,

        coffees,
        addCoffeeToCart,
        removeCoffeeFromCart,
        changeCoffeeQuantity
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
