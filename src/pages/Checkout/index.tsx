import { Bank, Clock, CreditCard, CurrencyDollar, MapPin, MapPinLine, Money, ShoppingCartSimple } from 'phosphor-react'
import React, { useContext, useEffect, useState } from 'react'
import { AddressInputs, AddressTitle, AddressWrapper, ButtonWrapper, CartWrapper, CheckoutContainer, CheckoutWrapper, CoffeesWrapper, EmptyTitle, FinishInfos, FinishOrderItems, FinishOrderTitle, FinishWrapper, PaymentButtons, PaymentLabel, PaymentTitle, PaymentWrapper, PriceWrapper, SectionWrapper } from './styles'
import { SelectedCoffee } from './components/SelectedCoffee'
import { getRandomInt } from '../../helpers/getRandomInt'
import { sumPrices } from '../../helpers/sumPrices'
import { CartContext } from '../../contexts/CartContext'
import { useForm } from 'react-hook-form'
import { successCheckout } from '../../constants/images'
import { ICustomer, PaymentMethods } from '../../reducers/cart/reducer'

let deliveryPrice = 0.3 * getRandomInt(30)

export const Checkout = () => {
  const [finishedOrder, setFinishedOrder] = useState(false)
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<PaymentMethods>('Cartão de crédito');

  const { coffees, customer, finishOrder } = useContext(CartContext)
  const { handleSubmit, register, reset } = useForm()

  let totalPriceItems = coffees?.length !== 0 ? sumPrices(coffees) : 0.0
  let totalPrice = totalPriceItems + deliveryPrice

  useEffect(() => {
    if (customer) {
      reset(customer)
      setSelectedPaymentMethod(customer.paymentMethod)
    }
  }, [])

  if (finishedOrder && customer) {
    return (
      <CheckoutContainer>
        <FinishWrapper>
          <FinishInfos>
            <FinishOrderTitle>
              <h4>Uhu! Pedido confirmado</h4>
              <h6>Agora é só aguardar que logo o café chegará até você</h6>
            </FinishOrderTitle>
            <FinishOrderItems>
              <div>
                <div>
                  <span>
                    <MapPin size={16} />
                  </span>
                  <div>
                    <p>Entrega em <strong>{customer.address}, {customer.number}</strong></p>
                    <p>{customer.district} - {customer.city}, {customer.state}</p>
                  </div>
                </div>
                <div>
                  <span>
                    <Clock size={16} />
                  </span>
                  <div>
                    <p>Previsão de entrega</p>
                    <p><strong>{getRandomInt(20)} min - {getRandomInt(10) + 20} min</strong></p>
                  </div>
                </div>
                <div>
                  <span>
                    <CurrencyDollar size={16} />
                  </span>
                  <div>
                    <p>Pagamento na entrega</p>
                    <p><strong>{customer.paymentMethod}</strong></p>
                  </div>
                </div>
              </div>
            </FinishOrderItems>
          </FinishInfos>
          <div>
            <img src={successCheckout} alt="Imagem ilustrativa de uma moto fazendo a entrega dos pedidos" />
          </div>
        </FinishWrapper>
      </CheckoutContainer>
    )
  }

  if (!coffees.length) {
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

  const handleButtonClick = (value: PaymentMethods) => {
    setSelectedPaymentMethod(value);
  };

  const onSubmit = (e: any) => {
    if (selectedPaymentMethod) {
      const customerData: ICustomer = {
        cep: e.cep,
        address: e.address,
        city: e.city,
        description: e.description,
        district: e.district,
        number: e.number,
        state: e.state,
        paymentMethod: selectedPaymentMethod
      }
      finishOrder(customerData)
      setFinishedOrder(true)
    }
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
            <AddressInputs id='finishOrderForm' onSubmit={handleSubmit(onSubmit)}>
              <input placeholder='CEP' type="number" {...register('cep', { required: true })} />

              <input placeholder='Rua' type="text" {...register('address', { required: true })} />

              <input placeholder='Número' type="number" {...register('number', { required: true })} />
              <input placeholder='Complemento' type="text" {...register('description', { required: true })} />

              <input placeholder='Bairro' type="text" {...register('district', { required: true })} />
              <input placeholder='Cidade' type="text" {...register('city', { required: true })} />
              <input placeholder='Estado' type="text" {...register('state', { required: true })} />
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
              <PaymentLabel htmlFor="option1">
                <input hidden checked={selectedPaymentMethod === 'Cartão de crédito'} id="option1" form='finishOrderForm' type='radio' />
                <button type="button" onClick={() => handleButtonClick('Cartão de crédito')}><CreditCard size={16} />Cartão de crédito</button>
              </PaymentLabel>
              <PaymentLabel htmlFor="option2">
                <input hidden checked={selectedPaymentMethod === 'Cartão de débito'} id="option2" form='finishOrderForm' type='radio' />
                <button type="button" onClick={() => handleButtonClick('Cartão de débito')}><Bank size={16} />Cartão de débito</button>
              </PaymentLabel>
              <PaymentLabel htmlFor="option3">
                <input hidden checked={selectedPaymentMethod === 'Dinheiro'} id="option3" form='finishOrderForm' type='radio' />
                <button type="button" onClick={() => handleButtonClick('Dinheiro')}><Money size={16} />Dinheiro</button>
              </PaymentLabel>
            </PaymentButtons>
          </PaymentWrapper>
        </SectionWrapper>
        <SectionWrapper>
          <h6>Cafés selecionados</h6>
          <CartWrapper>
            <CoffeesWrapper>
              {
                coffees.map((coffee) => (
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
                <h5>{totalPriceItems.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h5>
              </div>
              <div>
                <h6>Entrega</h6>
                <h5>{deliveryPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</h5>
              </div>
              <div>
                <h3><strong>Total</strong></h3>
                <h3><strong>{totalPrice.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong></h3>
              </div>
            </PriceWrapper>
            <ButtonWrapper>
              <button type='submit' form='finishOrderForm'>CONFIRMAR PEDIDO</button>
            </ButtonWrapper>
          </CartWrapper>
        </SectionWrapper>
      </CheckoutWrapper>
    </CheckoutContainer>
  )
}
