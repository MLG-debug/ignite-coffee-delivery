import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  } 

  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme['brown-300']};
    -webkit-font-smoothing: antialiased;
  }  

  :focus {
    border-radius: 6px;
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme['purple-300']};
  }

  body, input, textarea, button {
    /* font-family: 'Baloo 2', cursive; */
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`
