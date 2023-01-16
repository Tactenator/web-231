window.addEventListener("DOMContentLoaded", () => { 

    const convertButton = document.getElementById('convertTempButton')
    const temperatureResults = document.getElementById('results')
    const userInput = document.getElementById('txtFahrenheit')

    function convertTemperature(e) {
        e.preventDefault(); 
        let fahrenheit = userInput.value;
        userInput.value = ""; 
        return parseFloat((fahrenheit - 32) / 1.8).toFixed(2)
    }

    convertButton.addEventListener('click', (e) => {
        temperatureResults.innerHTML = convertTemperature(e)
    })

})