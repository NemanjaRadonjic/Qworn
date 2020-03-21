import React from 'react';
import { render } from 'react-dom';

import App from './components/App';

import CssReset from './styles/cssReset';
import GlobalStyles from './styles/globalStyles';

import { ThemeProvider } from 'styled-components';
import { theme } from './styles/themes';

render(
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <CssReset />
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
