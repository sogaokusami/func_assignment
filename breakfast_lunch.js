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
*/

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
