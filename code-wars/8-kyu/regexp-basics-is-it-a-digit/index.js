/*
Kata Id: 567bf4f7ee34510f69000032

Title:
Regexp Basics - is it a digit?

Intructions: 
Implement String#digit? (in Java StringUtils.isDigit(String)),
which should return true if given object is a digit (0-9), false otherwise.

Link: https://www.codewars.com/kata/567bf4f7ee34510f69000032
*/

String.prototype.digit = function() {
  return (/^\d$/).test(this);
};