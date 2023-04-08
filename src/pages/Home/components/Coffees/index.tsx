import React from 'react'
import { coffees } from '../../../../constants/coffees'
import { ShoppingCartSimple } from 'phosphor-react'
import { CoffeesContainer, CoffeesWrapper } from './styles'
import { Coffee } from '../Coffee'

export const Coffees = () => {
  return (
    <CoffeesContainer>
      <h1>Nossos cafés</h1>
      <CoffeesWrapper>
        {coffees.map((coffee) => (
          <Coffee key={coffee.id} {...coffee} />
        ))}
      </CoffeesWrapper>
    </CoffeesContainer>
  )
}
