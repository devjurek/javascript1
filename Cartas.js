const yugiDeck = [ {
    nombre: "Dark Magician",
    tipo: "Spellcaster",
    poderAtaque: 2500,
    poderDefensa: 2100,
    emoji: "🧙‍♂️"
  },
  {
    nombre: "Dark Magician Girl",
    tipo: "Spellcaster",
    poderAtaque: 2000,
    poderDefensa: 1700,
    emoji: "🧙‍♀️"
  },
  {
    nombre: "Gaia The Fierce Knight",
    tipo: "Warrior",
    poderAtaque: 2300,
    poderDefensa: 2100,
    emoji: "⚔️"
  },
  {
    nombre: "Curse of Dragon",
    tipo: "Dragon",
    poderAtaque: 2000,
    poderDefensa: 1500,
    emoji: "🐉"
  },
  {
    nombre: "Black Luster Soldier - Envoy of the Beginning",
    tipo: "Warrior",
    poderAtaque: 3000,
    poderDefensa: 2500,
    emoji: "⚔️🌟"
  },
  ]

function shuffleDeck () {
    for (let i = yugiDeck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [yugiDeck[i], yugiDeck[j]] = [yugiDeck[j], yugiDeck[i]]
    }
  }

function dealCards (numCard) {
    const dealCards = yugiDeck.splice(0, numCard);
    return dealCards
}

shuffleDeck()

const player1hand = dealCards(2)
const player2hand = dealCards(1)
const player3hand = dealCards(2)

console.log("Player 1 Hand: ", player1hand)
console.log("Player 2 Hand: ", player2hand)
console.log("Player 3 Hand: ", player3hand)