// Destructuring only works on objects and arrays

const { var1, var2, var3, ...the_rest } = someObject;
// This creates a variable for each thing in the curly brackets,
// It finds the same property in the object on the right.
// For this reason, destructuring objects is not order specific.

// Variables can be declared as you destructure, or they can be declared before
// If you want to destructure with creating variables before and then assigning them in the destructuring, you must encapsulate the whole statement in parentheses. This is because the {} on the left hand side is considered a block and not an object literal
const var1, var2, var3;
({ var1, var2, var3} = someObject);

// If you want to assign a new variable name to an object key, do the following:
const { var1: newVarName, var2, var3, ...the_rest } = someObject;

// You can also assign default values incase an object's key is undefined
const { var1 = "default", var2, var3, ...the_rest } = someObject;

// Destructuring arrays is the same as objects, except you use square brackets and order DOES matter.

const [ var1, var2, var3, ...rest ] = someArray;

// If you want to just encompass the rest of the variable in a single array/object, you can use the spread operator to grab the "leftovers"

const { var1, ...rest} = someObject;
// The variable rest will contain all of the other objects that weren't assigned (i.e. anything other than var1)

// You can also deconstruct directly in an argument

$.ajax({
  url: url,
  method: method,
}).then(function ({ name, thumb_url, tracker_count }) {
  // do stuff wiht it
});
