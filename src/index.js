import React from 'react';
import { render } from 'react-dom';

import { BrowserRouter as Router } from 'react-router-dom';

import App from './components/App';

import CssReset from './styles/cssReset';
import GlobalStyles from './styles/globalStyles';

import { ThemeProvider } from 'styled-components';
import { theme } from './styles/themes';

render(
  <Router>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <CssReset />
      <App />
    </ThemeProvider>
  </Router>,
  document.getElementById('root')
);
