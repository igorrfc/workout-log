import React from 'react';
import { PropTypes } from 'prop-types';

const activities = [
  {
    value: 'jogging',
    name:  'Corrida',
  },
  {
    value: 'gym',
    name:  'Academia',
  },
];

const handleChange = (updateFormField) => (event) => updateFormField(event.target.name, event.target.value);

const WorkoutForm = ({ form, updateFormField, addWorkout }) => (
  <form action='javascript:void(0);'>
    <input
      type='text'
      name='duration'
      onChange={handleChange(updateFormField)}
      value={form.duration}
    />
    <select name='activity' onChange={handleChange(updateFormField)} value={form.activity} >
      {activities.map((activity, index) =>
        <option key={`activity-option-${index}`} value={activity.value}>{activity.name}</option>
      )}
    </select>
    <input type='text' name='date' onChange={handleChange(updateFormField)} value={form.date} />
    <input type='submit' value='Add' onClick={ () => addWorkout(form) } />
  </form>
);

WorkoutForm.propTypes = {
  form: PropTypes.object.isRequired,
  updateFormField: PropTypes.func.isRequired,
  addWorkout: PropTypes.func.isRequired,
};

export default WorkoutForm;
