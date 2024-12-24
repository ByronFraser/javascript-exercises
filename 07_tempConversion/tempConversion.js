const convertToCelsius = function(fTemp) {
  
  let temp = Math.round(10*((fTemp - 32) * (5/9))) / 10;
  return temp;
};

const convertToFahrenheit = function(cTemp) {
  let temp = Math.round(10*((cTemp * 9/5) + (32))) / 10;
  return temp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
