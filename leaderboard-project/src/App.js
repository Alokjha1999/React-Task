import React from 'react';
import { useDispatch } from 'react-redux';
import Leaderboard from './components/Leaderboard';
import AddScorePopup from './components/AddScorePopup';
import Footer from './components/footer';
import './App.css';

function App() {
  const dispatch = useDispatch();

  const openModal = () => {
    dispatch({ type: 'TOGGLE_MODAL' });
  };

  return (
    <div className="App">
      <header>
        <h1>Leaderboard App</h1>
      </header>
      <main>
        <Leaderboard />
        <button onClick={openModal}>Add Score</button>
        <AddScorePopup />
      </main>
      <Footer />
    </div>
  );
}

export default App;
