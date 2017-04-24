import { CHANGE_FORM_FIELD } from '../actions';

const initialState = {
  duration: '',
  activity: 'jogging',
  date: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FORM_FIELD:
      return {
        ...state,
        [action.field.name]: action.field.value,
      };
    default:
      return state;
  }
};
