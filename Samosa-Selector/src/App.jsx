import './App.css';
import { useState } from 'react';


const App = () => {
  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const updateCount = () => setCount(count + multiplier);
  const upgrades = [
    { name: 'Double Stuffed 👯‍♀️', description: '2x per click', cost: 10 },
    { name: 'Party Pack 🎉', description: '5x per click', cost: 100 },
    { name: 'Full Feast 👩🏽‍🍳', description: '10x per click', cost: 1000 },
  ];

  return (
    <div className="App">
      <div className="header">
        <h1>Samosa Selector</h1>
        <h2>Count: {count}</h2>
      </div>
      <img src="https://thumbs.dreamstime.com/b/fresh-delicious-crispy-samosa-isolated-white-220143505.jpg" className="samosa" onClick={updateCount} />
      <h2>Upgrades</h2>
      <div className="container">
        {upgrades.map((upgrade, index) => (
          <div key={index} className="upgrade">
            <h3>{upgrade.name}</h3>
            <p>{upgrade.description}</p>
            <p>Cost: {upgrade.cost}</p>
            <button onClick={() => {
              if (count >= upgrade.cost) {
                setCount(count - upgrade.cost);
                setMultiplier(multiplier * (index + 2));
              }
            }}>Buy</button>
          </div>
        ))}

      </div>
    </div>
  )
}

export default App