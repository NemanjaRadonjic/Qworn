import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    font-family: 'Baloo 2', cursive;
  }
  body {
    font-family: 'Baloo 2', cursive;
    background: rgb(${props => props.theme.backgroundColor});
    overflow-x: hidden;
  }
  a:-webkit-any-link {
    text-decoration: none;
    color: inherit;
    height: 100%;
    width: 100%;
  }
  /* width */
  ::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: rgb(${props => props.theme.backgroundColor});
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgb(${props => props.theme.mainColor});
    border-radius: 5px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: rgb(${props => props.theme.secondaryColor});
  }
`;

export default GlobalStyles;
