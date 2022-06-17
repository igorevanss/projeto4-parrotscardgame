let amountCards
let cards = [
  'bobrossparrot',
  'explodyparrot',
  'fiestaparrot',
  'metalparrot',
  'revertitparrot',
  'tripletsparrot',
  'unicornparrot'
]
let deck = []

function askAmount() {
  amountCards = prompt('Com quantas cartas quer jogar?')

  while (
    amountCards < 4 ||
    amountCards > 14 ||
    amountCards % 2 !== 0 ||
    isNaN(amountCards)
  ) {
    alert('Digite um número par, entre 4 e 14!')

    amountCards = prompt('Com quantas cartas quer jogar?')
  }
}

function generateDeck() {
  for (let i = 0; 1 < (amountCards / 2); i++) {
    const card = cards[i];
    deck.push(card);
    deck.push(card);
  }
  console.log(deck)
  deck.sort(shuffle)
  console.log(deck)
  //dealCards()
}

function shuffle() {
  return Math.random() - 0.5
}

askAmount()
generateDeck()
/*
function dealCards() {
  const board = document.querySelector('.board')

  for (let i = 0; i < deck.length; i++) {
    let cardTemplate = `
  <div class="card" oncliclick="">
    <img src="./images/front.png" alt="">
    <img src="./images/${deck[0]}.gif" alt="">
  </div>`
    board.innerHTML += cardTemplate
  }
}
*/
