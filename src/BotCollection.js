import React, { useState, useEffect } from 'react';

const BotCollection = () => {
  const [robots, setRobots] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/bots')
      .then((response) => response.json())
      .then(data=> setRobots(data))
      .catch(err => console.log(err))
},[]);

  console.log('Robots in state:', robots);

  return (
    <div>
      <h1>Your Robots</h1>
      {robots.length === 0 ? (
        <p>Loading robots...</p>
      ) : (
        <ul>
          {robots.map((robot) => (
            <li key={robot.id}>
              <h3>{robot.name}</h3>
              <p>{robot.health}</p>
              <p>{robot.damage}</p>
              <p>{robot.armor}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BotCollection;
