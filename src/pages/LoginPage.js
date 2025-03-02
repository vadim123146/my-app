import React from 'react';
import LoginScreen from '../components/LoginScreen';
import Navigation from '../components/Navigation';

const LoginPage = ({ onLogin }) => {
  return (
    <div>
      <Navigation showSignIn={true} />
      <LoginScreen onLogin={onLogin} />
    </div>
  );
};

export default LoginPage;


