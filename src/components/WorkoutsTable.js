import React from 'react';
import { PropTypes } from 'prop-types';
import WorkoutRegistry from './WorkoutRegistry';

const WorkoutsTable = ({ registries }) => (
  <table>
    <tr>
      <th>Tempo</th>
      <th>Tipo</th>
      <th>Data</th>
      <th></th>
    </tr>

    {registries.map(registry =>
      <WorkoutRegistry duration={registry.duration}
        activity={registry.activity} date={registry.date} />
    )}
  </table>
);

WorkoutsTable.propTypes = {
  registries: PropTypes.arrayOf(PropTypes.shape({
    duration: PropTypes.number.isRequired,
    activity: PropTypes.string.isRequired,
    date:     PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

export default WorkoutsTable;
