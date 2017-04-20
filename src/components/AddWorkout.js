import React from 'react';
import { PropTypes } from 'prop-types';

const AddWorkout = ({ addWorkoutActivity, activities }) => (
  <form action='javascript:void(0);'>
    <input type='text' name='duration' />
    <select name='activity'>
      {activities.map(activity =>
        <option key={Math.random()} value={activity.value}>{activity.name}</option>
      )}
    </select>
    <input type='text' name='date' />
    <input type='submit' value='Add' onClick={ addWorkoutActivity } />
  </form>
);

AddWorkout.propTypes = {
  addWorkoutActivity: PropTypes.func.isRequired,
  activities: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired).isRequired,
};

export default AddWorkout;
