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

// q7
function getRemainder(numberUno, numberDos) {
  let result = numberUno % numberDos;
  return result;
}
console.log(getRemainder(1, 3));

// q8
function returnNegative()
}
console.log(returnNegative(4));

// q9

function stringtoInteger(anyString){
  let result = Number(anyString);
  return result;
}
console.log(stringtoInteger("4"));

function intToString(anyNumber){
  let result = String(anyNumber);
  return result;
}
console.log(intToString(4));

// q10
function carsNeeded(passengers){
  let baseCar = Math.floor(passengers / 5);
  let extraCar = Math.floor(((passengers % 5) + 4) / 5);
  let result = baseCar + extraCar;
  return result;
}
console.log(carsNeeded(15));

// q11

function numberArgs(input1, input2, input3, input4, input5){
  let result = numberArgs.length;
  return result;
}

console.log(numberArgs(1, 2, 3, 4, 5));

// q12
function wordCharWord(firstCharacter, secondString){
  let result  = `${firstCharacter} ${secondString} ${firstCharacter}`;
  return result;
}
console.log(wordCharWord("J", "is for JavaScript."));

// q13
function stutter(newString){
  let newString1 = newString.slice(0,2);
  let result = `${newString1}...${newString1}...${newString}?`;
  return result;
}
console.log(stutter("incredible"));

// q14
function typeOf(anyArgument){
  let result = typeof(anyArgument) ;
  return result;
}
console.log(typeOf(1));

// q15
function squareRoot(getMySquareRoot){
  let result = Math.sqrt(getMySquareRoot);
  return result;
}
console.log(squareRoot(149));