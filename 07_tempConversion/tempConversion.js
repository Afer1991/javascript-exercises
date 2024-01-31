const convertToCelsius = function(F) {
  let C = (F - 32)/9*5;
  return Number(C.toFixed(1));
};

const convertToFahrenheit = function(C) {
  let F = 32 + 9/5*C;
  return Number(F.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
