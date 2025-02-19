// Century From Year
// https://www.codewars.com/kata/century-from-year

// Solution:
// Checks if the year is multiple of 100, if not, rounds up manually.
const century = (year) => year % 100 === 0 ? year / 100 : Math.floor(year / 100) + 1;

// Divides year by 100 and rounds up to get correct century.
function century(year) {
  return Math.ceil(year / 100);
};