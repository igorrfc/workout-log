import moment from 'moment';
import _ from 'lodash';

import { filterByDate, isAfterCurrentDate } from '../queries/date';
import { totalWorkoutsDuration } from '../queries/workoutLog';

export const bindValidateFormCallback = (registries, form, obj) => ({
  date: obj.date,
  duration: obj.duration(registries, form),
});

export const validateForm = {
  date: (value) => {
    if (value === '') {
      return 'Campo obrigatório';
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
    if (value === '') {
      return 'Campo obrigatório';
    }

    if (workoutAmount > ENTIRE_DAY) {
      return 'O dia só possui 24h, como você já treinou mais que isso?';
    };

    return false;
  },
};
