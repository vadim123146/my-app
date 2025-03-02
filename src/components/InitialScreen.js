import React, { useEffect, useState } from 'react';
import { getInfo } from '../services/api';
import Navigation from './Navigation';

const InitialScreen = () => {
  const [info, setInfo] = useState('');

  useEffect(() => {
    const fetchInfo = async () => {
      const data = await getInfo();
      setInfo(data.data.info);
    };

    fetchInfo();
  }, []);

  return (
    <div>
       <p dangerouslySetInnerHTML={{ __html: info }} className='title'></p>
    </div>
  );
};

export default InitialScreen;

