const convertToCelsius = function(fahr) {
  const cels = (fahr - 32) * (5/9);
  return Number(cels.toFixed(1));
};

const convertToFahrenheit = function(cels) {
  const fahr = cels * 1.8 + 32;
  return Number(fahr.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
