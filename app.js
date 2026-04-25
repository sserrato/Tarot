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

// Card positions and their meanings in the Celtic Cross spread
const cardSlots = [
  { selector: "#five",  label: "The present" },
  { selector: "#four",  label: "The past" },
  { selector: "#six",   label: "The future" },
  { selector: "#two",   label: "That which is hidden" },
  { selector: "#eight", label: "Outward influences" }
];

let dealtCards = [];
let clickCounter = 0;

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function dealCards() {
  dealtCards = shuffle(deck).slice(0, cardSlots.length);
}

function showCard() {
  if (clickCounter >= cardSlots.length) return;
  const { selector, label } = cardSlots[clickCounter];
  const card = dealtCards[clickCounter];
  $(selector).append(`<div class="card">${label}:<br>${card[1]}</div>`);
  clickCounter++;
}

dealCards();
