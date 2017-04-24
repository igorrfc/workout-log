import React from 'react';
import { PropTypes } from 'prop-types';

const WorkoutRegistry = ({ duration, activity, date }) => (
  <tr>
    <td>{ duration }</td>
    <td>{ activity }</td>
    <td>{ date }</td>
  </tr>
);

WorkoutRegistry.propTypes = {
  duration: PropTypes.string.isRequired,
  activity: PropTypes.string.isRequired,
};

export default WorkoutRegistry;
