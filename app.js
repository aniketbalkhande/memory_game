document.addEventListener('DOMContentLoaded', ()=> {
    //card option
    const cardArray = [
        {
            name : 'BOY',
            img: 'img/BOY.png'
        },{
            name : 'BOY',
            img: 'img/BOY.png'
        },{
            name : 'CAPTAIN',
            img: 'img/CAPTAIN.png'
        },{
            name : 'CAPTAIN',
            img: 'img/CAPTAIN.png'
        },{
            name : 'ELEPHENT',
            img: 'img/ELEPHENT.png'
        },{
            name : 'ELEPHENT',
            img: 'img/ELEPHENT.png'
        },{
            name : 'GUN',
            img: 'img/GUN.png'
        },{
            name : 'GUN',
            img: 'img/GUN.png'
        },{
            name : 'LION',
            img: 'img/LION.png'
        },{
            name : 'LION',
            img: 'img/LION.png'
        },{
            name : 'SNAKE',
            img: 'img/SNAKE.png'
        },{
            name : 'SNAKE',
            img: 'img/SNAKE.png'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())
        
    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')

    var cardsChosen = []
    var cardsChosenId = []
    var cardsWon = []
    
    //creating board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'img/BLANK.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
            
        }
    }

    //check for match
    function checkForMatch() {
        var cards = document.querySelectorAll('img')//selecting all images 
        const optionOneId = cardsChosenId[0] //first value in cards chosen array , Only two values 0 & 1 
        const optionTwoId = cardsChosenId[1]

        if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match')
            cards[optionOneId].setAttribute('src', 'img/WHITE.jpg')
            cards[optionTwoId].setAttribute('src', 'img/WHITE.jpg')
            cardsWon.push(cardsChosen) //pushing the won cards in an cardsWon array
        } else {
            cards[optionOneId].setAttribute('src', 'img/BLANK.png')
            cards[optionTwoId].setAttribute('src', 'img/BLANK.png')
            alert('Sorry, try again')
        }

        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2) (
            resultDisplay.textContent = 'Congratulations!, You have found all the cards'
        )
    }

    //flip your card
    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2){
            setTimeout(checkForMatch, 500)
        }
    }


    createBoard()


























})