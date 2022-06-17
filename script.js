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
    alert('Esta opção não é válida. Digite um número par, entre 4 e 14!')

    amountCards = prompt('Com quantas cartas quer jogar?')
  }
}
askAmount()

function generateDeck() {
  for (let i = 0; i < amountCards / 2; i++) {
    const card = cards[i]
    deck.push(card)
    deck.push(card)
  }

  deck.sort(shuffle)
  dealCards()
}
generateDeck()

function shuffle() {
  return Math.random() - 0.5
}

function dealCards() {
  const board = document.querySelector('.board')

  for (let i = 0; i < deck.length; i++) {
    let cardTemplate = `
  <div class="flip-container" onclick="flipCard(this)">
          <div class="card">
            <div class="front">
              <img src="./images/front.png" alt="" />
            </div>

            <div class="back">
              <img src="./images/${deck[i]}.gif" alt="" />
            </div>
          </div>
        </div>`
    board.innerHTML += cardTemplate
  }
}

function flipCard(clicked) {
  const flip = document.querySelector('.flip-container')

  clicked.classList.add('clicked')
}
