// BotCard.js
import React from 'react';

const BotCard = ({ bot, onBotSelect, onBotRelease, onBotDischarge }) => {
  const handleBotSelect = () => {
    onBotSelect(bot);
  };

  const handleBotRelease = () => {
    onBotRelease(bot);
  };

  const handleBotDischarge = () => {
    onBotDischarge(bot.id);
  };

  return (
    <div>
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p>Health: {bot.health}</p>
      <p>Damage: {bot.damage}</p>
      <p>Armor: {bot.armor}</p>
      <button onClick={handleBotSelect}>Enlist</button>
      <button onClick={handleBotRelease}>Release</button>
      <button onClick={handleBotDischarge}>Discharge</button>
    </div>
  );
};

export default BotCard;
