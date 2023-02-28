// q1
/*
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
    return `Your total cost is $${unitCost * qty}`;
  }
}
console.log(discountCost(900));


// q4
function profitableGamble(prob, prize, pay) {
  if (prob * prize > pay) {
    return "true";
  } else {
    return "false";
  }
}
console.log(profitableGamble(0.9, 3, 2));


// q5
function makesTen(firstInt, secondInt) {
  if (firstInt + secondInt === 10 || firstInt === 10 || secondInt === 10) {
    return "true";
  } else {
    return "false";
  }
}
console.log(makesTen(10, 10));


// q6

function comp(oneString, twoString) {
  if (oneString.length === twoString.length) {
    return "true";
  } else {
    return "false";
  }
}
console.log(comp("fiery", "superb"));


// q7

function acceptIntoMovie(age, isSupervised) {
  if (age >= 15 || isSupervised === true) {
    return "true, enjoy your movie🎦";
  } else {
    return "false, you need to be accompanied by a guardian👩‍🦰👨‍🦰 or wait until you are older";
  }
}
console.log(acceptIntoMovie(16, false));


// q8
function oddOrEven(anyString) {
  if (anyString.length % 2 === 0) {
    return "true";
  } else {
    return "false";
  }
}
console.log(oddOrEven("cherry"));

// q9
function isLastCharacterN(randomString) {
  if (randomString.charAt(randomString.length - 1) === "n") {
    return "true";
  } else {
    return "false";
  }
}
console.log(isLastCharacterN("Learning JavaScript is golden"));

function isLastCharacterN(randomString) {
  if (randomString.slice(-1) === "n") {
    return "true";
  } else {
    return "false";
  }
}
console.log(isLastCharacterN("Learning JavaScript is golden"));


// q10
function isPlural(checkWord) {
  if (checkWord.slice(-1) === "s") {
    return "Check passed✔. This word is plural";
  } else {
    return "Check failed❌. Not a plural";
  }
}
console.log(isPlural("magic"));


// q11
function fifth(argOne, argTwo, argThree, argFour, argFive) {
  if (arguments.length >= 5) {
    return typeof argFive;
  } else {
    return "Not enough arguments";
  }
}
console.log(fifth());


// q12
function journeyDistance(journeyCost) {
  let baseCost = 3;
  if (journeyCost > baseCost) {
    return `You have travelled a distance of ${
      1 + (journeyCost - baseCost) / 2
    }km`;
  } else {
    return `You have travelled ${journeyCost / 3}km`;
  }
}
console.log(journeyDistance(5));


// q13**

function days(isDay, isMonth) {
  let result = getDate(isDay, isMonth);
  return result;
}
console.log(days(2, 2018));


// q14
function newWord(inputWord) {
  let result = inputWord.slice(1);
  return result;
}
console.log(newWord("cherry"));


// q15
function firstLast(slicedString) {
  let sliceA = slicedString.slice(0, 1);
  let sliceB = slicedString.slice(-1);
  let result = `${sliceA}${sliceB}`;
  return result;
}
console.log(firstLast("Adeyemi"));


// q16
function wumbo(flipMode) {
  let result = flipMode.replace(/M/gi, "W");
  return result;
}
console.log(wumbo("WUMBOLOGY"));


// q17**
function flipMe(reverseMe) {
  let xterCount = reverseMe.length;
  let firstPosition = reverseMe.slice(xterCount - 1);
  if (firstPosition - 1 > 0) {
    let secondPosition = reverseMe.slice(xterCount - 2);
  }
  console.log(xterCount, firstPosition, secondPosition);
}
console.log(flipMe("Hello World"));


// q18
function checkEnding(stringA, stringB) {
  let howLongA = stringA.length;
  let howLongB = stringB.length;
  if (stringA.slice(howLongA - howLongB) === stringB) {
    return "true";
  } else {
    return "false";
  }
}
console.log(checkEnding("feminine", "nine"));


// q19
function getMiddle(middleString) {
  let center = Math.floor(middleString.length / 2);
  if (middleString.length % 2 === 1) {
    return middleString.slice(center, center + 1);
  }
}
console.log(getMiddle("testing"));


// q21

function moodToday(myMood) {
  if (typeof myMood === "string") {
    return `Today, I am feeling ${myMood}`;
  } else if (typeof (myMood === "undefined")) {
    return `Today, I am feeling neutral`;
  }
}
console.log(moodToday("annoyed"));


// q22
function match(senseStringA, senseStringB) {
  if (senseStringA.toLowerCase() === senseStringB.toLowerCase()) {
    return "true";
  } else {
    return "false";
  }
}
console.log(match("mask", "mAskinG"));


// q23
function createID(firstName, lastName) {
  let partA = firstName.slice(0, 1).toLowerCase();
  let partB = lastName.slice(0, 1).toUpperCase();
  let partC = lastName.slice(1, 3).toLowerCase();
  let result = `${partA}${partB}${partC}`;
  return result;
}
console.log(createID("mary", "smith"));


// q24
function google(wordsWithSpaces) {
  let result = wordsWithSpaces.replace(/\s/g, "+");
  return result;
}
console.log(google("Zulfah  "));


// q25
function reverseCapitalize(inputString) {
  let firstStep = inputString.split("");
  let secondStep = firstStep.reverse();
  let thirdStep = secondStep.join("").toUpperCase();
  return thirdStep;
}
console.log(reverseCapitalize("input"));


// q26
function isValidNumber(checkInput) {
  if (typeof checkInput === "number") {
    return `${checkInput} is a valid number`;
  } else {
    return `${checkInput} is not a number`;
  }
}
console.log(isValidNumber("21f"));


// q27
function isEmailValid(inputEmail) {
  if (inputEmail.includes("@")) {
    return "true";
  } else {
    return "false";
  }
}
console.log(isEmailValid("zaicongmail.com"));
*/

// q28

function truncateString(chopString, noOfXters) {
  let result = chopString.slice(0, noOfXters);
  return result;
}
console.log(truncateString("Ali Akerele", 2));
