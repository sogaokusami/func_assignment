// https://leetcode.com/problems/length-of-last-word/
var lengthOfLastWord = function (s) {
  let newS = s.trim().split(" ");
  let lastIndexOfNewS = newS[newS.length - 1];
  let lengthOfWordInLastIndex = lastIndexOfNewS.length;

  return lengthOfWordInLastIndex;
};
