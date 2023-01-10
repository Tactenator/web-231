window.addEventListener("DOMContentLoaded", () => { 
    const courseButton = document.getElementById('btnMyCourse');
    const myWorldText = document.getElementById('txtMyWorld');

    myWorldText.innerHTML = "You are now in McLaurine's world!"

    courseButton.addEventListener('click', () => {
        alert('WEB 231 - Enterprise Javascript I')
    })

    
});