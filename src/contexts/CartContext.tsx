import React, { ReactNode, createContext, useState } from 'react'
import { ICoffee, coffees as coffeesData } from '../constants/coffees'

interface CartContextProps {
  coffees: ICoffee[]

  addCoffeeToCart: (id: string) => void
}

export const CartContext = createContext({} as CartContextProps)

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [coffees, setCoffees] = useState<ICoffee[]>([])

  const addCoffeeToCart = (id: string) => {
    const coffee = coffeesData.find((c) => c.id === id)
    if (coffee) {
      setCoffees((state) => [...state, coffee])
    }
  }

  return (
    <CartContext.Provider
      value={{
        coffees,
        addCoffeeToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
