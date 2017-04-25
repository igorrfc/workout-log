import { CHANGE_FORM_FIELD, FAILED_VALIDATION_FORM_FIELD } from '../actions';

const createProps = (defaultValue = '') =>({
  value: defaultValue,
  error: false,
  isValid: false,
});

const initialState = {
  duration: createProps(),
  activity: createProps('jogging'),
  date: createProps(),
};

/**
 * Reducer for the WorkoutForm, each input field is an object with the validation
   properties and its value.
 * Object
*/
export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FORM_FIELD:
      return {
        ...state,
        [action.field.name]: {
          ...state[action.field.name],
          error: action.field.error,
          isValid: !action.field.error,
          value: action.field.value,
        },
      };
    case FAILED_VALIDATION_FORM_FIELD:
      return {
        ...state,
        ...(action.validations.reduce((acc, cur) => ({
          ...acc,
          [cur.name]: {
            ...state[cur.name],
            error: cur.error,
            isValid: !cur.error,
          },
        }), {})),
      };
    default:
      return state;
  }
};
