// String repeat
// https://www.codewars.com/kata/string-repeat

// Solution:
// Using a loop. This approach iterates "num" times, appending "str" to a result string.
function repeatStr(num, str) {
  let repeat = "";
  for (let i = 0; i < num; i++) {
    repeat += str;
  }
  return repeat;
};

// Shorter solution using an arrow function and the built-in "repeat()" method.
const repeatStr = (num, str) => str.repeat(num);