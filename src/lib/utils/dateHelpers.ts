import {isBefore} from 'date-fns'

/**
 * This takes yyyy-mm-dd and returns m-d-yyyy
 * @param {string} myDate 
 * @returns {string} m-d-yyyy
 */
export const convertDate = (myDate: string): string => {
  // break apart the date
  const [ year, month, date ] = splitDate(myDate)
  // return date in the preferred format
  return `${month} / ${date} / ${year}`
}

/**
 * Determines if a date is before today; is late?
 * @param {string} myDate 
 * @returns {Array} [yyyy, mm, dd]
 */
export const isLate = ((myDate: string): boolean => {
  const [ year, month, date ] = splitDate(myDate)
  const dueDate = new Date(parseInt(year), parseInt(month) - 1, parseInt(date))
  const today = new Date();
  return isBefore(dueDate, today)
})

export const splitDate = (myDate: string): Array<string> => {
  return myDate.split('-')
}