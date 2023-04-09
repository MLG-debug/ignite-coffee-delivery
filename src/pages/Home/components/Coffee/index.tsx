import React, { useState } from 'react'
import { ICoffee } from '../../../../constants/coffees'
import { ShoppingCartSimple } from 'phosphor-react'
import {
  CoffeeContainer,
  TypesWrapper,
  CoffeeName,
  CoffeeDescription,
  BuyWrapper,
  PriceWrapper,
  QuantityWrapper,
  BuyButton,
  CoffeeImageWrapper,
} from './styles'

export const Coffee = ({
  description,
  id,
  image,
  name,
  price,
  types,
}: ICoffee) => {
  const [quantity, setQuantity] = useState(1)

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
    <CoffeeContainer>
      <div>
        <CoffeeImageWrapper>
          <img src={image} alt="imagem representativa do café" />
        </CoffeeImageWrapper>
        <TypesWrapper>
          {types.map((type) => (
            <span key={type}>{type}</span>
          ))}
        </TypesWrapper>
        <CoffeeName>{name}</CoffeeName>
        <CoffeeDescription>{description}</CoffeeDescription>
      </div>
      <BuyWrapper>
        <PriceWrapper>
          <span>R$</span>
          <strong>{price}</strong>
        </PriceWrapper>
        <QuantityWrapper>
          <button onClick={decreaseQuantity}>-</button>
          <span>{quantity}</span>
          <button onClick={increaseQuantity}>+</button>
        </QuantityWrapper>
        <BuyButton>
          <ShoppingCartSimple size={20} weight="fill" />
        </BuyButton>
      </BuyWrapper>
    </CoffeeContainer>
  )
}
