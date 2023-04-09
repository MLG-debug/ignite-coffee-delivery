import styled from 'styled-components'

export const CartButton = styled.button`
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 8px;
  background-color: ${({ theme }) => theme['yellow-100']};
  color: ${({ theme }) => theme['yellow-500']};
  border-radius: 6px;
  cursor: pointer;

  transition: 200ms;

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme['yellow-500']};
  }

  span {
    content: '';
    position: absolute;
    transform: translate(16px, -16px);

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 0.75rem;
    width: 20px;
    height: 20px;
    background-color: ${({ theme }) => theme['yellow-500']};
    color: ${({ theme }) => theme.white};
    border-radius: 50%;
  }
`

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100px;
  max-width: 70rem;
  margin: 0rem auto;
`

export const InfosWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

export const HeaderWrapper = styled.div`
  flex: 1;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  span {
    cursor: pointer;
  }
`

export const AddressContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 6px;
  font-size: 0.875rem;

  gap: 4px;

  background-color: ${({ theme }) => theme['purple-100']};
  color: ${({ theme }) => theme['purple-300']};
`
