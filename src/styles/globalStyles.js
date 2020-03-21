import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
* {
  font-family: 'Baloo 2', cursive;
}
body {
  font-family: 'Baloo 2', cursive;
  background: rgb(${props => props.theme.backgroundColor});
}`;

export default GlobalStyles;
