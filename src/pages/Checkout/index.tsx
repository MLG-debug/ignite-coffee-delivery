import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money, ShoppingCartSimple } from 'phosphor-react'
import React, { useState } from 'react'
import { ICoffee, coffees as coffeesData } from '../../constants/coffees'
import { AddressInputs, AddressTitle, AddressWrapper, ButtonWrapper, CartWrapper, CheckoutContainer, CheckoutWrapper, CoffeeInfos, CoffeeWrapper, CoffeesWrapper, EmptyTitle, PaymentButtons, PaymentTitle, PaymentWrapper, PriceWrapper, SectionWrapper } from './styles'
import { SelectedCoffee } from './components/SelectedCoffee'
import { getRandomInt } from '../../helpers/getRandomInt'

export interface ISelectedCoffee extends ICoffee {
  quantity: number
}

const samples: ISelectedCoffee[] = [
  {
    ...coffeesData[6],
    quantity: 3
  },
  {
    ...coffeesData[3],
    quantity: 4
  },
  {
    ...coffeesData[8],
    quantity: 2
  },
  {
    ...coffeesData[10],
    quantity: 1
  },
  {
    ...coffeesData[2],
    quantity: 5
  },
]

export const Checkout = () => {
  const [selectedCoffees, setSelectedCoffees] = useState<ISelectedCoffee[]>(samples)

  let finishedOrder = false
  let deliveryPrice = 0.3 * getRandomInt(30)

  if (finishedOrder) {
    return (
      <div>
        <h1>
          Pedido finalizado!
        </h1>
      </div>
    )
  }

  if (!selectedCoffees.length) {
    return (
      <CheckoutContainer>
        <EmptyTitle>
          <ShoppingCartSimple size={22} />
          <h5>Seu carrinho está vazio</h5>
          <h3>Não deixe de tomar o seu precioso café</h3>
        </EmptyTitle>
      </CheckoutContainer>
    )
  }

  return (
    <CheckoutContainer>
      <CheckoutWrapper>
        <SectionWrapper>
          <h6>Complete seu pedido</h6>
          <AddressWrapper>
            <AddressTitle>
              <MapPinLine size={22} />
              <div>
                <h5>Endereço de Entrega</h5>
                <h3>Informe o endereço onde deseja receber seu pedido</h3>
              </div>
            </AddressTitle>
            <AddressInputs>
              <input placeholder='CEP' type="number" name="cep" id="cep" />

              <input placeholder='Rua' type="text" name="address" id="address" />

              <input placeholder='Número' type="number" name="number" id="number" />
              <input placeholder='Complemento' type="text" name="description" id="description" />

              <input placeholder='Bairro' type="text" name="district" id="district" />
              <input placeholder='Cidade' type="text" name="city" id="city" />
              <input placeholder='Estado' type="text" name="state" id="state" />
            </AddressInputs>
          </AddressWrapper>

          <PaymentWrapper>
            <PaymentTitle>
              <CurrencyDollar size={22} />
              <div>
                <h5>Pagamento</h5>
                <h3>O pagamento é feito na entrega. Escolha a forma que deseja pagar</h3>
              </div>
            </PaymentTitle>
            <PaymentButtons>
              <button><CreditCard size={16} />CARTÃO DE CRÉDITO</button>
              <button><Bank size={16} />CARTÃO DE DÉBITO</button>
              <button><Money size={16} />DINHEIRO</button>
            </PaymentButtons>
          </PaymentWrapper>
        </SectionWrapper>
        <SectionWrapper>
          <h6>Cafés selecionados</h6>
          <CartWrapper>
            <CoffeesWrapper>
              {
                selectedCoffees.map((coffee) => (
                  <div key={coffee.id}>
                    <SelectedCoffee {...coffee} />
                    <hr />
                  </div>
                ))
              }
            </CoffeesWrapper>
            <PriceWrapper>
              <div>
                <h6>Total de itens</h6>
                <h5>R$ 29,00</h5>
              </div>
              <div>
                <h6>Entrega</h6>
                <h5>{deliveryPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL'})}</h5>
              </div>
              <div>
                <h3><strong>Total</strong></h3>
                <h3><strong>R$ 38,70</strong></h3>
              </div>
            </PriceWrapper>
            <ButtonWrapper>
              <button>CONFIRMAR PEDIDO</button>
            </ButtonWrapper>
          </CartWrapper>
        </SectionWrapper>
      </CheckoutWrapper>
    </CheckoutContainer>
  )
}
