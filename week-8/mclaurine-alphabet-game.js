/*
    ==================
    Title: mclaurine-alphabet-game.js, 
    Author: Trevor McLaurine
    Date: 2/20/2023
    Description: An app that displays the position of a letter of an alphabet 
*/

// This bit of code checks to see if the HTML document has loaded.
window.addEventListener("DOMContentLoaded", () => { 

    // Fetches the divs by their id and places them in the variable
    const alphabetDiv = document.getElementById('alphabet');
    const btnFindLetter = document.getElementById('btnFindLetter')
    const alphabetLetterDiv = document.getElementById('alphabet-letter-div')
    const userInput = document.getElementById('txtPosition')

    //initializes the alphabet variable as well as the string output
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    let alphabetOutput = "";

    //short and sweet method of placing each letter in the output as a string by adding each letter
    for (letter in alphabet) {

        //adds the letter of the alphabet to the output string
        alphabetOutput += (alphabet[letter] + ',');
    }

    //cuts off the trailing comma at the end of the string
    alphabetDiv.innerHTML = alphabetOutput.slice(0, -1); 

    //displays the results of the user input - showing what position a letter is in 
    const displayResults = (e) => {
        let pos = userInput.value;
        let letter = alphabet[pos - 1]; 
        //checks to see if the user input exceeds or does not meet the number of letters in the alphabet
        if(!letter) {
            alphabetLetterDiv.innerHTML = (`There are not ${pos} letters in the alphabet.`)
        }
        else {
            //if the user input falls within the number of letters in the alphabet, the position is displayed.
            alphabetLetterDiv.innerHTML = (`${letter} is at position ${pos} in the alphabet`)
        }
    }


    //This adds the event listener so when the user clicks the button it will display the position of the letter
    btnFindLetter.addEventListener('click', (e) => {
        displayResults(e)
    })

})