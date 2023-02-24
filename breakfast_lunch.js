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

// q3
let unitCost = 100;
function discountCost(qty) {
  if (qty > 1000) {
    return `Your total cost is $${unitCost * qty * 0.9}`;
  } else {
    return `Your total cost is ${unitCost * qty}`;
  }
}
console.log(discountCost(900));
