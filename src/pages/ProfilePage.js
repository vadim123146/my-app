import React from 'react';
import UserScreen from '../components/UserScreen';
import Navigation from '../components/Navigation';
import { useNavigate } from 'react-router-dom';

const ProfilePage = ({ token, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  return (
    <div>
      <Navigation showProfile={true} onLogout={handleLogout} />
      <UserScreen token={token} />
    </div>
  );
};

export default ProfilePage;



