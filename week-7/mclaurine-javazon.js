/*
    ==================
    Title: mclaurine-in-n-out-books.js, 
    Author: Trevor McLaurine
    Date: 2/13/2023
    Description: An app that displays various parts of 'Javazon'
*/

// This bit of code checks to see if the HTML document has loaded.
window.addEventListener("DOMContentLoaded", () => { 

    // Finds and links various html elements to variables.
    const products = document.getElementById('products')
    const services = document.getElementById('services')
    const employees = document.getElementById('employees')
    const productsTable = document.getElementById('products-table')
    const servicesTable = document.getElementById('services-table');
    const employeesTable = document.getElementById('employees-table');
    const resultsButton = document.getElementById('btnDisplayListing');
    const myChoice = document.getElementById('choice') 

    //sets initial display value for tables
    products.style.display = 'none';
    services.style.display = 'none';
    employees.style.display = 'none';
    
    //classes for our various javazon services as well as their constructors
    class Product {
        constructor(id, description, price, quantity, totalValue) {
            this.id = id; 
            this.description = description; 
            this.price = price; 
            this.quantity = quantity;
            this.totalValue = (quantity * price).toFixed(2);
        }
    }

    class Services {
        constructor(id, description, hourlyRate, min) {
            this.id = id; 
            this.description = description; 
            this.hourlyRate = hourlyRate.toFixed(2)
            this.min = min; 
        }
    }

    class Employee {
        constructor(id, firstName, lastName, salary){
            this.id = id; 
            this.firstName = firstName;
            this.lastName = lastName; 
            this.salary = salary.toFixed(2)
        }
    }

    //a boolean check so that every time a table is selected, it won't rebuild itself and create a longer list. 
    let displayProducts, displayServices, displayEmployees = false; 

    //variables that create a new template for each class object
    const productOne = new Product(11223344, 'Spiral Notebook', 10.50, 20, this.totalValue)
    const productTwo = new Product(11223345, 'Yeti Coffee Cup', 25.00, 10, this.totalValue)
    const productThree = new Product(11223346, 'Reading Glasses', 5.50, 5, this.totalValue)
    const productFour = new Product(11223347, 'Playstation Controller', 49.99, 8, this.totalValue)
    const productFive = new Product(11223348, 'Keurig Coffee Maker', 199.99, 2, this.totalValue)
    const productArray = [productOne, productTwo, productThree, productFour, productFive]

    const serviceOne = new Services (554433, 'Underwater Basket Weaving', 50.00, 10)
    const serviceTwo = new Services (554411, 'The Art of Procrastination', 25.00, 5)
    const serviceThree = new Services (557832, 'Mountain Kayaking for Dummies', 125.00, 30)
    const serviceArray = [serviceOne, serviceTwo, serviceThree]

    const employeeOne = new Employee(001, 'Mark', 'Markerson', 53000)
    const employeeTwo = new Employee(002, 'Bob', 'Boberson', 60000)
    const employeeThree = new Employee(003, 'Jean', 'Dancing Machine', 50000)
    const employeeFour = new Employee(004, 'Archie', 'Bunker', 33000)
    const employeeFive = new Employee(005, 'Thaddeus', 'Venture', 83000)
    const employeeArray = [employeeOne, employeeTwo, employeeThree, employeeFour, employeeFive]

    //handles the function that creates the products list and displays it. 
    const handleProducts = () => {
        products.style.display = 'block';
        services.style.display = 'none';
        employees.style.display = 'none'

        //checks to see if displaysProducts is true before creating list
        if(!displayProducts){
            productArray.forEach(item => {

                // creates a new row and data divs for each item in the productsArray array
                const newRow = document.createElement('tr')
                const dataOne = document.createElement('td')
                const dataTwo = document.createElement('td')
                const dataThree = document.createElement('td')
                const dataFour = document.createElement('td')
                const dataFive = document.createElement('td')
                
                // assigns data to each td element
                dataOne.innerHTML = item.id
                dataTwo.innerHTML = item.description
                dataThree.innerHTML = item.price
                dataFour.innerHTML = item.quantity
                dataFive.innerHTML = item.totalValue
    
                // appends data elements to row and finally the row to the table
                newRow.appendChild(dataOne)
                newRow.appendChild(dataTwo)
                newRow.appendChild(dataThree)
                newRow.appendChild(dataFour)
                newRow.appendChild(dataFive)
                productsTable.appendChild(newRow)
            }) 
        }
        //sets displayProducts to true after first time running program. Prevents any future list from being built. 
        displayProducts = true;
    }

     //handles the function that creates the services and displays it. 
    const handleServices = () => {
        services.style.display = 'block';
        products.style.display = 'none'
        employees.style.display = 'none'
       
        //checks to see if displayServices is true before creating list
        if(!displayServices){
            serviceArray.forEach(item => {
                //creates a new row and data divs for each item in the servicesArray array
                const newRow = document.createElement('tr')
                const dataOne = document.createElement('td')
                const dataTwo = document.createElement('td')
                const dataThree = document.createElement('td')
                const dataFour = document.createElement('td')
        
                //assigns data to each td element
                dataOne.innerHTML = item.id
                dataTwo.innerHTML = item.description
                dataThree.innerHTML = item.hourlyRate
                dataFour.innerHTML = item.min
    
                //appends data elements to row and finally the row to the table
                newRow.appendChild(dataOne)
                newRow.appendChild(dataTwo)
                newRow.appendChild(dataThree)
                newRow.appendChild(dataFour)
                servicesTable.appendChild(newRow)
            })
        }
        //sets displayServices to true after first time running program. Prevents any future list from being built. 
        displayServices = true; 
    }

    const handleEmployees = () => {
        services.style.display = 'none';
        products.style.display = 'none'
        employees.style.display = 'block'
        //checks to see if displaysEmployees is true before creating list
        if(!displayEmployees){
            employeeArray.forEach(item => {
                //creates a new row and data divs for each item in the employeesArray array
                const newRow = document.createElement('tr')
                const dataOne = document.createElement('td')
                const dataTwo = document.createElement('td')
                const dataThree = document.createElement('td')
                const dataFour = document.createElement('td')
        
                //assigns data to each td element
                dataOne.innerHTML = item.id
                dataTwo.innerHTML = item.lastName
                dataThree.innerHTML = item.firstName
                dataFour.innerHTML = item.salary
    
                //appends data elements to row and finally the row to the table
                newRow.appendChild(dataOne)
                newRow.appendChild(dataTwo)
                newRow.appendChild(dataThree)
                newRow.appendChild(dataFour)
                employeesTable.appendChild(newRow)
            })
        }
        //sets displayEmployees to true after first time running program. Prevents any future list from being built. 
        displayEmployees = true; 
    }

    //handles the function that chooses what list to display.
    const displayListing = (e) => {
        let choice = myChoice.value;
        
        switch (choice) {
            case "products":
                handleProducts() 
                break; 
            case "services": 
                handleServices()
                break; 
            case "employees": 
                handleEmployees()
                break; 
            case "select": 
                products.style.display = 'none';
                services.style.display = 'none';
                employees.style.display = 'none';
                break;
        }
    }


    //This adds the event listener so when the user clicks the button it will display the listing selected
    resultsButton.addEventListener('click', (e) => {
        displayListing(e)
    })

})