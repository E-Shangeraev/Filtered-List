import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './components/Header';
import { App, Main } from './styled';

export const Layout = () => {
  return (
    <App>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </App>
  );
};
