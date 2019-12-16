/*
Kata Id: 57f781872e3d8ca2a000007e

Title:
Square(n) Sum

Intructions:
Given an array of integers, return a new array with each value doubled.
For example:
[1, 2, 3] --> [2, 4, 6]
For the beginner, try to use the map method - it comes in very handy quite a lot so is a good one to know.

Link: https://www.codewars.com/kata/57f781872e3d8ca2a000007e

Solution
function maps(x){
  x.map(function(n) {
    return n * 2;
  });
}

*/

// Ninja Solution
const maps = x => x.map(n => n * 2); 
