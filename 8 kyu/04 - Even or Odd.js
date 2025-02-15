// Even or Odd
// https://www.codewars.com/kata/even-or-odd

// Solution:
// Check if the given number is divisible by 2. If yes, return "Even", otherwise return "Odd".
function evenOrOdd(number) {
  if (number % 2 == 0) {
    return "Even";
  }
  return "Odd";
};