// These are essentially event handlers
document.getElementById('main').onclick = function() {
    alert('hello world');
}

// This is more flexible, goes beyond just clicks
document.getElementById('main').addEventListener('click', event => {
    console.log(event);
})
// The event object will give us information about what happened on the page

document.addEventListener('keydown', event => {
    console.log(event);
    console.log('hello I keyed something');
    if (event.key === 's'){
        console.log('sean');
    }
    else {
        console.log('nope');
    }
})

// setInterval is a function that takes 2 inputs, a function to call when the time is up and the time, in milliseconds
// To easily convert to minutes, hours, etc., multiply it by 60...

const timerInterval = setInterval(someSortOfEvent, 1000)

// Only stops when you clear the interval of the function that is called 

clearInterval(timerInterval);

// Default behavior of javascript for form submission is it tries to push your info to a web page and it will attempt to refresh

event.preventDefault(); // This prevents the page refreshing

var submitEl = document.querySelector('submit');

submitEl.addEventListener('click', function(e) {
    e.preventDefault();
    console.log(e);
});

// The change event listener is executed when the value of a selected html element changes
// The keydown event listener is executed on the downstroke of a key (triggers with a delay)
// The keyup event listener is executed on the upstroke of a key (triggers on current key)

// Event bubbling (nested divs/html elements, all with event listeners)
// If you click the most nested one, it will trigger all outer events too

outer.addEventListener("click", changeOrange); // Only triggers itself
inner.addEventListener("click", changePurple); // Triggers the two outer ones (it plus its parent)
button.addEventListener("click", changeBlue); // Triggers all 3 (it plus its parents)

// If we want to stop this behavior, we need to utilize the event.stopPropagation(), on the nested event where you want to stop the events to happen
event.stopPropagation(); // Will halt bubbling after the function that ran this finishes

// Event delegation - use event.target.matches("htmlelement/classes") to match the element that you actually clicked on
event.target.matches("button");
event.target.matches(".btn");
// This provides an easier way to write just one event listener instead of many.