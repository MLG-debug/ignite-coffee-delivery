import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from 'phosphor-react'
import React from 'react'
import { ICoffee, coffees as coffeesData } from '../../constants/coffees'
import { AddressInputs, AddressTitle, AddressWrapper, ButtonWrapper, CartWrapper, CheckoutContainer, CheckoutWrapper, CoffeeInfos, CoffeeWrapper, CoffeesWrapper, PaymentButtons, PaymentTitle, PaymentWrapper, PriceWrapper, SectionWrapper } from './styles'

export const Checkout = () => {

  const coffees = [coffeesData[0], coffeesData[5]]

  let finishedOrder = false

  if (finishedOrder) {
    return (
      <div>
        <h1>
          Pedido finalizado!
        </h1>
      </div>
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
                coffees.map((coffee) => (
                  <>
                    <CoffeeWrapper key={coffee.id}>
                      <CoffeeInfos>
                        <div>
                          <img src={coffee.image} width={64} />
                        </div>
                        <div>
                          <h5>{coffee.name}</h5>
                        </div>
                      </CoffeeInfos>
                      <div>
                        <h6>R$ {coffee.price}</h6>
                      </div>
                    </CoffeeWrapper>
                    <hr />
                  </>
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
                <h5>R$ 9,70</h5>
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
