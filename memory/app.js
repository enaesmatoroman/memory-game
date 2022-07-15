const cardArray = [
  {
    name: 'fries',
    img: 'images/fries.png',
  },
  {
    name: 'cheeseburger',
    img: 'images/cheeseburger.png',
  },
  {
    name: 'hotdog',
    img: 'images/hotdog.png',
  },
  {
    name: 'ice-cream',
    img: 'images/ice-cream.png',
  },
  {
    name: 'milkshake',
    img: 'images/milkshake.png',
  },
  {
    name: 'pizza',
    img: 'images/pizza.png',
  },
  {
    name: 'fries',
    img: 'images/fries.png',
  },
  {
    name: 'cheeseburger',
    img: 'images/cheeseburger.png',
  },
  {
    name: 'hotdog',
    img: 'images/hotdog.png',
  },
  {
    name: 'ice-cream',
    img: 'images/ice-cream.png',
  },
  {
    name: 'milkshake',
    img: 'images/milkshake.png',
  },
  {
    name: 'pizza',
    img: 'images/pizza.png',
  }

]
cardArray.sort(() => 0.5 - Math.random())
const gridDisplay = document.querySelector('#grid')
const resultDisplay = document.querySelector('#result')
let cardsChosen = []
let cardsChosenIds = []
const cardsWon = []

function createGrid() {
  for ( let i = 0; i<cardArray.length; i++) {
    const card = document.createElement('img')



    card.setAttribute('src', 'images/blank.png')
    card.setAttribute('data-id', i)
    card.addEventListener('click', flipCard)
    gridDisplay.appendChild(card)
  }
}
//createGrid()

function checkMatch () {
  var cards = document.querySelectorAll('img')
  const optionOneId = cardsChosenIds[0]
  const optionTwoId = cardsChosenIds[1]
  if ( optionOneId === optionTwoId) {
    alert('You have clicked the same card')
    cards[cardsChosenIds[0]].setAttribute('src', 'images/blank.png')
    cards[cardsChosenIds[1]].setAttribute('src', 'images/blank.png')
    cardsChosen = []
    cardsChosenIds = []
  }
  if (cardsChosen[0] === cardsChosen[1]) {
    alert('You found a match!')
    cards[cardsChosenIds[0]].setAttribute('src', 'images/white.png')
    cards[cardsChosenIds[1]].setAttribute('src', 'images/white.png')
    cards[cardsChosenIds[0]].removeEventListener('click', flipCard)
    cards[cardsChosenIds[1]].removeEventListener('click', flipCard)
    cardsWon.push(cardsChosen)
  }else{
    cards[optionOneId].setAttribute('src', 'images/blank.png')
    cards[optionTwoId].setAttribute('src', 'images/blank.png')
    alert('Sorry, try again!')
  }
  resultDisplay.innerHTML = cardsWon.length
  cardsChosen = []
  cardsChosenIds = []
  if (cardsWon.length ==(cardArray.length/2)) {
    resultDisplay.innerHTML = 'Congratulations you found them all!'
  }
}
function flipCard () {
  var cardID = this.getAttribute('data-id')
  cardsChosen.push(cardArray[cardID].name)
  cardsChosenIds.push(cardID)
  console.log('clicked', cardID)
  this.setAttribute('src', cardArray[cardID].img)
  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 500)
//checkMatch()
  }
}
//flipCard()
createGrid()
