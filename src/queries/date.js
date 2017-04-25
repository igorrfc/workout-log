import moment from 'moment';

/**
 * String format to work
 * @const
 * @name DATE_FORMAT
 */
const DATE_FORMAT = 'DD-MM-YYYY';

/**
 * Remove '/' from brazilian date string format
 * @const
 * @name formatDate
 * @type Function
 * @param date {String} common brazilian string date dd/mm/yyyy
 * @return {String} brazilian string date with '-' instead of '/'
 */
export const formatDate = (date) => date.replace(/\//g, '-');

/**
 * Format a brazilian date string without '/' to a new with ones
 * @const
 * @name dateFormatBR
 * @type Function
 * @param date {String} common brazilian string date dd/mm/yyyy
 * @return {String} brazilian string date with '-' instead of '/'
 */
export const formatDateBR = (date) => date.replace(/-/g, '\/');

/**
 * Current date in string format
 * @const
 * @name getCurrentDateStr
 * @type Function
 * @return {String} brazilian string current date with '-' instead of '/'
 */
export const getCurrentDateStr = () => moment().format(DATE_FORMAT);

/**
 * Current date in common brazilian string format
 * @const
 * @name getCurrentDateStrBR
 * @type Function
 * @return {String} brazilian string current date
 */
export const getCurrentDateStrBR = () => formatDateBR(getCurrentDateStrBR());

/**
 * Get momentJS object from parameter date
 * @const
 * @name toDate
 * @type Function
 * @param date {String} common brazilian string date dd/mm/yyyy
 * @return {Object} momentJS object
 */
export const toDate = (date) => moment(formatDate(date), DATE_FORMAT);

/**
 * Current date in moment object format
 * @const
 * @name getToday
 * @type Function
 * @return {Object} moment object of current date
 */
export const getToday = () => toDate(getCurrentDateStr());

/**
 * Verify two dates if they are equals
 * @const
 * @name isEqualToCurrentDate
 * @type Function
 * @param date {String} common brazilian string date dd/mm/yyyy
 * @param targetDate {String} common brazilian string date dd/mm/yyyy
 * @return {Boolean}
 */
export const isEqualToCurrentDate = (date, targetDate = getCurrentDateStrBR()) => (
  formatDate(date) === formatDate(targetDate)
);

/**
 * Verify if parameter date is after today
 * @const
 * @name isAfterCurrentDate
 * @type Function
 * @param date {String} common brazilian string date dd/mm/yyyy
 * @return {Boolean}
 */
export const isAfterCurrentDate = (date) => toDate(date).isAfter(getToday());

/**
 * Filter array of elements by it dates
 * @const
 * @name filterByDate
 * @type Function
 * @param registries {Array} list of items
 * @param date {String} common brazilian string date dd/mm/yyyy
 * @return {Boolean}
 */
export const filterByDate = (registries, date = getCurrentDateStrBR()) =>
  registries.filter((registry) => isEqualToCurrentDate(registry.date, date));
