/*
    ==================
    Title: mclaurine-in-n-out-books.js, 
    Author: Trevor McLaurine
    Date: 1/30/2023
    Description: A game that displays a sequence of numbers based on a user selection.
*/

// This bit of code checks to see if the HTML document has loaded.
window.addEventListener("DOMContentLoaded", () => { 

    // Finds and links various html elements to variables.
    const authors = document.getElementById('favorite-authors')
    const books = document.getElementById('favorite-books');
    const authorsTable = document.getElementById('authors-table')
    const booksTable = document.getElementById('books-table');
    const resultsButton = document.getElementById('btnDisplayListing');
    const myChoice = document.getElementById('choice') 

    //used so when the user selects each listing, the list is not created again and creates a longer list 
    let displayBooks, displayAuthors = false; 

    //an array of objects that contains the authors
    const favoriteAuthors = 
    [
        {
            name: "Margaret Atwell", 
            genre: "Fiction"
        }, 
        {
            name: "Zadie Smith", 
            genre: "Fiction"
        }, 
        {
            name: "Christopher Moore",
            genre: "Fantasy/Comedy"
        }
    ]

    //an array of objects that contain the list of books
    const favoriteBooks = 
    [
        {
            ISBN: 0345404475,
            title: "Do Androids Dream of Electric Sheep",
            pages: 229
        },
        {
            ISBN: 031233475, 
            title: "The Count of Monte Cristo",
            pages: 1276
        },
        {
            ISBN: 126782312,
            title: "Gone with the Wind",
            pages: 1037
        }
    ]
    
    //initially sets the display of these divs to none
    authors.style.display = 'none'; 
    books.style.display = 'none'; 

    //handles the function that creates the authors list and displays it. 
    const handleAuthors = () => {
        authors.style.display = "block";
        books.style.display = 'none';
        //checks to see if displaysAuthor is true before creating list
        if(!displayAuthors){
            favoriteAuthors.forEach(item => {

                //creates a new row and data divs for each item in the favoriteAuthors array
                const newRow = document.createElement('tr')
                const dataOne = document.createElement('td')
                const dataTwo = document.createElement('td')
                
                //assigns data to each td element
                dataOne.innerHTML = item.name
                dataTwo.innerHTML = item.genre
    
                //appends data elements to row and finally the row to the table
                newRow.appendChild(dataOne)
                newRow.appendChild(dataTwo)
                authorsTable.appendChild(newRow)
            })
        }
        //sets displaysAuthor to true after first time running program. Prevents any future list from being built. 
        displayAuthors = true; 
    }

     //handles the function that creates the books list and displays it. 
    const handleBooks = () => {
        authors.style.display = 'none';
        books.style.display = "block";
        //checks to see if displaysBooks is true before creating list
        if(!displayBooks){
            favoriteBooks.forEach(item => {
                //creates a new row and data divs for each item in the favoriteBooks array
                const newRow = document.createElement('tr')
                const dataOne = document.createElement('td')
                const dataTwo = document.createElement('td')
                const dataThree = document.createElement('td')
        
                //assigns data to each td element
                dataOne.innerHTML = item.ISBN
                dataTwo.innerHTML = item.title
                dataThree.innerHTML = item.pages
    
                //appends data elements to row and finally the row to the table
                newRow.appendChild(dataOne)
                newRow.appendChild(dataTwo)
                newRow.appendChild(dataThree)
                booksTable.appendChild(newRow)
            })
        }
        //sets displaysBooks to true after first time running program. Prevents any future list from being built. 
        displayBooks = true; 
    }

    //handles the function that chooses what list to display.
    const displayListing = (e) => {
        let choice = myChoice.value;
        
        switch (choice) {
            case "authors":
                handleAuthors() 
                break; 
            case "books": 
                handleBooks()
                break; 
            case "select": 
                authors.style.display = 'none'; 
                books.style.display = 'none'; 
                break;
        }
    }


    //This adds the event listener so when the user clicks the button it will display the listing selected
    resultsButton.addEventListener('click', (e) => {
        displayListing(e)
    })

})