/*
    ==================
    Title: mclaurine-cardgame.js, 
    Author: Trevor McLaurine
    Date: 2/23/2023
    Description: An app that shuffles cards and displays them for the user.
*/

// This bit of code checks to see if the HTML document has loaded.
window.addEventListener("DOMContentLoaded", () => { 

    //initializes variables for the number of cards, the original cards array and for the shuffled cards
    const CARD_COUNT = 52 
    let cards = [] 
    let shuffledCards = [];

    //initializes divs needed for starting the application and to show the cards
    const playerCards = document.getElementById('player-card-container')
    const dealCardsBtn = document.getElementById('btnDealCards')

    //class initialization for card
    class Card {
        
        constructor(faces, suits){
            this.faces = faces; 
            this.suits = suits; 
        }

        //function that creates a deck of cards using the class constructor
        getDeckofCards = () => {
            this.faces = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
            this.suits = ['Hearts', 'Spades', 'Diamonds', 'Clubs']
            for(let count = 0; count <= CARD_COUNT; count++) {
                cards[count] = new Card(this.faces[count % 13], this.suits[Math.floor(count / 13)])
            }
        }
        
    }

    //class initialization for dealer
    class Dealer {
        constructor(){
            }
            // shuffle function that takes the deck of cards and rearranges them
            shuffle = () => { 
                const numbersUsed = []
                for(let firstCard = 0; firstCard < CARD_COUNT; firstCard++) {
                    //creates a random number that is used to grab a card from the array
                    const randomNumber = Math.floor(Math.random() * CARD_COUNT)
                    //each number is moved to an array. If that number has been used, it will search for another to add to the shuffled cards array. 
                    if(!numbersUsed.includes(randomNumber)){
                        numbersUsed.push(randomNumber)
                        shuffledCards.push(cards[randomNumber])
                    }
                    else {    
                        firstCard--; 
                    }
                }
                //function for checking what the suit and face of each card is. 
                playerCards.innerHTML = checkCard(); 
        }
    }

    //initializes the card object and creates a deck of cards. 
    const card = new Card(); 
    card.getDeckofCards()

    const checkCard = () => {
        //string function that will hold divs showing shuffled cards
        let cardOutputWithIcon = ""

        //a switch/case statement that checks each card and creates the card div based on each parameter
        for(const item of shuffledCards){
            switch(item.suits) {
                case ("Hearts"): 
                    cardOutputWithIcon += buildPlayingCard(item, "mdi mdi-cards-heart", "red", "red")
                    break; 
                case ("Spades"):
                    cardOutputWithIcon += buildPlayingCard(item, "mdi mdi-cards-spade", "black", "black")
                    break; 
                case ("Clubs"):
                    cardOutputWithIcon += buildPlayingCard(item, "mdi mdi-cards-club", "black", "black")
                    break; 
                case ("Diamonds"):
                    cardOutputWithIcon += buildPlayingCard(item, "mdi mdi-cards-diamond", "red", "red") 
                    break; 
            }
        }
        return cardOutputWithIcon; 
    }

    // builds the card that is attached to the player-cards div
    const buildPlayingCard = (card,suitIcon, faceColor, suitColor) => {
        return `<div class="player-card">
                    <div class="card-title" style="text-align: left; font-size: 20px; padding-left: 10px; color: ${faceColor};">
                        ${card.faces}
                    </div>
                    <div class="card-content" style="font-size: 28px; padding-bottom: 25px;">
                        <i class="${suitIcon}" style="color: ${suitColor}"></i>
                    </div>
                </div>`
    }

    //creates a new dealer object which is then used to utilize the shuffle function
    const dealCards = (e) => {
        const dealer = new Dealer()
        //if the deck has been shuffled before, this will reinitialize the shuffledCards array so that the cards can be shuffled again. 
        if(shuffledCards.length != 0){
            //turns the original cards array into the shuffledCards. 
            //This allows for a more realistic representation of actually shuffling cards instead of starting with a fresh deck each time. 
            cards = shuffledCards;
            shuffledCards = []
        }
        dealer.shuffle(); 
    }

    //adding an event listener to the button to be able to initialize the program. 
    dealCardsBtn.addEventListener('click', (e) => {
        dealCards(e)
    })

})