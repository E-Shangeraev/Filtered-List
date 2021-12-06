import React from 'react';
import { ThemeProvider } from 'styled-components';
import { LayoutContainer } from 'app/features/Layout';
import theme, { GlobalStyle } from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <LayoutContainer />
    </ThemeProvider>
  );
};

export default App;
