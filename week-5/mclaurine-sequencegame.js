/*
    ==================
    Title: mclaurine-sequencegame.js, 
    Author: Trevor McLaurine
    Date: 1/30/2023
    Description: A game that displays a sequence of numbers based on a user selection.
*/

// This bit of code checks to see if the HTML document has loaded.
window.addEventListener("DOMContentLoaded", () => { 

    // Finds and links various html elements to variables.
    const sequenceButton = document.getElementById('btnDisplaySequence')
    const sequenceResults = document.getElementById('results')
    const mySequence = document.getElementById('sequence')

     // Returns the fibonacci sequence
     const fibonacciSequence = () => {
        let num1 =0; 
        let num2 = 1; 
        let next;  
        let fibonacciSequenceText = ""; 
        while(num1 < 40){
            fibonacciSequenceText += num1 + ", "; 
            next = num1 + num2; 
            num1 = num2; 
            num2 = next; 
        }
        return fibonacciSequenceText.slice(0, -2)
    }

    //returns the even sequence
    const evenSequence = () => {
        let evenSequenceText = ""; 
        let i = 0;
        while(i < 20){
            i+=2; 
            evenSequenceText += i + ", "
        }
        return evenSequenceText.slice(0, -2); 
    }

    //returns the odd sequence
    const oddSequence = () => {
        let oddSequenceText = "";
        let i = 1; 
        while(i < 20){
            oddSequenceText += i + ", "
            i+=2
        }
        return oddSequenceText.slice(0, -2)
    }
    
    //This is the function that decides what sequence to display. 
    function displaySequence(e) {
        e.preventDefault(); 
        let choice = mySequence.value; 
        
        // A Switch-Case statement that will run the correct function based on a selection. 
        switch(choice){
            case "fibonacci": 
                return fibonacciSequence()
            case "even": 
                return evenSequence()
            case "odd": 
                return oddSequence()
            case "select":
                alert("Invalid selection! Please try again.") 
                return ""; 
        }

    }

    //This adds the event listener so when the user clicks the button it will display the sequence selected
    sequenceButton.addEventListener('click', (e) => {
        //This sets the innerHTML of the results text area to the sequence desired. 
        sequenceResults.innerHTML = displaySequence(e)
    })

})