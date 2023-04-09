import React, { useState } from 'react'
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

export const Header = () => {
  const [cartItems, setCartItems] = useState(1)
  const [address, setAddress] = useState('Porto Alegre, RS')

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
              <h5>{address}</h5>
            </AddressContainer>
          )}
          <div>
            <CartButton onClick={handleNavigateToCheckout}>
              <ShoppingCartSimple size={22} weight="fill" />
              {cartItems !== 0 && <span>{1}</span>}
            </CartButton>
          </div>
        </InfosWrapper>
      </HeaderWrapper>
    </HeaderContainer>
  )
}
