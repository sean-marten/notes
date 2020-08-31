// Local storage is handled via the current browser you are using. You can generally look at what is stored there through the browser console.

// How to put items in local storage
localStorage.setItem("item", value);

// How to retrieve an item from local storage
localStorage.getItem("item");

// How would we store an array in local storage?
localStorage.setItem("array", [1, 2, 3]);
// This actually stores it as a string "1,2,3"

localStorage.setItem("array", "[1,2,3]");
// This actually stores it as an array, but it still comes back as a string.

// It is important to remember to stringify your variable before storing it.
