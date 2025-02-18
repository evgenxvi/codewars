// Switch it Up!
// https://www.codewars.com/kata/switch-it-up

// Solution:
// Using switch statement. Each case returns the corresponding word for the given number (0-9) or handles invalid inputs.
function switchItUp(number) {
  switch (number) {
    case 0: return "Zero";
    case 1: return "One";
    case 2: return "Two";
    case 3: return "Three";
    case 4: return "Four";
    case 5: return "Five";
    case 6: return "Six";
    case 7: return "Seven";
    case 8: return "Eight";
    case 9: return "Nine";
    default: return "Invalid value";
  }
};

// Using object and "switch (true)". The object maps numbers to words, and "switch (true)" checks "if" the number exists in object.
function switchItUp(number) {
  const words = {
    0: "Zero", 1: "One", 2: "Two", 3: "Three", 4: "Four",
    5: "Five", 6: "Six", 7: "Seven", 8: "Eight", 9: "Nine"
  };

  switch (true) {
    case number in words:
      return words[number];
    default:
      return "Invalid value";
  }
};