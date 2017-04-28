import React from 'react';
import { PropTypes } from 'prop-types';
import MaskedInput from 'react-text-mask';

import { validateForm, bindValidateFormCallback } from '../validations/workoutForm';

const ACTIVITIES = [
  {
    value: 'jogging',
    name:  'Corrida',
  },
  {
    value: 'gym',
    name:  'Academia',
  },
];

const handleChange = (updateFormField, cb = null) =>
  (event) => updateFormField(event.target.name, event.target.value, cb);

const onSubmit = (component, addWorkout, form, registries, validateFormFields) => {
  const { date, duration } = form;
  const validation = bindValidateFormCallback(registries, form, validateForm);

  if (date.isValid && duration.isValid) {
    const { duration, date, activity } = form;
    addWorkout({
      duration: duration.value,
      date: date.value,
      activity: activity.value,
    });
  } else {
    validateFormFields(form, validation);
  }
};

const WorkoutForm = ({ form, updateFormField, addWorkout, registries, validateFormFields }) => (
  <form action='javascript:void(0);'>
    <label htmlFor='duration'>Duração: </label>
    <input
      type={'text'}
      name={'duration'}
      onChange={handleChange(updateFormField)}
      onBlur={handleChange(updateFormField, validateForm.duration(registries, form))}
      value={form.duration.value}
    />
    <span>{form.duration.error}</span>

    <label htmlFor='activity'>Atividade realizada: </label>
    <select name='activity' onChange={handleChange(updateFormField)} value={form.activity.value}>
      {ACTIVITIES.map((activity, index) =>
        <option
          key={`activity-option-${index}`}
          value={activity.value}>{activity.name}
        </option>
      )}
    </select>

    <label htmlFor='date'>Data: </label>
    <input
      type='text'
      name='date'
      onChange={handleChange(updateFormField)}
      onBlur={handleChange(updateFormField, validateForm.date)}
      value={form.date.value}
    />
    <span>{form.date.error}</span>

    <input
      type='submit'
      value='Add'
      onClick={ () => onSubmit(this, addWorkout, form, registries, validateFormFields) }
    />
  </form>
)

WorkoutForm.propTypes = {
  form: PropTypes.object.isRequired,
  updateFormField: PropTypes.func.isRequired,
  addWorkout: PropTypes.func.isRequired,
};

export default WorkoutForm;
