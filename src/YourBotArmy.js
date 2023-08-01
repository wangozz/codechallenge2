import React, { useState } from 'react';

const YourBotArmy = () => {
  const [botArmy, setBotArmy] = useState([]);


  const handleEquip = (bot) => {
    setBotArmy((prevArmy) => [...prevArmy, bot]);
  };

  
  const handleFire = (botId) => {
    setBotArmy((prevArmy) => prevArmy.filter((bot) => bot.id !== botId));
  };

  return (
    <div>
      <h1>Your Bot Army</h1>
      {botArmy.length === 0 ? (
        <p>No bots in the army. Equip some bots from the collection!</p>
      ) : (
        <ul>
          {botArmy.map((bot) => (
            <li key={bot.id}>
              <h3>Name: {bot.name}</h3>
              <p>Health: {bot.health}</p>
              <p>Damage: {bot.damage}</p>
              <p>Armor: {bot.armor}</p>
              <p>Level: {bot.bot_class}</p>
              <button onClick={() => handleEquip(bot)}>Equip</button>
              <button onClick={() => handleFire(bot.id)}>Fire</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default YourBotArmy;
