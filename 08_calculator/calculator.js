const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	let totalSum = 0;
	for (i = 0; i < array.length; i++) {
    totalSum += array[i];
  }
  return Number(totalSum);
};

const multiply = function(array) {
  let result = 1;
	for (i = 0; i < array.length; i++) {
    result *= array[i];
  }
  return Number(result);
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
  let initialNumber = 1;
	if(num == 0) {
    return initialNumber;
  } else {
  for(let i = 1; i <= num; i++) {
    initialNumber *= i;
    }
    return initialNumber;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
