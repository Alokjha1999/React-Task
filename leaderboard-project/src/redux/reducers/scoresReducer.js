const initialState = {
  scores: [
    { username: 'Player1', score: '01:23:456' },
    { username: 'Player2', score: '02:34:567' },
    // Add more dummy data
  ],
  showModal: false,
};

const scoresReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_SCORE':
      return {
        ...state,
        scores: [...state.scores, action.payload].sort((a, b) => a.score.localeCompare(b.score)).slice(0, 10),
      };
    case 'TOGGLE_MODAL':
      return {
        ...state,
        showModal: !state.showModal,
      };
    default:
      return state;
  }
};

export default scoresReducer;
