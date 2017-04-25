import React from 'react';
import { PropTypes } from 'prop-types';
import MaskedInput from 'react-text-mask';

import { validateForm } from '../validations/workoutForm';

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

const handleChange = (updateFormField) => (event) => updateFormField(event.target.name, event.target.value);

const onSubmit = (component, addWorkout, form) => {
  if (validateForm(component, form)) {
    addWorkout(form);
  }
};

class WorkoutForm extends React.Component {
  constructor() {
    super();
    this.state = {
      errors: {
        duration: '',
        date: '',
      },
    };
  };

  render() {
    const { form, updateFormField, addWorkout, registries } = this.props;

    return (
      <form action='javascript:void(0);'>
        <label htmlFor='duration'>Duração: </label>
        <input
          type={'text'}
          name={'duration'}
          onChange={handleChange(updateFormField)}
          value={form.duration}
        />
        <span>{ this.state.errors.duration }</span>

        <label htmlFor='activity'>Atividade realizada: </label>
        <select name='activity' onChange={handleChange(updateFormField)} value={form.activity} >
          {ACTIVITIES.map((activity, index) =>
            <option key={`activity-option-${index}`} value={activity.value}>{activity.name}</option>
          )}
        </select>

        <label htmlFor='date'>Data: </label>
        <input
          type='text'
          name='date'
          onChange={handleChange(updateFormField)}
          value={form.date}
        />
        <span>{ this.state.errors.date }</span>

        <input type='submit' value='Add' onClick={ () => onSubmit(this, addWorkout, form) } />
      </form>
    );
  }
}

WorkoutForm.propTypes = {
  form: PropTypes.object.isRequired,
  updateFormField: PropTypes.func.isRequired,
  addWorkout: PropTypes.func.isRequired,
};

export default WorkoutForm;
