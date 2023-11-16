import React from 'react';
import {AuthProvider} from './AuthProvider';
import Routes from '../Routes';

const Prodivers = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};

export default Prodivers
