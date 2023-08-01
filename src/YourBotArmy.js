import React, { useState, useEffect } from 'react';

const YourBotArmy = () => {
  const [botArmy, setBotArmy] = useState([]);
  const [allBots, setAllBots] = useState([]);

  useEffect(() => {
  
    fetch('http://localhost:3000/bots')
      .then((response) => response.json())
      .then((data) => setAllBots(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleEquip = (bot) => {
    setBotArmy((prevArmy) => [...prevArmy, bot]);
  };

  const handleFire = (botId) => {
    setBotArmy((prevArmy) => prevArmy.filter((bot) => bot.id !== botId));
  };

  return (
    <div>
      <h1>Your Bot Army</h1>
      {allBots.map((bot) => (
        <div key={bot.id}>
          <h3>Name: {bot.name}</h3>
          <p>Health: {bot.health}</p>
          <p>Damage: {bot.damage}</p>
          <p>Armor: {bot.armor}</p>
          <p>Level: {bot.bot_class}</p>
          {botArmy.find((b) => b.id === bot.id) ? (
            <button onClick={() => handleFire(bot.id)}>Fire</button>
          ) : (
            <button onClick={() => handleEquip(bot)}>Equip</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default YourBotArmy;
