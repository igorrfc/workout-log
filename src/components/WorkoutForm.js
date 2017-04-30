import React from 'react';
import { PropTypes } from 'prop-types';
import MaskedInput from 'react-masked-field';

import { standardizeDate } from '../decorators/date';
import { validateForm, bindValidateFormCallback, hasErrors } from '../validations/workoutForm';

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
  (event) => {
    if (event.target.name === 'date') {
      return updateFormField(event.target.name, standardizeDate(event.target.value), cb);
    }

    return updateFormField(event.target.name, event.target.value, cb);
  };

const onSubmit = (component, addWorkout, form, registries, validateFormFields) => {
  const { date, duration } = form;
  const validation = bindValidateFormCallback(registries, form, validateForm);
  const errors = validateFormFields(form, validation).validations;

  if (!hasErrors(errors)) {
    const { duration, date, activity } = form;
    addWorkout({
      duration: duration.value,
      date: date.value,
      activity: activity.value,
    });
  }
};

const WorkoutForm = ({ form, updateFormField, addWorkout, registries, validateFormFields }) => (
  <form action='javascript:void(0);'>
    <div className={`row marg-bottom-10`}>
      <div className={`row`}>
        <div className={`col-md-8 col-md-offset-2 col-xs-8 col-xs-offset-2`}>
          <label htmlFor='date'>Data: </label>
        </div>
      </div>

      <div className={`row`}>
        <div className={`col-md-8 col-md-offset-2 col-xs-8 col-xs-offset-2`}>
          <MaskedInput
            type='text'
            name='date'
            className={`form-control col-xs-12`}
            onChange={handleChange(updateFormField)}
            onBlur={handleChange(updateFormField, validateForm.date)}
            mask='99/99/9999'
            value={form.date.value}
          />
        </div>
      </div>

      <div className={`row`}>
        <div className={`col-md-8 col-md-offset-2 col-xs-8 col-xs-offset-2`}>
          <span className={`error`}>{form.date.error}</span>
        </div>
      </div>
    </div>

    <div className={`row marg-bottom-10`}>
      <div className={`row`}>
        <div className={`col-md-8 col-md-offset-2 col-xs-8 col-xs-offset-2`}>
            <label htmlFor='duration'>Duração: </label>
        </div>
      </div>

      <div className={`row`}>
        <div className={`col-md-8 col-md-offset-2 col-xs-8 col-xs-offset-2`}>
          <MaskedInput
            type={'text'}
            name={'duration'}
            className={`form-control col-xs-12`}
            onChange={handleChange(updateFormField)}
            onBlur={handleChange(updateFormField, validateForm.duration(registries, form))}
            mask='99:99:99'
            value={form.duration.value}
          />
        </div>
      </div>

      <div className={`row`}>
        <div className={`col-md-8 col-md-offset-2 col-xs-8 col-xs-offset-2`}>
          <span className={`error`}>{form.duration.error}</span>
        </div>
      </div>
    </div>

    <div className={`row marg-bottom-20`}>
      <div className={`row`}>
        <div className={`col-md-8 col-md-offset-2 col-xs-8 col-xs-offset-2`}>
          <label htmlFor='activity'>Atividade realizada: </label>
        </div>
      </div>

      <div className={`row`}>
        <div className={`col-md-8 col-md-offset-2 col-xs-8 col-xs-offset-2`}>
          <select name='activity' onChange={handleChange(updateFormField)} value={form.activity.value} className={`col-xs-12`}>
            {ACTIVITIES.map((activity, index) =>
              <option
                key={`activity-option-${index}`}
                value={activity.value}>{activity.name}
              </option>
            )}
          </select>
        </div>
      </div>
    </div>

    <div className={`row`}>
      <div>
        <input
          className={`btn btn-success col-md-8 col-md-offset-2 col-xs-8 col-xs-offset-2`}
          type='submit'
          value='Adicionar'
          onClick={ () => onSubmit(this, addWorkout, form, registries, validateFormFields) }
        />
      </div>
    </div>
  </form>
);

WorkoutForm.propTypes = {
  form: PropTypes.object.isRequired,
  updateFormField: PropTypes.func.isRequired,
  addWorkout: PropTypes.func.isRequired,
};

export default WorkoutForm;
