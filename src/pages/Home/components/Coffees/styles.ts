import styled from 'styled-components'

export const CoffeesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;

  h1 {
    font-size: 32px;
    font-family: 'Baloo 2', cursive;
    color: ${({ theme }) => theme['brown-400']};

    margin-bottom: 34px;
  }
`
export const CoffeesWrapper = styled.div`
  max-width: 70rem;
`

export const ItemsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* justify-content: center; */
  align-items: center;
  gap: 32px;
`
