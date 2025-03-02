import React from 'react';
import InitialScreen from '../components/InitialScreen';
import Navigation from '../components/Navigation';

const HomePage = () => {
  return (
    <div>
      <Navigation showSignIn={true} />
      <InitialScreen />
    </div>
  );
};

export default HomePage;


