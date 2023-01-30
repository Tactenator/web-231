/*
    ==================
    Title: mclaurine-numbergame.js, 
    Author: Trevor McLaurine
    Date: 1/23/2023
    Description: A guess the number game.
*/

// This bit of code checks to see if the HTML document has loaded.
window.addEventListener("DOMContentLoaded", () => { 

    // Finds and links various html elements to variables.
    const guessButton = document.getElementById('btnSubmit')
    const guessResults = document.getElementById('results')
    const myNumber = document.getElementById('txtMyNumber')

    // Produces a random number between 1 and 10
    const rnd = Math.floor((Math.random() * 10) + 1)
    
    //This is where the user's guess will be checked to see if the results are
    function checkGuess(e) {
        e.preventDefault(); 
        let guess = myNumber.value; 
        if(guess < rnd){
            return (`The number is greater than ${guess}`)
        }
        else if(guess > rnd){
            return (`The number is less than ${guess}`)
        }
        return ('Congratulation! You picked the correct number!')

    }

    //This adds the event listener so when the user clicks the button it performs the conversion function
    guessButton.addEventListener('click', (e) => {
        //This sets the value of the temperature results div to the value received from the convertTemperature function.
        guessResults.innerHTML = checkGuess(e)
    })

})