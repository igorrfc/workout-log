export const ADD_WORKOUT = 'workouts/ADD_WORKOUT';
export const CHANGE_FORM_FIELD = 'form/CHANGE_FORM_FIELD';
export const FAILED_VALIDATION_FORM_FIELD = 'form/FAILED_VALIDATION_FORM_FIELD';

export const addWorkout = (workout) => ({ type: ADD_WORKOUT, workout });

export const updateFormField = (fieldName, fieldValue, validationCallback = null) => ({
  type: CHANGE_FORM_FIELD,
  field: {
    name: fieldName,
    value: fieldValue,
    error: validationCallback ? validationCallback(fieldValue) : false,
  },
});

export const validateFormFields = (form, validateMapCallback) => {
  const response = [];
  let value = null;

  for (let key in form) {
    value = form[key].value;
    response.push({
      name: key,
      error: (validateMapCallback[key] ? validateMapCallback[key](value) : false),
    });
  }

  return {
    type: FAILED_VALIDATION_FORM_FIELD,
    validations: response,
  };
};
