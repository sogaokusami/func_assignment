function sumOfTwo(firstNum, secondNum) {
  let result = firstNum + secondNum;
  return result;
}
console.log(sumOfTwo(-3, -6));

// q2

function nextNumber(inputNo) {
  let result = inputNo + 1;
  return result;
}
console.log(nextNumber(5));

// q3
function calcAge(yearsOld) {
  let oneYearInDays = 365;
  let result = yearsOld * oneYearInDays;
  return result;
}
console.log(calcAge(65));

// q4

function circuitPower(quantityVolts, quantityPower) {
  let result = quantityVolts * quantityPower;
  return result;
}
console.log(circuitPower(110, 3));

// q5
function giveMeSomething(randomInput) {
  let result = `something ${randomInput} `;
  return result;
}
console.log(giveMeSomething("good is already happening"));

// q6
function concatName(firstName, lastName) {
  let result = `${firstName} ${lastName}`;
  return result;
}
console.log(concatName("Johnny", "Bravo"));
