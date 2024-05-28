### Tarot Card Drawing Application


This application is designed to draw a tarot card from a pre-defined deck and display it on a webpage. The application uses HTML, CSS, and JavaScript to achieve this functionality.

### Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [Files](#files)
4. [CSS Explanation](#css-explanation)
5. [JavaScript Explanation](#javascript-explanation)

### Installation
No installation is required. Simply open the `index.html` file in a web browser to run the application.

### Usage
1. Open `index.html` in your web browser.
2. Click the "The Card" button to draw a tarot card.
3. The drawn card will be displayed in the designated area.

### Files
- `index.html`: The main HTML file that structures the webpage.
- `style.css`: The CSS file that styles the webpage.
- `app.js`: The JavaScript file that handles the logic for drawing and displaying the tarot cards.

### CSS Explanation
The CSS file `style.css` is used to style the various elements on the webpage. Below is an explanation of the key sections:

```css
body {
    background-image: url("images/amazing.gif");
    background-size: cover;
    background-repeat: no-repeat;
}

div {
    width: 140px;
    height: 200px;
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    font-size: 20px;
    color: black;
    margin: auto;
    border-radius: 10px; /* Rounded corners for card-like appearance */
}

#card {
    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2); /* Softer shadow for 3D effect */
    opacity: 0.9; /* Less transparency for better readability */
}

#box {
    width: 430px;
    border-style: none;
}

#two, #four, #five, #six, #eight {
    background-color: whitesmoke;
    opacity: 0.9; /* Increased opacity for better text visibility */
}

/* Additional styling for responsiveness and aesthetics */
@media (max-width: 768px) {
    div {
        width: 100px; /* Smaller size for smaller screens */
        height: 150px;
        font-size: 16px; /* Smaller font size for smaller screens */
    }
}
```
- **Body Background**: Sets a background image that covers the entire page without repeating.
- **Div Styling**: Styles the card elements, including size, alignment, text settings, and rounded corners for a modern look.
- **Card Shadow**: Adds a soft shadow to cards for a 3D effect.
- **Box**: Specific styling for the box that holds cards, with no border.
- **Opacity and Background Color**: Ensures the background color of cards is visible and text is readable.
- **Responsive Design**: Adjusts card sizes and font for smaller screens.

### JavaScript Explanation
The JavaScript file `app.js` contains the logic for drawing and displaying tarot cards. Below is an explanation of the key functions and their roles:

#### Deck and Dealt Deck Initialization
```javascript
const deck = [
  ["tarot zero"],
  ["The Dreamer", "The Fool", "0"],
  ["The Hacker", "The Magician", "I"],
  // ... other cards ...
  ["The Multiverse", "The World", "XXI"]
];

const dealtDeck = [];
const drawnCards = new Set();
```
- **Deck**: An array representing the tarot deck with card details.
- **Dealt Deck**: An array to store cards that have been dealt.
- **Drawn Cards**: A Set to keep track of drawn cards to avoid duplication.

#### Get Random Card
```javascript
function getRandomCard() {
  let cardIndex;
  do {
    cardIndex = Math.floor(Math.random() * 22) + 1;
  } while (drawnCards.has(cardIndex));
  drawnCards.add(cardIndex);
  return deck[cardIndex];
}
```
- **getRandomCard**: This function draws a random card from the deck ensuring no card is drawn more than once.

#### Deal Cards
```javascript
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
```
- **dealCards**: This function assigns a card to each of the specified positions.

#### Show Card
```javascript
function showCard(position, card) {
  return `<div id="card">${position}:<br> ${card[1]}</div>`;
}
```
- **showCard**: This function generates the HTML to display a single card.

#### Display Cards
```javascript
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
```
- **displayCards**: This function appends the HTML for each card to the respective elements in the DOM.

#### Initial Function Calls
```javascript
dealCards();
displayCards();
```
- **Initialization**: These function calls initialize the dealing of cards and display them on the webpage.

---

This README should provide a comprehensive overview of how your CSS and JavaScript files work together to create the tarot card drawing application. If you have any further questions or need additional details, feel free to ask!
