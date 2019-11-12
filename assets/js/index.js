"use strict";

const nOne = prompt("Enter nOne:");
const nTwo = prompt("Enter nTwo:");

/*
function circleLength(radius) {
  return 2 * 3.14 * radius;
}
*/

function sumNumbers(numberOne, numberTwo){
  return +numberOne + +numberTwo;
}

function minusNumbers(numberOne, numberTwo){
  return +numberOne - +numberTwo;
}

function multipeNumbers(numberOne, numberTwo){
  return +numberOne * +numberTwo;
}

function divideNumbers(numberOne, numberTwo){
  return +numberOne / +numberTwo;
}

console.log(sumNumbers(nOne, nTwo));
console.log(minusNumbers(nOne, nTwo));
console.log(multipeNumbers(nOne, nTwo));
console.log(divideNumbers(nOne, nTwo));
