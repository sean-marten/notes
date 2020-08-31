// Hoisting in Javascript: JS interprets files not line by line, it hoists first.

var name = 'Sean';
var lastName = 'Marten';

// Can be called before being declared because of hoisting
sayHi();

function sayHi() {
    console.log("say hi");
}


var sayHello = function() {
    console.log('say hellow');
}

// This has to be after, since it is is declared like a variable
sayHello();

// But JS reads it like this...
// First looks at all variable declarations

// Variable declarations get hoisted, but not their values;
// Then it reads code line by line
var name;
var lastName;
var sayHello;
// These are hoisted to the top
function sayHi() {
    console.log('say Hi');
}

name = 'Sean';
lastName = 'Marten';
sayHi();
sayHello = function() {
    console.log('say hellow');
}

sayHello();

sayHi();
// LET AND CONST DO NOT HOIST, vars even hoist in functions and for loops, vars become accessible even inside of forloops (and functions)
// Let and const only stay in the block of code they are declared in