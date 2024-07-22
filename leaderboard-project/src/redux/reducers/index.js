import { combineReducers } from 'redux';

const initialScoresState = {
  scores: [
    { username: 'Alice', score: '12:34::567' },
    { username: 'Bob', score: '10:22::345' },
    { username: 'Charlie', score: '11:45::123' },
    { username: 'David', score: '13:30::890' },
    { username: 'Eve', score: '09:15::678' },
    { username: 'Frank', score: '14:20::456' },
    { username: 'Grace', score: '08:10::234' },
    { username: 'Heidi', score: '12:50::789' },
    { username: 'Ivan', score: '10:05::123' },
    { username: 'Julie', score: '11:11::456' }
  ],
};

const scoresReducer = (state = initialScoresState, action) => {
  switch (action.type) {
    case 'ADD_SCORE':
      const newScores = [...state.scores, action.payload];
      newScores.sort((a, b) => a.score.localeCompare(b.score)); 
      return {
        ...state,
        scores: newScores.slice(0, 10), // Keep top 10 scores
      };
    default:
      return state;
  }
};

const initialUIState = {
  showModal: false,
};

const uiReducer = (state = initialUIState, action) => {
  switch (action.type) {
    case 'TOGGLE_MODAL':
      return {
        ...state,
        showModal: !state.showModal,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  scores: scoresReducer,
  ui: uiReducer,
});

export default rootReducer;
