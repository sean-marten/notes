var variable = require("./var.js"); // The way of importing a separate JS file
// This separates our code into different parts

var food = "chicken";

var undef = function () {
  return undefined;
};

// module.exports is an object we use to store variables or methods
// This is required for an import to be able to use these vars/functions
// These needs to be exported as objects
module.exports = {
  food: food, // In ES6, if the key and value are the same (variable names), you can ommit the value declaraction, shorthand is below:
  food, // Equivalent to food: food,
  undef: undef,
};

exports.food = food; // This also works
