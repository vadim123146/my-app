import React, { useEffect, useState } from 'react';
import { getProfile, getAuthor, getQuote } from '../services/api';
import Navigation from './Navigation';
import "../styles/userscreen.css";

const UserScreen = ({ token, onLogout }) => {
  const [profile, setProfile] = useState(null);
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      const data = await getProfile(token);
      setProfile(data.data);
    };

    fetchProfile();
  }, [token]);

  const handleUpdate = async () => {
    setLoading(true);
    try {
      const authorData = await getAuthor(token);
      const quoteData = await getQuote(token, authorData.data.authorId);
      setQuote(`${authorData.data.name}: ${quoteData.data.quote}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Profile</h1>
      <div className='wrap'>
      <div>
        <img className='img' src='main.jpg'>
        </img>
      </div>
      <div className='right'>
      {profile && <h3>Welcome, {profile.fullname}!</h3>}
      <button onClick={handleUpdate} disabled={loading} className='btn'>
        {loading ? 'Loading...' : 'Update'}
      </button>
      </div>
      </div>
      {quote && <p>{quote}</p>}
    </div>
  );
};

export default UserScreen;
