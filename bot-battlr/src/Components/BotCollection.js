import React, { useState, useEffect } from 'react';
import BotCard from './BotCard';
import api from '../services/api';

const BotCollection = ({ onBotSelect }) => {
  const [bots, setBots] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/bots');
        setBots(response.data);
      } catch (error) {
        console.error('Error fetching bots:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Bot Collection</h2>
      {bots.map((bot) => (
        <BotCard key={bot.id} bot={bot} onBotSelect={onBotSelect} />
      ))}
    </div>
  );
};

export default BotCollection;
