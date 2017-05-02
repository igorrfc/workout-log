import moment from 'moment';
import { DATE_FORMAT } from '../decorators/date';

/**
 * Get momentJS object from parameter date
 * @const
 * @name toDate
 * @type Function
 * @param date {String} common brazilian string date dd/mm/yyyy
 * @return {Object} momentJS object
 */
export const toDate = (date) => moment(date);

/**
 * Current date in string format
 * @const
 * @name getCurrentDateStr
 * @type Function
 * @return {String} brazilian string current date with '-' instead of '/'
 */
export const getCurrentDateStr = () => moment().format(DATE_FORMAT);

/**
 * Current date in moment object format
 * @const
 * @name getToday
 * @type Function
 * @return {Object} moment object of current date
 */
export const getToday = () => toDate(getCurrentDateStr());

/**
 * Verify if the date parameter is after today
 * @const
 * @name isAfterCurrentDate
 * @type Function
 * @param date {String} common brazilian string date dd/mm/yyyy
 * @return {Boolean}
 */
export const isAfterCurrentDate = (date) => toDate(date).isAfter(getToday());

/**
 * Verify two dates if they are equals
 * @const
 * @name isEqualToCurrentDate
 * @type Function
 * @param date {String} common string date on universal format YYYY-MM-DD
 * @param targetDate {String} common string date on universal format YYYY-MM-DD
   as the current date by default
 * @return {Boolean}
 */
export const isEqualToCurrentDate = (date, targetDate = getCurrentDateStr()) => (
  date === targetDate
);

/**
 * Filter array of elements by it dates
 * @const
 * @name filterByDate
 * @type Function
 * @param registries {Array} list of items
 * @param date {String} common brazilian string date dd/mm/yyyy
 * @return {Boolean}
 */
export const filterByDate = (registries, date = getCurrentDateStr()) =>
  registries.filter((registry) => isEqualToCurrentDate(registry.date, date));
