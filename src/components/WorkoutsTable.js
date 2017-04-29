import React from 'react';
import { PropTypes } from 'prop-types';

import WorkoutRegistry from './WorkoutRegistry';
import { toBRFormat } from '../decorators/date';

const WorkoutsTable = ({ registries }) => (
  <table>
    <thead>
      <tr>
        <th>Tempo</th>
        <th>Tipo</th>
        <th>Data</th>
        <th></th>
      </tr>
    </thead>

    <tbody>
      {registries.map((registry, index) =>
        <WorkoutRegistry key={`registry-row-${index}`} duration={registry.duration}
          activity={registry.activity} date={toBRFormat(registry.date)} />
      )}
    </tbody>
  </table>
);

WorkoutsTable.propTypes = {
  registries: PropTypes.arrayOf(PropTypes.shape({
    duration: PropTypes.string.isRequired,
    activity: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

export default WorkoutsTable;
