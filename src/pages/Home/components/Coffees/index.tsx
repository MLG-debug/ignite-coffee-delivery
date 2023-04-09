import React from 'react'
import { coffees } from '../../../../constants/coffees'
import { CoffeesContainer, CoffeesWrapper, ItemsWrapper } from './styles'
import { Coffee } from '../Coffee'

export const Coffees = () => {
  return (
    <CoffeesContainer>
      <CoffeesWrapper>
        <h1>Nossos cafés</h1>
        <ItemsWrapper>
          {coffees.map((coffee) => (
            <Coffee key={coffee.id} {...coffee} />
          ))}
        </ItemsWrapper>
      </CoffeesWrapper>
    </CoffeesContainer>
  )
}
