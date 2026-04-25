const deck = [
  ["The Dreamer",                 "The Fool",          "0"],
  ["The Hacker",                  "The Magician",      "I"],
  ["The Burnt Witch",             "The High Priestess","II"],
  ["The Despina",                 "The Empress",       "III"],
  ["The Patrician",               "The Emperor",       "IV"],
  ["The Mason",                   "The Hierophant",    "V"],
  ["The Prophet",                 "The Lovers",        "VI"],
  ["The Bicycle",                 "The Chariot",       "VII"],
  ["The Antifragile",             "Justice",           "VIII"],
  ["The Voice",                   "The Hermit",        "IX"],
  ["The Immigrant",               "Wheel of Fortune",  "X"],
  ["The Anarcho-Capitalist",      "Strength",          "XI"],
  ["The Palisades",               "The Hanged Man",    "XII"],
  ["The Asteroid",                "Death",             "XIII"],
  ["The Black Swan",              "Temperance",        "XIV"],
  ["Bret Easton Ellis",           "The Devil",         "XV"],
  ["The Tower",                   "The Tower",         "XVI"],
  ["The Whistleblower",           "The Star",          "XVII"],
  ["The Shaman",                  "The Moon",          "XVIII"],
  ["The House of the Rising Sun", "The Sun",           "XIX"],
  ["The Year Zero",               "Judgment",          "XX"],
  ["The Multiverse",              "The World",         "XXI"]
];

const spreads = {
  one: ["Your Card"],
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
      <div class="card-divider"></div>
      <div class="card-custom">${dealtCards[i][0]}</div>
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
