import React, { useContext, useState } from 'react'
import { LogoImage } from '../../constants/images'
import { MapPin, ShoppingCartSimple } from 'phosphor-react'
import {
  AddressContainer,
  CartButton,
  HeaderContainer,
  HeaderWrapper,
  InfosWrapper,
} from './styles'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../contexts/CartContext'

export const Header = () => {

  const { coffees, address } = useContext(CartContext)
  const navigate = useNavigate()

  const handleNavigateToHome = () => {
    navigate('/')
  }
  const handleNavigateToCheckout = () => {
    navigate('/checkout')
  }

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <span onClick={handleNavigateToHome}>
          <img src={LogoImage} alt="Imagem da logo da cafeteria" />
        </span>
        <InfosWrapper>
          {address && (
            <AddressContainer>
              <MapPin size={22} weight="fill" />
              <h5>{address.city}, {address.state}</h5>
            </AddressContainer>
          )}
          <div>
            <CartButton onClick={handleNavigateToCheckout}>
              <ShoppingCartSimple size={22} weight="fill" />
              {coffees.length !== 0 && <span>{coffees.length}</span>}
            </CartButton>
          </div>
        </InfosWrapper>
      </HeaderWrapper>
    </HeaderContainer>
  )
}
