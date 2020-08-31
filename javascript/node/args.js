// returns an array of command line arguments
console.log(process.argv);
// Good thing to know about slice, it will make a new array from the index on (a second argument will tell it where to end)
const args = process.argv.slice(2); // This is common to remove the first two hardcoded args

console.log(args);

// arguments passed from the command line are accessed by index
// console.log(process.argv[2]);

// When you give inputs when you run the JS, they come out in process.argv
// 09-NodeJS/01-Activities/03-Ins_process.argv "three" 3 false undefined null "sean is cool"
// Returns: [
//   '/usr/local/bin/node',
//   '/Users/seanmarten/bootcamp/classwork/09-NodeJS/01-Activities/03-Ins_process.argv',
//   'three',
//   '3',
//   'false',
//   'undefined',
//   'null',
//   'sean is cool'
// ]
