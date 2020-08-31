// fs is a Node standard library package for reading and writing files
const fs = require("fs");

// Want to use the built in fs library (sort of like importing?)
// Almost all of node is asynchronous (I guess this is why we designate the call back function within the async call?)

// Node is known for error first callbacks, the first parameter in the function is usually an error. Here we run the callback function, but if it hits an error, we return

// return the contents of 'data.csv' as a string in the variable "data"
// "utf8" encodes the raw buffer data in human-readable format
fs.readFile("data.csv", "utf8", function (error, data) {
  if (error) {
    return console.log(error); // If we hit an error, we log and stop the function
  }

  console.log(data);
});

var fs = require("fs");

// You can use \t to add tabs (2 spaces by default)
// If we use writefile, this will overwrite the file if it already exists
fs.writeFile("log.txt", process.argv[2], function (err) {
  if (err) {
    return console.log(err);
  }

  console.log("Success!");
});
