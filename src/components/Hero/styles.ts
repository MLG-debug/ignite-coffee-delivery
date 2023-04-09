import styled from 'styled-components'
import { heroBackground } from '../../constants/images'

export const HeroBackground = styled.div`
  background-image: url(${heroBackground});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
`

export const HeroContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 92px 0px;
  max-width: 70rem;
`
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const TitleWrapper = styled.div`
  h1 {
    font-family: 'Baloo 2';
    font-style: normal;
    font-weight: 800;
    font-size: 3rem;
    line-height: 130%;
    color: ${({ theme }) => theme['brown-700']};
    margin-bottom: 16px;
  }

  h4 {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 130%;
    color: ${({ theme }) => theme['brown-400']};
  }
`
export const HeroIconsWrapper = styled.div`
  display: grid;
  grid-template-columns: 300px 300px;
  gap: 20px;

  h6 {
    font-size: 1rem;
    font-weight: normal;
    color: ${({ theme }) => theme['brown-300']};
  }

  span {
    gap: 12px;
    display: flex;
    align-items: center;

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 8px;
      border-radius: 50%;
    }
    svg {
      color: ${({ theme }) => theme.white};
      /* border-radius: 50%; */
    }
    :nth-child(1) div {
      background-color: ${({ theme }) => theme['yellow-500']};
    }
    :nth-child(2) div {
      background-color: ${({ theme }) => theme['brown-300']};
    }
    :nth-child(3) div {
      background-color: ${({ theme }) => theme['yellow-300']};
    }
    :nth-child(4) div {
      background-color: ${({ theme }) => theme['purple-300']};
    }
  }
`
