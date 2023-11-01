const add = function(x, y) {
	return x+y;
};

const subtract = function(x,y) {
	return x-y;
};

const sum = function(arr) {
	return arr.reduce((sum, item) => {
    return sum+=item;
  }, 0);
};

const multiply = function(arr) {
  return arr.reduce((prod, item) => {
    return prod*=item;
  }, 1);
};

const power = function(x,y) {
	return Math.pow(x,y);
};

const factorial = function(x) {
	if(x === 1 || x === 0){
    return 1;
  }
  return x * factorial(x-1);
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
