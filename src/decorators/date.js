/**
 * Standard date format
 * @const
 * @name DATE_FORMAT
 */
const DATE_FORMAT = 'YYYY-MM-DD';

/**
 * Object holding the char used on brazilian date format
   and the char used on the expected date format
 * @const
 * @name BR_TO_STANDARD_FORMAT
 */
const BR_TO_STANDARD_FORMAT = {
  splitChar: '/',
  joinChar: '-',
};

/**
 * Object holding the char used on standard date format
   and the char used on the expected brazilian format
 * @const
 * @name STANDARD_TO_BR_FORMAT
 */
const STANDARD_TO_BR_FORMAT = {
  splitChar: '-',
  joinChar: '/',
};

/**
 * Reverse date string according to the given param 'separators'
 * @const
 * @name reverseDateFormat
 * @type Function
 * @param date {String}
 * @param separators {Object} characters used to split and join the date string
 * @return {String} Reversed date string with the separators.joinChar separating it
 */
const reverseDateFormat = (date, separators = BR_TO_STANDARD_FORMAT) =>
  date.split(separators.splitChar).reverse().join(separators.joinChar);

/**
 * Reverse date string according to the given param 'separators'
 * @const
 * @name toBRFormat
 * @type Function
 * @param date {String} which is on the standard date format 'YYYY-MM-DD'
 * @return {String} Date string with the brazilian date format
 */
export const toBRFormat = (date) => reverseDateFormat(date, STANDARD_TO_BR_FORMAT);

/**
 * Remove '/' from brazilian date string format
 * @const
 * @name standardizeDate
 * @type Function
 * @param date {String} common brazilian string date dd/mm/yyyy
 * @param fn {Function} holding the logic applied into the conversion process
   using the reverseDateFormat by default
 * @return {String} date string on the universal format
 */
export const standardizeDate = (date, fn = reverseDateFormat) => fn(date);
