// Remove First and Last Character
// https://www.codewars.com/kata/remove-first-and-last-character

// Solution:
// Using a for loop. Iterates through the string and adds characters except for the first and last.
function removeChar(str) {
  let result = "";
  for (let i = 1; i < str.length - 1; i++) {
    result += str[i];
  }
  return result;
};

// Removes the first and last characters using "slice()" with start index 1 and end index -1.
const removeChar = (str) => (str.slice(1, -1));
