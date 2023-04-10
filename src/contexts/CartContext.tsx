import React, { ReactNode, createContext, useEffect, useState } from 'react'
import { coffees as coffeesData } from '../constants/coffees'
import { ISelectedCoffee } from '../pages/Checkout'

export interface IAddress {
  cep: string
  address: string
  number: number
  description: string
  district: string
  city: string
  state: string
}

interface CartContextProps {
  address?: IAddress | null
  addActualAddress: (address: IAddress) => void

  finishOrder: (address: IAddress) => void

  paymentMethod: string
  addPaymentMethod: (paymentMethod: string) => void

  coffees: ISelectedCoffee[]
  addCoffeeToCart: (id: string, quantity: number) => void
  removeCoffeeFromCart: (id: string) => void
  changeQuantityItem: (id: string, quantity: number) => void
}

export const CartContext = createContext({} as CartContextProps)

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [coffees, setCoffees] = useState<ISelectedCoffee[]>(() => {
    const coffeesExists = localStorage.getItem('@coffee-delivery:coffee-cart-1.0.0')
    if (coffeesExists) {
      return JSON.parse(coffeesExists)
    } else return []
  })

  const [address, setAddress] = useState<IAddress | null>(() => {
    const addressExists = localStorage.getItem('@coffee-delivery:actual-address-1.0.0')
    if (addressExists) {
      return JSON.parse(addressExists)
    } else return null
  })

  const [paymentMethod, setPaymentMethod] = useState(() => {
    const paymentMethodExists = localStorage.getItem('@coffee-delivery:payment-method-1.0.0')
    if (paymentMethodExists) {
      return JSON.parse(paymentMethodExists)
    } else return ''
  })

  const addCoffeeToCart = (id: string, quantity: number) => {
    const coffeeAlreadySelected = coffees.find((c) => c.id === id)
    if (coffeeAlreadySelected) {
      return changeQuantityItem(coffeeAlreadySelected.id, quantity)
    }

    const coffee = coffeesData.find((c) => c.id === id)
    if (coffee) {
      let selectedCoffee: ISelectedCoffee = {
        ...coffee,
        quantity
      }
      setCoffees((state) => [...state, selectedCoffee])
    }
  }

  const removeCoffeeFromCart = (id: string) => {
    if (coffees.length !== 0) {
      const coffee = coffees.find((c) => c.id === id)
      if (coffee) {
        setCoffees((state) => state.filter(c => c.id !== id))
      }
    }
  }

  const changeQuantityItem = (id: string, quantity: number) => {
    const coffee = coffees.find((c) => c.id === id)
    if (coffee) {
      setCoffees((state) =>
        state.filter(c => {
          if (c.id === id) {
            c.quantity = quantity;
            return c
          } else return c
        })
      )
    }
  }

  const addActualAddress = (actualAddress: IAddress) => {
    setAddress(actualAddress);
  }

  const finishOrder = (actualAddress: IAddress) => {
    addActualAddress(actualAddress)
    setCoffees([])
    localStorage.removeItem('@coffee-delivery:coffee-cart-1.0.0')
  }

  const addPaymentMethod = (paymentMethod: string) => {
    setPaymentMethod(paymentMethod)
  }

  useEffect(() => {
    if (address) {
      localStorage.setItem('@coffee-delivery:actual-address-1.0.0', JSON.stringify(address))
    }
  }, [address])

  useEffect(() => {
    if (paymentMethod.length !== 0) {
      localStorage.setItem('@coffee-delivery:payment-method-1.0.0', JSON.stringify(paymentMethod))
    }
  }, [paymentMethod])

  useEffect(() => {
    if (coffees.length !== 0) {
      localStorage.setItem('@coffee-delivery:coffee-cart-1.0.0', JSON.stringify(coffees))
    }
  }, [coffees])

  return (
    <CartContext.Provider
      value={{
        address,
        addActualAddress,
        finishOrder,

        paymentMethod,
        addPaymentMethod,

        coffees,
        addCoffeeToCart,
        removeCoffeeFromCart,
        changeQuantityItem
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
