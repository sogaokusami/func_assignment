// q1

function isLeapYear(checkYear) {
  if (checkYear % 4 === 0) {
    return "True";
  } else {
    return "False";
  }
}
console.log(isLeapYear(2024));

// q2
function isSquareOrRectangle(length, breadth) {
  if (length === breadth) {
    return "This is a square⬜";
  } else {
    return "This is a rectangle🧧";
  }
}
console.log(isSquareOrRectangle(10, 10));
