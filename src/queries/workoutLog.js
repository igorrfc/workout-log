import moment from 'moment';

const addDuration = (total, workout) =>
  total.add(workout.duration);

export const totalWorkoutsDuration = (workouts) => {
  let durationTotal = moment.duration(0);
  workouts.reduce(addDuration, durationTotal);
  return durationTotal.asHours();
};
