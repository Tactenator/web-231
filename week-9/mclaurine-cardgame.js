/*
    ==================
    Title: mclaurine-alphabet-game.js, 
    Author: Trevor McLaurine
    Date: 2/20/2023
    Description: An app that displays the position of a letter of an alphabet 
*/

// This bit of code checks to see if the HTML document has loaded.
window.addEventListener("DOMContentLoaded", () => { 
    const CARD_COUNT = 52 
    let cards = [] 
    const playerCards = document.getElementById('player-card-container')

    const dealCardsBtn = document.getElementById('btnDealCards')

    class Card {
        
        constructor(faces, suits){
            this.faces = faces; 
            this.suits = suits; 
        }

        getDeckofCards = () => {
            this.faces = ['A', '2', '3', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']
            this.suits = ['Hearts', 'Spades', 'Diamonds', 'Clubs']
            for(let count = 0; count < CARD_COUNT; count++){
                cards[count] = new Card(this.faces[count % 13], this.suits[Math.floor(count / 13)])
            }
        }
        
    }

    class Dealer {
        constructor(){
            }
            shuffle = () => { 
                for(let firstCard = 0; firstCard < CARD_COUNT; firstCard++) {
                    let secondCard = cards[Math.floor(Math.random() * CARD_COUNT)]
                    let tempCard = cards[firstCard]
                    cards[firstCard] = secondCard; 
                    secondCard = tempCard; 
                }
                playerCards.innerHTML = checkCard(); 
                //bind to the player card container div
                
                
        }
    }

    const card = new Card(); 
    card.getDeckofCards()

    const checkCard = () => {
        let cardOutputWithIcon = ""

        for(const item of cards){
            switch(item.suits) {
                case ("Hearts"): 
                    cardOutputWithIcon += buildPlayingCard(item, "mdi mdi-cards-heart", "red", "red")
                    break; 
                case ("Spades"):
                    cardOutputWithIcon += buildPlayingCard(item, "mdi mdi-cards-diamonds", "red", "red")
                    break; 
                case ("Clubs"):
                    cardOutputWithIcon += buildPlayingCard(item, "mdi mdi-cards-spades", "black", "black")
                    break; 
                case ("Diamonds"):
                    cardOutputWithIcon += buildPlayingCard(item, "mdi mdi-cards-clubs", "black", "black") 
                    break; 
            }
        }
        return cardOutputWithIcon; 
    }

    const buildPlayingCard = (card,suitIcon, faceColor, suitColor) => {
        return `<div class="player-card">
                    <div class="card-title" style="text-align: left; font-size: 20px; padding-left: 10px; color=${faceColor};">
                        <div class="card-content" style="font-size: 28px; padding-bottom: 25px; ">
                            <span class=${suitIcon} style="color: ${suitColor}">${card.faces}<span>
                        </div>
                    </div>
                </div>`
    }

    const dealCards = (e) => {
        const dealer = new Dealer()
        dealer.shuffle(); 
    }

   
    dealCardsBtn.addEventListener('click', (e) => {
        dealCards(e)
    })

})