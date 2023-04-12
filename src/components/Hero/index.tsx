import React from 'react'
import { heroImage } from '../../constants/images'
import { Coffee, Package, ShoppingCartSimple, Timer } from 'phosphor-react'
import {
  HeroBackground,
  HeroContainer,
  HeroIconsWrapper,
  HeroImageWrapper,
  TextWrapper,
  TitleWrapper,
} from './styles'

export const Hero = () => {
  return (
    <HeroBackground>
      <HeroContainer>
        <TextWrapper>
          <TitleWrapper>
            <h1>Encontre o café perfeito para qualquer hora do dia</h1>
            <h4>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </h4>
          </TitleWrapper>
          <HeroIconsWrapper>
            <span>
              <div>
                <ShoppingCartSimple weight="fill" size={16} />
              </div>
              <h6>Compra simples e segura</h6>
            </span>
            <span>
              <div>
                <Timer weight="fill" size={16} />
              </div>
              <h6>Entrega rápida e rastreada</h6>
            </span>
            <span>
              <div>
                <Package weight="fill" size={16} />
              </div>
              <h6>Embalagem mantém o café intacto</h6>
            </span>
            <span>
              <div>
                <Coffee weight="fill" size={16} />
              </div>
              <h6>O café chega fresquinho até você</h6>
            </span>
          </HeroIconsWrapper>
        </TextWrapper>
        <HeroImageWrapper>
          <img
            src={heroImage}
            width={476}
            alt="Imagem ilustrativa de um café"
          />
        </HeroImageWrapper>
      </HeroContainer>
    </HeroBackground>
  )
}
