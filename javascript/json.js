// To make an object/array into a string, you can use stringify (essentially stringify)

const me = { name: "sean" };

console.log(JSON.stringify(me))

// To return the string format back into whatever array/object is was before, use parse

const jArray = JSON.parse(me);

const oldMe = { name:"sean", age: 25 };

// Copies an object and add all key/value pairs to the new object, plus any other key/values you wanna add
// Does order matter for this? Only if you are designating duplicate key names
const newMe = { ...oldMe, isCool: true };

// FYI on JSON formatting, in a json file, you must use double quotes for both keys and values and you can't use a trailing comma