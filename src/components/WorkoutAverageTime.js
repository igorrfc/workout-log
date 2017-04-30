import React from 'react';
import { PropTypes } from 'prop-types';

import { totalWorkoutsDuration } from '../queries/workoutLog';

const WorkoutAverageTime = ({ registries }) => (
  <p>Até o momento, você treinou
    <span className={ `bold` }> { totalWorkoutsDuration(registries) }</span> horas.
  </p>
);

export default WorkoutAverageTime;
