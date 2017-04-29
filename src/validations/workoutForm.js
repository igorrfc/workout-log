import moment from 'moment';

import { filterByDate, isAfterCurrentDate } from '../queries/date';
import { totalWorkoutsDuration } from '../queries/workoutLog';

const isEmptyMaskValue = (value) => value.includes('_');

export const hasErrors = (fields) => {
  for (let field of fields) {
    if (field.error) {
      return true;
    }
  }

  return false;
};

export const bindValidateFormCallback = (registries, form, obj) => ({
  date: obj.date,
  duration: obj.duration(registries, form),
});

export const validateForm = {
  date: (value) => {
    let date = moment(value);

    if (value === '' || isEmptyMaskValue(value)) {
      return 'Campo obrigatório';
    }

    if (!date.isValid()) {
      return 'Data inválida';
    }

    if (isAfterCurrentDate(value)) {
      return 'Você ainda não pode praticar exercícios no futuro';
    }

    return false;
  },

  duration: (registries, form) => (value) => {
    const ENTIRE_DAY = 24;
    const workoutAmount = moment.duration(value).asHours() + totalWorkoutsDuration(
      filterByDate(registries, form.date.value)
    );

    if (value === '' || isEmptyMaskValue(value)) {
      return 'Campo obrigatório';
    }

    if (workoutAmount > ENTIRE_DAY) {
      return 'O dia só possui 24h, como você já treinou mais que isso?';
    };

    return false;
  },
};
