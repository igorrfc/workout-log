import { combineReducers } from 'redux';

import formReducer from './formReducer';
import registriesReducer from './registriesReducer';

export default combineReducers({
  form: formReducer,
  registries: registriesReducer,
});
