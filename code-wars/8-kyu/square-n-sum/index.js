/*
Kata Id: 515e271a311df0350d00000f

Title:
Square(n) Sum

Intructions:
Complete the square sum function so that it squares each number passed into it and then sums the results together.
For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

Link: https://www.codewars.com/kata/515e271a311df0350d00000f

Solution
function squareSum(numbers){
  return numbers.reduce(function(acc, n){
    return (n * n) + acc;
  }, 0)
}

*/

// Ninja Solution
const squareSum = (numbers) => numbers.reduce((acc, current) => acc + (current * current), 0);
