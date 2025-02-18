// Thinkful - Logic Drills: Traffic light
// https://www.codewars.com/kata/thinkful-logic-drills-traffic-light

// Solution:
// Using "if-else" statements. Function checks the current traffic light color and returns the next state. If the input is not a valid color, it returns "Invalid color".
function updateLight(current) {
  if (current === "green") {
    return "yellow";
  } else if (current === "yellow") {
    return "red";
  } else if (current === "red") {
    return "green";
  }
  return "Invalid color";
};

// Faster and better solution using an object lookup.
function updateLight(current) {
  const transitionsLight = {
    green: "yellow",
    yellow: "red",
    red: "green"
  };
  return transitionsLight[current] || "Invalid color";
};