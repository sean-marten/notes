// Includes is an array prototype that basically is a for each statement that returns a bool

// array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
arr.splice()

// You can actually add to a constant array like this
const oldNums = [0,1,2,3,4,5];
const newNums = [...oldNums,6,7,8,9];

// How to test if something is an array

Array.isArray(variable)