//Action Types
export const ADD_TO_ANSWERS = "ADD_TO_ANSWERS";

const INITIAL_STATE = {
  answersList: [],
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_TO_ANSWERS:
      return {
        ...state,
        answersList: [...state.answersList, action.payload]
      }
    default:
      return state;
  }
}

//Action Creators
export const add_to_answers = (answer) => {
  return (dispatch) => {
    dispatch({
      type: ADD_TO_ANSWERS,
      payload: answer,
    });
  };
};