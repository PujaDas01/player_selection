import React, { useState } from 'react';
import './App.css';

const players = [
  { id: 1, name: 'Player 1' },
  { id: 2, name: 'Player 2' },
  { id: 3, name: 'Player 3' },
  { id: 4, name: 'Player 4' },
  { id: 5, name: 'Player 5' },
  { id: 6, name: 'Player 6' },
  { id: 7, name: 'Player 7' },
  { id: 8, name: 'Player 8' },
  { id: 9, name: 'Player 9' },
  { id: 10, name: 'Player 10' },
];

const App = () => {
  const [selectedPlayers, setSelectedPlayers] = useState([]);

const handlePlayerSelection = (player) => {
  const isSelected = selectedPlayers.find((selectedPlayer) => selectedPlayer.id === player.id);

  if (isSelected) {
    setSelectedPlayers((prevSelected) => prevSelected.filter((p) => p.id !== player.id));
  } else {
    setSelectedPlayers((prevSelected) => [...prevSelected, player]);
  }
};

return (
  <div className='container'>
    <h1>Player Selection App</h1>
    <h2>Available Players</h2>
    <ul>
      {players.map((player) => (
        <li key={player.id}>
          {player.name}
          <button onClick={() => handlePlayerSelection(player)}>
            {selectedPlayers.find((p) => p.id === player.id) ? 'Deselect' : 'Select'}
          </button>
        </li>
      ))}
    </ul>
    <h2>Selected Players</h2>
    <ul>
      {selectedPlayers.map((selectedPlayer) => (
        <li key={selectedPlayer.id}>{selectedPlayer.name}</li>
      ))}
    </ul>
    <h2>Team</h2>
    <ul className="team-list">
      {players.map((player) => (
        <li key={player.id} className={selectedPlayers.find((p) => p.id === player.id) ? '' : 'deselected'}>
          {player.name}
        </li>
      ))}
    </ul>
  </div>
);
}

export default App;