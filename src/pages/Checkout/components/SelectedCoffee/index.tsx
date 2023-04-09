import React, { useState } from 'react'
import { ICoffee } from '../../../../constants/coffees'
import { QuantityWrapper } from '../../../Home/components/Coffee/styles'
import { CoffeeWrapper, CoffeeInfos, RemoveButtonWrapper, ButtonsWrapper, CoffeeContent } from '../../styles'
import { Trash } from 'phosphor-react'
import { ISelectedCoffee } from '../..'

export const SelectedCoffee = ({ id, name, price, image, quantity: actualQuantity }: ISelectedCoffee) => {
  const [quantity, setQuantity] = useState(actualQuantity)

  const increaseQuantity = () => {
    if (quantity < 99) {
      setQuantity((state) => state + 1)
    }
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity((state) => state - 1)
    }
  }

  return (
    <CoffeeWrapper key={id}>
      <CoffeeInfos>
        <div>
          <img src={image} width={64} />
        </div>
        <CoffeeContent>
          <h5>{name}</h5>
          <ButtonsWrapper>
            <QuantityWrapper>
              <button onClick={decreaseQuantity}>-</button>
              <span>{quantity}</span>
              <button onClick={increaseQuantity}>+</button>
            </QuantityWrapper>
            <RemoveButtonWrapper>
              <button><Trash /> REMOVER</button>
            </RemoveButtonWrapper>
          </ButtonsWrapper>
        </CoffeeContent>
      </CoffeeInfos>
      <div>
        <h6>{price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h6>
      </div>
    </CoffeeWrapper>


  )
}
