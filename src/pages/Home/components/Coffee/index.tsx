import React, { useContext, useState } from 'react'
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
import { CartContext } from '../../../../contexts/CartContext'
import { ICoffee } from '../../../../reducers/cart/reducer'

export const Coffee = ({
  description,
  id,
  image,
  name,
  price,
  types,
}: ICoffee) => {
  const [quantity, setQuantity] = useState(1)

  const { addCoffeeToCart } = useContext(CartContext)

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

  const handleAddCoffeeToCart = () => {
    addCoffeeToCart(id, quantity)
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
          <strong>{price.toLocaleString('pt-BR', { style: 'decimal', maximumFractionDigits: 2, minimumFractionDigits: 2})}</strong>
        </PriceWrapper>
        <QuantityWrapper>
          <button onClick={decreaseQuantity}>-</button>
          <span>{quantity}</span>
          <button onClick={increaseQuantity}>+</button>
        </QuantityWrapper>
        <BuyButton onClick={handleAddCoffeeToCart}>
          <ShoppingCartSimple size={20} weight="fill" />
        </BuyButton>
      </BuyWrapper>
    </CoffeeContainer>
  )
}
