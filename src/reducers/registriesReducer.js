import { ADD_WORKOUT } from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case ADD_WORKOUT:
      return [
        ...state,
        action.workout,
      ];
    default:
      return state;
  }
};
