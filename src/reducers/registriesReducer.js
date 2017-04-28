import { ADD_WORKOUT } from '../actions';
/**
 * Reducer for the workout registries, these registries are different than
   the form representation for a workout. Here we have objects just with the
   value of each field(duration, date, activity) and not an object.
 * Array
 */
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
