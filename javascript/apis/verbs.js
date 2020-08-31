// HTTP verbs
// Type of request we are making for data online
// GET requesting some data from a database somewhere
// POST sending data for some database to create
// PATCH updating one key in one object { name: 'sean', lastName: 'Marten' }
// PUT updating more than one key in one or more objects
// DELETE deleting a specific data from a database somewhere

// In Jquery, we use an AJAX request
// Asynchronous JavaScript and XML
// Asynchronous - some code that is going to take some time to complete. It is not going to happen instantly
$.ajax({
    url: 'https://jsonplaceholder.typicode.com/todos',
    method: 'GET'
}).then(function(response) {
    console.log(response);
})