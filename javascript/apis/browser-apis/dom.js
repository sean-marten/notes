// DOM (Document object model) is an object-oriented representation of HTML

console.log(document.body); // document.body allows us to begin accessing stuff on the HTML page

console.log(document.body.children); // Returns an array of the tags below the body tag

console.log(document.body.childNodes); // Returns an array with all of the children plus their content

console.log(document.body.children.childNodes[0].style.color); // Accesses a style element that we can then modify

document.getElementById(); // How to find an element by ID
document.querySelector(); // Also works, more powerful, can find classes and more than 1 level of classes

var $articleDiv = document.getElementById(); // Dollar sign signifies the variable is an html element

document.querySelectorAll("p").setAttribute("style", "font-size: 65px;"); // Can set attributes that aren't defined/classes

document.createElement(tagName); // Will create an HTML element
document.body.appendChild(tag); // Will add it to the page
