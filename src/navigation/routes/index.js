import React from 'react';
import { AuthProvider } from '../authProvider';
import Routes from './Routes';

const MainRoute = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default MainRoute