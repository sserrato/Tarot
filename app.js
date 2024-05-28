const deck = [
  ["tarot zero"],
  ["The Dreamer", "The Fool", "0"],
  ["The Hacker", "The Magician", "I"],
  ["The Burnt Witch", "The High Priestess", "II"],
  ["The Despina", "The Empress", "III"],
  ["The Patrician", "The Emperor", "IV"],
  ["The Mason", "The Hierophant", "V"],
  ["The Prophet", "The Lovers", "VI"],
  ["The Bicycle", "The Chariot", "VII"],
  ["The Antifragile", "Justice", "VIII"],
  ["The Voice", "The Hermit", "IX"],
  ["The Immigrant", "Wheel of Fortune", "X"],
  ["The Anarcho-Capitalist", "Strength", "XI"],
  ["The Palisades", "The Hanged Man", "XII"],
  ["The Asteroid", "Death", "XIII"],
  ["The Black Swan", "Temperance", "XIV"],
  ["Bret Easton Ellis", "The Devil", "XV"],
  ["The Tower", "The Tower", "XVI"],
  ["The Whistleblower", "The Star", "XVII"],
  ["The Shaman", "The Moon", "XVIII"],
  ["The House of the Rising Sun", "The Sun", "XIX"],
  ["The Year Zero", "Judgment", "XX"],
  ["The Multiverse", "The World", "XXI"]
];

const dealtDeck = [];
const drawnCards = new Set();

function getRandomCard() {
  let cardIndex;
  do {
    cardIndex = Math.floor(Math.random() * 22) + 1;
  } while (drawnCards.has(cardIndex));
  drawnCards.add(cardIndex);
  return deck[cardIndex];
}

function dealCards() {
  console.log(`This deck contains ${deck.length} cards`);
  const positions = [
    "The present",
    "The immediate challenge facing the querent",
    "Distant past, foundation",
    "More recent past, including events",
    "The best that can be achieved"
  ];

  for (let i = 0; i < positions.length; i++) {
    const card = getRandomCard();
    dealtDeck.push(card);
    console.log(`${positions[i]}: ${card}`);
  }
}

function showCard(position, card) {
  return `<div id="card">${position}:<br> ${card[1]}</div>`;
}

function displayCards() {
  const positions = [
    { id: '#five', position: 'The present', card: dealtDeck[0] },
    { id: '#four', position: 'The immediate challenge', card: dealtDeck[1] },
    { id: '#six', position: 'Distant past', card: dealtDeck[2] },
    { id: '#two', position: 'More recent past', card: dealtDeck[3] },
    { id: '#eight', position: 'The best that can be achieved', card: dealtDeck[4] }
  ];

  positions.forEach(pos => {
    $(pos.id).append(showCard(pos.position, pos.card));
  });
}

dealCards();
displayCards();
