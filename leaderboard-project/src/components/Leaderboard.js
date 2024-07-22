import React from 'react';
import { useSelector } from 'react-redux';
import './leaderboard.css';

const Leaderboard = () => {
  const scores = useSelector((state) => state.scores.scores);

  return (
    <div className="leaderboard">
      <h1>Top 10 Scores</h1>
      <ul>
        {scores.slice(0, 10).map((score, index) => (
          <li key={index} className="new-entry">
            <span>{index + 1}. {score.username}: {score.score}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
