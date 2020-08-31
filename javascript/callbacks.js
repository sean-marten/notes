var nums = [1,2,3,4,5,6,7,8,9,0];

nums.forEach(function(number, i, collection) {
    console.log(number);
    console.log(i);
    console.log(collection);
})

// A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.
function seansForEach(array, callbackFn) {
    for (var i = 0; i < array.length; i++) {
        callbackFn(array[i], i , array);
    }

}

seansForEach(nums, console.log);

// Building the map function
var someStrings = [ "Chickens", "Cows", "Ostriches", "Pigs"];

// Map gives you back a new array, but doesn't modify the original one
var someStringsLowerCased = someStrings.map(function(currentElement){
    return currentElement.toLowerCase();
});

// NOTE: forEach() does not return a new array, map() returns a new array

function seansMap(array, callbackFn){
    var mapped = [];

    seansForEach(array, function(currentElement){
        mapped.push(callbackFn(currentElement));
    });
    return mapped;
}

var multiplyByTwo = function(number) {
    return number * 2;
};

var newNums = seansMap(nums, multiplyByTwo);

console.log(newNums);