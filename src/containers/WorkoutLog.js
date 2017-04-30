import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import WorkoutForm from '../components/WorkoutForm';
import WorkoutsTable from '../components/WorkoutsTable';
import WorkoutAverageTime from '../components/WorkoutAverageTime';

import * as actions from '../actions';

const WorkoutLog = ({ form, registries, addWorkout, updateFormField, validateFormFields }) => (
  <div className={`container`}>
    <div className={`row marg-top-20 marg-bottom-20`}>
      <div className={`workout-log col-xs-10 col-xs-offset-1 col-md-6 col-md-offset-3`}>
        <div className={`row marg-bottom-20`}>
          <div className={`col-md-12 col-xs-12 text-center`}>
            <h1>Registro de atividades físicas:</h1>
          </div>
        </div>

        <div className={`row marg-bottom-40`}>
          <div className={`col-md-12 col-xs-12`}>
            <div className={`col-xs-8 col-xs-offset-2`}>
              <WorkoutForm
                form={ form }
                addWorkout={ addWorkout }
                updateFormField={ updateFormField }
                registries={ registries }
                validateFormFields={ validateFormFields }
              />
            </div>
          </div>
        </div>

        <div className={`row`}>
          <div className={`col-md-12 col-xs-12`}>
            <div className={`col-xs-10 col-xs-offset-1`}>
              <WorkoutsTable registries={ registries }  />
            </div>
          </div>
        </div>

        <div className={`row marg-bottom-20`}>
          <div className={`col-md-12 col-xs-12`}>
            <div className={`col-xs-10 col-xs-offset-1`}>
              <WorkoutAverageTime registries={ registries } />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(WorkoutLog);
