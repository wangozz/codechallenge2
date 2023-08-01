import React, { useState, useEffect } from 'react';
import './BotCollection.css'; 

const BotCollection = () => {
  const [robots, setRobots] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/bots')
      .then((response) => response.json())
      .then(data=> setRobots(data))
      .catch(err => console.log(err))
},[]);

  return (
    <div>
      <h1>Your Robots</h1>
      {robots.length === 0 ? (
        <p>Loading robots...</p>
      ) : (
        <ul>
          {robots.map((robot) => (
            <li key={robot.id}>
              <h3>Name:{robot.name}</h3>
              <p>Health:{robot.health}</p>
              <p>Damage:{robot.damage}</p>
              <p>Armor:{robot.armor}</p>
              <p>Level:{robot.bot_class}</p>
              <button>Equip</button>
              <button>Fire</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BotCollection;
