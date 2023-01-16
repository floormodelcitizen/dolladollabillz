import type { LineItem, Invoice } from 'src/global';

/**
 * Sums all line items 
 * @param {Array|undefined} lineItems 
 * @returns {number}
 */
export const sumLineItems = ((lineItems: LineItem[] | undefined): number => {
  if (!lineItems) return 0
  return lineItems.reduce((prevValue, curValue) => prevValue + curValue.amount, 0)
})

/**
 * Returns USD amount with commas and 2 decimal places
 * @param {number} cents 
 * @returns {string}
 */
export const centsToDollars = ((cents: number): string => {
  const dollars = cents / 100;
  const addDecimals = twoDecimals(dollars);
  return addThousandsSeparator(addDecimals);
})

/**
 * Returns number with 2 decimal places
 * @param {number} myNum 
 * @returns {string}
 */
export const twoDecimals = ((myNum: number): string => {
  return myNum.toFixed(2);
})

/**
 * Adds thousand separator
 * @param {string} myNum 
 * @returns {string}
 */
export const addThousandsSeparator = (myNum: string): string => {
  return myNum.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

/**
 * Sums all invoices
 * @param {Invoice} invoices 
 * @returns {number}
 */
export const sumInvoices = ((invoices: Invoice[] | undefined): number => {
  if (!invoices) return 0
  return invoices.reduce((prevVal, curValue) => {
  const invoiceSum = sumLineItems(curValue.lineItems)
  return prevVal + invoiceSum
  }, 0)
})