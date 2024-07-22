import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const AddScorePopup = () => {
  const showModal = useSelector((state) => state.ui.showModal);
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [score, setScore] = useState('');

  const toggleModal = () => {
    dispatch({ type: 'TOGGLE_MODAL' });
  };

  const addScore = () => {
    dispatch({
      type: 'ADD_SCORE',
      payload: { username, score },
    });
    toggleModal();
  };

  return (
    showModal && (
      <div className="modal">
        <h2>Add Score</h2>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="MM:SS::MSS"
          value={score}
          onChange={(e) => setScore(e.target.value)}
        />
        <button onClick={addScore}>Add</button>
        <button onClick={toggleModal}>Close</button>
      </div>
    )
  );
};

export default AddScorePopup;
