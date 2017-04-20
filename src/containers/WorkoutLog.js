import React from 'react';
import { connect } from 'react-redux';

import AddWorkout from '../components/AddWorkout';
import WorkoutsTable from '../components/WorkoutsTable';
import WorkoutAverageTime from '../components/WorkoutAverageTime';

import addWorkout from '../actions';

const WorkoutLog = ({ activities, registries, onAddWorkoutClick }) => (
  <div>
    <AddWorkout activities={ activities } addWorkoutActivity={ onAddWorkoutClick } />
    <WorkoutsTable registries={ registries }  />
    <WorkoutAverageTime />
  </div>
);

const mapStateToProps = (state) => (
  {
    registries: state.registries,
    activities: state.activities,
  }
);

const mapDispatchToProps = (dispatch) => {
  return {
    onAddWorkoutClick: (workout) => {
      dispatch(addWorkout(workout));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutLog);
