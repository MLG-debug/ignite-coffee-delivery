import styled from 'styled-components'

export const CoffeeContainer = styled.div`
  max-width: 256px;
  background-color: ${({ theme }) => theme['gray-100']};
  padding: 20px 24px;
  border-radius: 6px 36px 6px 36px;
`

export const CoffeeImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  margin-top: -50px;
`

export const TypesWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 16px;

  span {
    font-size: 10px;
    font-weight: bold;
    text-transform: uppercase;

    color: ${({ theme }) => theme['yellow-500']};
    background-color: ${({ theme }) => theme['yellow-100']};

    padding: 4px 8px;
    border-radius: 100px;
    margin: 4px;
    white-space: nowrap;
  }
`

export const CoffeeName = styled.h4`
  font-family: 'Baloo 2', cursive;
  font-size: 20px;
  text-align: center;
  color: ${({ theme }) => theme['brown-400']};
`

export const CoffeeDescription = styled.h6`
  font-size: 14px;
  text-align: center;
  color: ${({ theme }) => theme['brown-200']};
  font-weight: normal;
  padding-bottom: 20px;
  padding-top: 6px;
`

export const BuyWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const PriceWrapper = styled.div`
  font-family: 'Baloo 2', cursive;
  color: ${({ theme }) => theme['brown-400']};

  span {
    font-size: 14px;
    margin-right: 4px;
  }

  strong {
    font-size: 24px;
    font-weight: bold;
  }
`

export const QuantityWrapper = styled.div`
  background-color: ${({ theme }) => theme['gray-300']};
  border-radius: 6px;

  span {
    color: ${({ theme }) => theme['brown-400']};
    margin-left: 6px;
    margin-right: 6px;
  }

  button {
    outline: none;
    border: none;
    background-color: transparent;
    color: ${({ theme }) => theme['purple-300']};
    font-size: 20px;
    cursor: pointer;

    width: 36px;
    height: 36px;

    &:focus {
      border: none;
      outline: 2px solid ${({ theme }) => theme['purple-300']};
      border-radius: 6px;
    }
  }
`

export const BuyButton = styled.button`
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 8px;
  background-color: ${({ theme }) => theme['purple-300']};
  color: ${({ theme }) => theme.white};
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme['purple-500']};
  }

  &:focus {
    outline: 2px solid ${({ theme }) => theme['purple-300']};
  }
`
