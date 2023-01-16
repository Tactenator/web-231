/*
    ==================
    Title: mclaurine-temp-conversion.js, 
    Author: Trevor McLaurine
    Date: 1/16/2023
    Description: Demonstrates how to create an app to convert fahrenheit to celsius.
*/

// This bit of code checks to see if the HTML document has loaded.
window.addEventListener("DOMContentLoaded", () => { 

    // Finds and links various html elements to variables.
    const convertButton = document.getElementById('convertTempButton')
    const temperatureResults = document.getElementById('results')
    const userInput = document.getElementById('txtFahrenheit')

    //This is where the temperature is converted utilizing the user input to create the resulting temperature.
    function convertTemperature(e) {
        e.preventDefault(); 
        let fahrenheit = userInput.value;
        userInput.value = ""; 
        return parseFloat((fahrenheit - 32) / 1.8).toFixed(2)
    }

    //This adds the event listener so when the user clicks the button it performs the conversion function
    convertButton.addEventListener('click', (e) => {
        //This sets the value of the temperature results div to the value received from the convertTemperature function.
        temperatureResults.innerHTML = convertTemperature(e)
    })

})