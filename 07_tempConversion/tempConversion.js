const convertToCelsius = function(f) {
  let rawResult = ((f - 32) * 5) / 9;
  return Math.round(rawResult * 10) / 10;
};

const convertToFahrenheit = function(c) {
  let rawResult = c * (9 / 5) + 32;
  return Math.round(rawResult * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
