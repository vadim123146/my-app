import React, { useState } from 'react';
import { login } from '../services/api';
import { useNavigate } from 'react-router-dom';
import   '../styles/login.css';

const LoginScreen = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await login(email, password);

    if (data.success) {
      onLogin(data.data.token);
      navigate('/profile');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Sign in</h1>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter email"
        required
      />
      <div className='label'>Enter email</div>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <div className='label'>Enter password</div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginScreen;
