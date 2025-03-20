// script.js

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent actual form submission

    const username = document.querySelector('#username').value;
    const password = document.querySelector('#password').value;

    // Display alert (for demo purposes, you can replace with actual validation or AJAX call)
    alert(Username: ${username}\nPassword: ${password});
});