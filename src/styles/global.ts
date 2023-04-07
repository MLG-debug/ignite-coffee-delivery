import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  } 

  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme['gray-300']};
    -webkit-font-smoothing: antialiased;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme['brown-300']};
  }

  body, input, textarea, button {
    font-family: 'Robot', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`
