// <script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
// Jquery is really just for UI logic

// Global Jquery symbol $ (you can also use jQuery)

// If I want to target a certain thing, it would look like the following in JS
document.querySelector('.todos');

// To set the text content
document.querySelector('.todos').textContent = "";

// In Jquery, we do this (actually returns a jquery object)
$('.todos');

// To set the content (can't use regular js properties on jquery objects)
// Also these class selectors return an array of all tags with these classes (so you change one, you change all, unless you access a specific element in the array)
// You can call two classes too, like below (to specify a more specific html)
$('.todos').text("something else");
$('.todos').css('color', 'blue');
$('.todos.otherclass');

// How to create an html element (must include left and right angle brackets)
const $newDiv = $('<div>')
$newDiv.text('New text')
$newDiv.css('color', 'purple')
$newDiv.addClass('aClass')
$('targetID').append($newDiv);

// To modify text on html
$todoList.html("");
$todoList.text("something");

// To set an attribute (you can get it, just don't give it a value)
$li.attr("data-index", i);