// Domcontent loaded to check to see if the HTML has loaded before executing javascript
window.addEventListener("DOMContentLoaded", () => { 
    // Adding the DOM elements to a variable 
    const courseButton = document.getElementById('btnMyCourse');
    const myWorldText = document.getElementById('txtMyWorld');

    // Changes the text of the element with the id 'myWorldText'
    myWorldText.innerHTML = "You are now in McLaurine's world!"

    // Setting an event listener to the courseButton element to perform the function when clicked
    courseButton.addEventListener('click', () => {
        alert('WEB 231 - Enterprise Javascript I')
    })

    
});