const deck = [
  ["The Fool",          "The Fool",          "0"],
  ["The Magician",      "The Magician",      "I"],
  ["The High Priestess","The High Priestess","II"],
  ["The Empress",       "The Empress",       "III"],
  ["The Emperor",       "The Emperor",       "IV"],
  ["The Hierophant",    "The Hierophant",    "V"],
  ["The Lovers",        "The Lovers",        "VI"],
  ["The Chariot",       "The Chariot",       "VII"],
  ["Justice",           "Justice",           "VIII"],
  ["The Hermit",        "The Hermit",        "IX"],
  ["Wheel of Fortune",  "Wheel of Fortune",  "X"],
  ["Strength",          "Strength",          "XI"],
  ["The Hanged Man",    "The Hanged Man",    "XII"],
  ["Death",             "Death",             "XIII"],
  ["Temperance",        "Temperance",        "XIV"],
  ["The Devil",         "The Devil",         "XV"],
  ["The Tower",         "The Tower",         "XVI"],
  ["The Star",          "The Star",          "XVII"],
  ["The Moon",          "The Moon",          "XVIII"],
  ["The Sun",           "The Sun",           "XIX"],
  ["Judgment",          "Judgment",          "XX"],
  ["The World",         "The World",         "XXI"],

  // Wands
  ["Ace of Wands",    "Ace of Wands",    "Wands"],
  ["Two of Wands",    "Two of Wands",    "Wands"],
  ["Three of Wands",  "Three of Wands",  "Wands"],
  ["Four of Wands",   "Four of Wands",   "Wands"],
  ["Five of Wands",   "Five of Wands",   "Wands"],
  ["Six of Wands",    "Six of Wands",    "Wands"],
  ["Seven of Wands",  "Seven of Wands",  "Wands"],
  ["Eight of Wands",  "Eight of Wands",  "Wands"],
  ["Nine of Wands",   "Nine of Wands",   "Wands"],
  ["Ten of Wands",    "Ten of Wands",    "Wands"],
  ["Page of Wands",   "Page of Wands",   "Wands"],
  ["Knight of Wands", "Knight of Wands", "Wands"],
  ["Queen of Wands",  "Queen of Wands",  "Wands"],
  ["King of Wands",   "King of Wands",   "Wands"],

  // Cups
  ["Ace of Cups",    "Ace of Cups",    "Cups"],
  ["Two of Cups",    "Two of Cups",    "Cups"],
  ["Three of Cups",  "Three of Cups",  "Cups"],
  ["Four of Cups",   "Four of Cups",   "Cups"],
  ["Five of Cups",   "Five of Cups",   "Cups"],
  ["Six of Cups",    "Six of Cups",    "Cups"],
  ["Seven of Cups",  "Seven of Cups",  "Cups"],
  ["Eight of Cups",  "Eight of Cups",  "Cups"],
  ["Nine of Cups",   "Nine of Cups",   "Cups"],
  ["Ten of Cups",    "Ten of Cups",    "Cups"],
  ["Page of Cups",   "Page of Cups",   "Cups"],
  ["Knight of Cups", "Knight of Cups", "Cups"],
  ["Queen of Cups",  "Queen of Cups",  "Cups"],
  ["King of Cups",   "King of Cups",   "Cups"],

  // Swords
  ["Ace of Swords",    "Ace of Swords",    "Swords"],
  ["Two of Swords",    "Two of Swords",    "Swords"],
  ["Three of Swords",  "Three of Swords",  "Swords"],
  ["Four of Swords",   "Four of Swords",   "Swords"],
  ["Five of Swords",   "Five of Swords",   "Swords"],
  ["Six of Swords",    "Six of Swords",    "Swords"],
  ["Seven of Swords",  "Seven of Swords",  "Swords"],
  ["Eight of Swords",  "Eight of Swords",  "Swords"],
  ["Nine of Swords",   "Nine of Swords",   "Swords"],
  ["Ten of Swords",    "Ten of Swords",    "Swords"],
  ["Page of Swords",   "Page of Swords",   "Swords"],
  ["Knight of Swords", "Knight of Swords", "Swords"],
  ["Queen of Swords",  "Queen of Swords",  "Swords"],
  ["King of Swords",   "King of Swords",   "Swords"],

  // Pentacles
  ["Ace of Pentacles",    "Ace of Pentacles",    "Pentacles"],
  ["Two of Pentacles",    "Two of Pentacles",     "Pentacles"],
  ["Three of Pentacles",  "Three of Pentacles",  "Pentacles"],
  ["Four of Pentacles",   "Four of Pentacles",   "Pentacles"],
  ["Five of Pentacles",   "Five of Pentacles",   "Pentacles"],
  ["Six of Pentacles",    "Six of Pentacles",    "Pentacles"],
  ["Seven of Pentacles",  "Seven of Pentacles",  "Pentacles"],
  ["Eight of Pentacles",  "Eight of Pentacles",  "Pentacles"],
  ["Nine of Pentacles",   "Nine of Pentacles",   "Pentacles"],
  ["Ten of Pentacles",    "Ten of Pentacles",    "Pentacles"],
  ["Page of Pentacles",   "Page of Pentacles",   "Pentacles"],
  ["Knight of Pentacles", "Knight of Pentacles", "Pentacles"],
  ["Queen of Pentacles",  "Queen of Pentacles",  "Pentacles"],
  ["King of Pentacles",   "King of Pentacles",   "Pentacles"]
];

const spreads = {
  one: ["Single Card"],
  ppf: ["Past",      "Present", "Future"],
  sao: ["Situation", "Action",  "Outcome"],
  opt: ["Option 1",  "Option 2","Option 3"]
};

let currentSpread = 'ppf';
let dealtCards = [];

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function resetSlots(labels) {
  document.querySelectorAll('.card-slot').forEach((slot, i) => {
    slot.hidden = i >= labels.length;
    slot.classList.remove('revealed');
    slot.querySelector('.card').classList.remove('flipped', 'dealt');
    slot.querySelector('.card-label').textContent = labels[i] ?? '';
  });
}

function dealCards() {
  const labels = spreads[currentSpread];
  dealtCards = shuffle(deck).slice(0, labels.length);
  resetSlots(labels);

  document.querySelectorAll('.card-slot:not([hidden])').forEach((slot, i) => {
    const face = slot.querySelector('.card-face');
    const card = slot.querySelector('.card');

    face.innerHTML = `
      <div class="card-numeral">${dealtCards[i][2]}</div>
      <div class="card-arcana">${dealtCards[i][1]}</div>
    `;

    setTimeout(() => card.classList.add('dealt'), i * 180);
  });
}

document.querySelectorAll('.spread-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.spread-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentSpread = btn.dataset.spread;
    dealtCards = [];
    resetSlots(spreads[currentSpread]);
  });
});

document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    if (!card.classList.contains('dealt')) return;
    card.classList.toggle('flipped');
    card.closest('.card-slot').classList.toggle('revealed', card.classList.contains('flipped'));
  });
});

document.getElementById('deal-btn').addEventListener('click', dealCards);
