export const ADD_WORKOUT = 'workouts/ADD_WORKOUT';
export const CHANGE_FORM_FIELD = 'form/CHANGE_FORM_FIELD';

export const addWorkout = (workout) => ({ type: ADD_WORKOUT, workout });

export const updateFormField = (fieldName, fieldValue) => ({
  type: CHANGE_FORM_FIELD,
  field: {
    name: fieldName,
    value: fieldValue,
  },
});
