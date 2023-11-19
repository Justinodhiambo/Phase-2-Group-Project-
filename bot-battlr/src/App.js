import React, { useState, useEffect } from 'react';
import BotCollection from './Components/BotCollection';
import YourBotArmy from './Components/YourBotArmy';
import api from './services/api';



const App = () => {
  const [botArmy, setBotArmy] = useState([]);

  const handleBotSelect = (selectedBot) => {
    if (!botArmy.some((bot) => bot.id === selectedBot.id)) {
      setBotArmy([...botArmy, selectedBot]);
    }
  };

  const handleBotRelease = (releasedBot) => {
    const updatedArmy = botArmy.filter((bot) => bot.id !== releasedBot.id);
    setBotArmy(updatedArmy);
  };

  const handleBotDischarge = async (botId) => {
    // Perform the delete request to remove the bot 
    try {
      await api.delete(`/bots/${botId}`);
      // Remove the bot from the frontend
      const updatedArmy = botArmy.filter((bot) => bot.id !== botId);
      setBotArmy(updatedArmy);
    } catch (error) {
      console.error('Error discharging bot:', error);
    }
  };

  return (
    <div>
      <h1>Bot Battlr</h1>
      <BotCollection onBotSelect={handleBotSelect} />
      <YourBotArmy
        army={botArmy}
        onBotRelease={handleBotRelease}
        onBotDischarge={handleBotDischarge}
      />
    </div>
  );
};

export default App;
