import styled from 'styled-components'

export const CoffeesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
`
export const CoffeesContainer = styled.div`
  h1 {
    font-size: 32px;
    font-family: 'Baloo 2', cursive;
    color: ${({ theme }) => theme['brown-400']};

    margin-bottom: 34px;
  }
`
