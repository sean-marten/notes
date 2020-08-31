// All functions have 3 prototype methods

const that = this;
fun.bind(that); // Whenever a function is called, I want this to our function, from a different this, bind needs to be called when the function is declared
fun.call();
fun.apply();

// Arrow functions
const sum = (num1, num2) => num1 + num2; // This is an implicit return (not clear that we are returning right away, but we are)
// Arrow functions do not bind this to the object they are nested in! "this" becomes global
