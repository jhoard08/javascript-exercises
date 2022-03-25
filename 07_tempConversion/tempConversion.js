const ftoc = function(f) {
  const celsius = (f-32)/1.8000;
  return Math.round(celsius * 10) / 10;
};

const ctof = function(c) {
  const fahrenheit = c * 1.8000 + 32.00
  return Math.round(fahrenheit * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
