import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import WorkoutForm from '../components/WorkoutForm';
import WorkoutsTable from '../components/WorkoutsTable';
import WorkoutAverageTime from '../components/WorkoutAverageTime';

import * as actions from '../actions';

const WorkoutLog = ({ form, registries, addWorkout, updateFormField }) => (
  <div>
    <WorkoutForm
      form={ form }
      addWorkout={ addWorkout }
      updateFormField={ updateFormField }
      registries={ registries }
    />

    <WorkoutsTable registries={ registries }  />

    <WorkoutAverageTime />
  </div>
);

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutLog);
