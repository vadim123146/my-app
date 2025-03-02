import React from 'react';

const Navigation = ({ showSignIn, showProfile, onLogout }) => {
  return (
    <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
      <button onClick={() => window.location.href = '/'}>About us</button>
      {showSignIn && <button onClick={() => window.location.href = '/login'}>Sign in</button>}
      {showProfile && <button onClick={() => window.location.href = '/profile'}>Profile</button>}
      {onLogout && <button onClick={onLogout}>Sign out</button>}
    </div>
  );
};

export default Navigation;



