// https://leetcode.com/problems/length-of-last-word/
var lengthOfLastWord = function (s) {
  let newS = s.trim().split(" ");
  let lastIndexOfNewS = newS[newS.length - 1];
  let lengthOfWordInLastIndex = lastIndexOfNewS.length;

  return lengthOfWordInLastIndex;
};

// https://leetcode.com/problems/plus-one/
var plusOne = function (digits) {
  let lastDigit = digits[digits.length - 1];
  let secondToLastDigit = digits[digits.length - 2];
  let lastPosition = digits.length - 1;
  let secondToLastPosition = digits.length - 2;
  if (lastDigit === 9) {
    digits[(secondToLastPosition, lastPosition)] = (secondToLastDigit + 1, 0);
    return digits;
  } else digits[lastPosition] = lastDigit + 1;
  return digits;
};
