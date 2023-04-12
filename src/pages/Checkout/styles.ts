import styled from "styled-components";

export const CheckoutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    padding: 16px;
  }
`

export const CheckoutWrapper = styled.div`
  padding: 40px 0px;
  display: flex;
  flex: 1;
  justify-content: space-between;
  max-width: 70rem;
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 16px;
    gap: 16px
  }
`

export const EmptyTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 40px 0px;
  gap: 0.5rem;
  display: flex;

  svg {
    color: ${({ theme }) => theme["yellow-500"]}
  }

  h5 {
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 4px;
  }

  h3 {
    font-size: 0.875rem;
    font-weight: normal;
  }
`

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
 
  h6 {
    font-family: 'Baloo 2', cursive;
    font-size: 1.125rem;
    font-weight: bold;
    margin-bottom: 16px;
  }
`

export const AddressWrapper = styled.div`
  background-color: ${({ theme }) => theme["gray-100"]};
  padding: 40px;
  margin-bottom: 12px;
  border-radius: 6px;
`

export const AddressTitle = styled.div`
  display: flex;
  align-items: start;
  gap: 0.5rem;
  margin-bottom: 2rem;

  svg {
    color: ${({ theme }) => theme["yellow-500"]}
  }

  div {
    display: flex;
    flex-direction: column;
  }

  h5 {
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 4px;
  }

  h3 {
    font-size: 0.875rem;
    font-weight: normal;
  }
`

export const AddressInputs = styled.form`
  display: grid;
  /* grid-template-columns: 200px 348px 276px; */
  grid-template-columns: 1fr 1.25fr 0.5fr;
  grid-gap: 10px;

  input {
    width: 100%;
    outline: none;
    border: 1px solid ${({ theme }) => theme["gray-300"]};
    color: ${({ theme }) => theme["brown-200"]};
    background-color: ${({ theme }) => theme["gray-200"]};
    padding: 12px;
    border-radius: 6px;
  }

  input:nth-child(1) {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
  }

  input:nth-child(2) {
    grid-row: 2 / 3;
    grid-column: 1 / 4;
  }

  input:nth-child(3) {
    grid-row: 3 / 4;
    grid-column: 1 / 2;
  }

  input:nth-child(4) {
    grid-row: 3 / 4;
    grid-column: 2 / 4;
  }

  input:nth-child(5) {
    grid-row: 4 / 5;
    grid-column: 1 / 2;
  }

  input:nth-child(6) {
    grid-row: 4 / 5;
    grid-column: 2 / 3;
}

input:nth-child(7) {
  grid-row: 4 / 5;
  grid-column: 3 / 4;
}
`

export const PaymentWrapper = styled.div`
  background-color: ${({ theme }) => theme["gray-100"]};
  padding: 40px;
  border-radius: 6px;  
`

export const PaymentTitle = styled.div`
  display: flex;
  align-items: start;
  gap: 0.5rem;
  margin-bottom: 2rem;

  svg {
    color: ${({ theme }) => theme["purple-300"]}
  }

  div {
    display: flex;
    flex-direction: column;
  }

  h5 {
    font-size: 1rem;
    font-weight: 700;
    margin-bottom: 4px;
  }

  h3 {
    font-size: 0.875rem;
    font-weight: normal;
  }
`

export const PaymentButtons = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    font-size: 0.875rem;
    color: ${({ theme }) => theme["brown-300"]};
    padding: 16px;
    border-radius: 6px;

    display: flex;

    cursor: pointer;

    svg {
      color: ${({ theme }) => theme["purple-300"]};
      margin-right: 12px;
    }

    outline: 0;
    min-width: 180px;

    @media (max-width: 768px) {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px
  }

`

export const PaymentLabel = styled.label`
  button {
    background-color: ${({ theme }) => theme["gray-300"]};
    border: 1px solid transparent;
  }

  input:checked + button {
    background-color: ${({ theme }) => theme["purple-100"]};
    border: 1px solid ${({ theme }) => theme["purple-300"]};
  }
`

export const CartWrapper = styled.div`
  border-radius: 6px 44px 6px 44px ;
  background-color: ${({ theme }) => theme["gray-100"]};
  padding: 24px 40px 40px 40px;
`

export const CoffeesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  hr{
    border: 1px solid ${({ theme }) => theme["gray-300"]};
  }
`

export const CoffeeInfos = styled.div`
  display: flex;  

  img {
    margin-right: 20px;
    @media (max-width: 768px) {
      width: 56px;
    }
  }

  h5 {
    font-size: 1rem;
    font-weight: normal;
  }

  
`

export const CoffeeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 24px 0px;
  gap: 24px;
`

export const PriceWrapper = styled.div`
  padding: 24px 0px;

  h6 {
    font-size: 0.875rem;
    font-weight: normal;
  }

  h5 {
    font-size: 1rem;
    font-weight: normal
  }

  h3 {
    font-size: 1.25rem;
  }

  div {
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
    gap: 12;
  }
`

export const ButtonWrapper = styled.div`
  button {
    outline: none;
    border: none;
    background-color: ${({ theme }) => theme["yellow-300"]};
    color: ${({ theme }) => theme["white"]};
    border-radius: 6px;
    font-size: 0.875rem;
    font-weight: 700;
    width: 100%;
    padding: 12px 0px;
    cursor: pointer;

    :focus {
      box-shadow: 0 0 0 2px ${({ theme }) => theme['yellow-500']};
    }

  }
`

export const CoffeeContent = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;

  h5 {
    font-weight: 400;
  }
`

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 8px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: start;
  }
`

export const RemoveButtonWrapper = styled.div`
  button {
    outline: none;
    border: none;
    background-color: ${({ theme }) => theme["gray-300"]};
    color: ${({ theme }) => theme["brown-300"]};
    border-radius: 6px;
    font-size: 0.875rem;
    padding: 8px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  svg {
    color: ${({ theme }) => theme["purple-300"]};
    margin-right: 4px;
  }
`

export const FinishContainer = styled.div`
  max-width: 70rem;
`

export const FinishInfos = styled.div``

export const FinishOrderTitle = styled.div`
  h4 {
    line-height: 130%;
    font-family: 'Baloo 2', cursive;
    font-size: 2rem;
    font-weight: bold;
    color: ${({ theme }) => theme["yellow-500"]};
  }
  h6 {
    font-size: 1.25rem;
    font-weight: normal;
  }
  margin-bottom: 40px;
`

export const FinishOrderItems = styled.div`
  padding: 1px;
  background-image: linear-gradient(to right, ${({ theme }) => theme["yellow-300"]}, ${({ theme }) => theme["purple-300"]});
  border-radius: 6px 36px 6px 36px;
  
  & > div {
    display: flex;
    flex-direction: column;
    background-color: ${({ theme }) => theme["background"]};
    padding: 40px;
    gap: 32px;
    border-radius: 4px 34px 4px 34px;
  }

  & > div > div {
    display: flex;
    align-items: center;
    
    span {
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius:50%;
      min-height: 32px;
      min-width: 32px;
      color: ${({ theme }) => theme["white"]};
      margin-right: 12px;
    }

    :nth-child(1) span {
      background-color: ${({ theme }) => theme["purple-300"]};
    }
    :nth-child(2) span {
      background-color: ${({ theme }) => theme["yellow-300"]};
    }
    :nth-child(3) span {
      background-color: ${({ theme }) => theme["yellow-500"]};
    }
  }
`

export const FinishWrapper = styled.div`
  padding: 40px 0px;
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: end;
  max-width: 70rem;

  @media (max-width: 768px) {
    flex-direction: column;
    /* padding: 16px; */
    align-items: center;
    img {
      margin-top: 16px;
      width: 284px;
    }
  }
`