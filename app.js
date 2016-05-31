var deck =
[["tarot zero"],
["The Dreamer ","The Fool","0"],
["The hacker ","The Magician","I"],
["The burnt witch","The High Priestess","III"],
["The despina ","The Empress","III"],
["The patrician ","The Emperor","IV"],
["The mason","The Hierophant","V"],
["The prophet","The Lovers","VI"],
["The bicycle ","The Chariot","VII"],
["The antifragile ","Justice","VIII"],
["The voice ","The Hermit","IX"],
["The immigrant","Wheel of Fortune","X"],
["The anarcho-capitalist ","Strength","XI"],
["The palisades ","The Hanged Man","XI"],
["The asteroid ","Death","XII"],
["The black swan","Temperance","XIV"],
["Bret Easton Ellis","The Devil","XV"],
["The Tower","The Tower","XVI"],
["The Whistleblower","The Star","XVII"],
["The shaman ","The Moon","XVIII"],
["the House of the Rising Sun","The Sun","XIX"],
["The year zero","Judgment","X"],
["The multiverse","The World","XI"]]
//cards to be dealt in the Celtic Cross

// Card 1:   The present
// Card 2:   The immediate challenge facing the querent. You will often pull a difficult card here, which will indicate an obstacle that must be overcome. When you pull a "good" card here, examine it carefully because it will still represent a challenge.
// Card 3:   Distant past, foundation. This card should indicate the root of the subject matter of the question
// Card 4:   More recent past, including events. This will indicate events taking place, not necessarily directly connected to the question. For example, if a love affair going wrong Card 3 would show the root of why it is going wrong, whereas Card 4 will show something that recently happened to reflect this. You could see this as a "check comment" card - a way of seeing that the reading is sound.
  // Card 5:   The best that can be achieved. This is directly related to the question. Note that this may not necessarily gel against Card 10 - it depends whether you are able to get the best. However, a negative card here probably means that it is worth cutting your losses rather than putting any more effort into the situation.
// Card 6: Immediate Future. This indicates events in the next few days or week(s). This reading does not cover months.
// Card 7: Factors or inner feelings affecting the situation. Compare this against Card 1 in order to understand underlying forces/trends. If there is conflict between them this tends to indicate that the querent is going in the wrong direction.
// Card 8: External influences. People, energies or events which will affect the outcome of the question and are beyond the querent's control.
// Card 9: Hopes or fears around the situation. This may produce a card that confuses us badly. Always bear in mind that hopes and fears are closely intertwined, therefore that which we hope for may also be that which we fear, and so may fail to happen. Sometimes it is useful to draw a second card for clarification after the reading has been laid, and to read the two together.
// Card 10: Final outcome. This is a fairly self explanatory card. However it is worth saying that if the card comes up somewhat ambiguous, once again it may be worth drawing three extra cards to clarify. These should be interpreted through the lens of Card 10. So if the card drawn is the Tower and we draw the Ace of Cups, Princess of Cups and Four of Cups in a reading about a relationship, the Tower would indicate that it is time to move on. The Ace of Cup suggests that a new relationship is promised with better things ahead. The Princess of Cups brings new love (and possibly pregnancy). The Four of Cups shows deep levels of contentment and happiness, and many options for progress.
var card1 = "";
var card2 = "";
var card3 = "";
var card4 = "";
var card5 = "";

dealtDeck = [];

function pushDealtDeck(deckCard, card){
  dealtDeck.push([deckCard, card])
};

function dealCards(){
  console.log("This deck contains" + deck.length +" cards");
  card1 = (Math.floor((Math.random() * 22) + 1));
  //  $("#five").append('<div> The present:<br> ' + deck[card1] + '</div');
    pushDealtDeck(deck[card1], card1);
    deck.splice(card1, 1);
    console.log(deck.length);
    console.log("The present:<br> " +deck[card1] + card1);

  card2 = (Math.floor((Math.random() * 22) + 1));
    if (card2 === card1) {
      card2 = (Math.floor((Math.random() * 22) + 1));
  //    $('#four').append('<div>The past:<br> ' + deck[card2] +'</div');
      pushDealtDeck(deck[card2], card2);
      deck.splice(card2, 1);
      console.log(deck.length + "card2 removed");
      console.log("The past: " +  deck[card2] + card2);
    }
    else {
    //  $('#four').append('<div>The past:<br> ' + deck[card2] +'</div');
      console.log("The past: "+  deck[card2] + card2);
      dealtDeck.push([deck[card2], card2]);
      deck.splice(card2, 1);
      console.log(deck.length + "card2 removed");
    }

  card3 = (Math.floor((Math.random() * 22) + 1));
    if (card3 == card1 || card3 == card2) {
      card3 = (Math.floor((Math.random() * 22) + 1));
      console.log("The future: " + deck[card3] + card3);
      //$('#six').append('<div>The future: ' + deck[card3] + '</div>')
      pushDealtDeck(deck[card3], card3);
      deck.splice(card3, 1);
      console.log(deck.length + "card3 removed");
    }
    else {

      console.log("The future: " + deck[card3] + card3);
      //$('#six').append('<div>The future: ' + deck[card3] + '</div>');
      pushDealtDeck(deck[card3], card3);
      deck.splice(card3, 1);
      console.log(deck.length + "card3 removed");
    }


  card4 = (Math.floor((Math.random() * 22) + 1));
    if (card4 == card1 || card4 == card2 || card4 == card3) {
      card4 = (Math.floor((Math.random() * 22) + 1));
      pushDealtDeck(deck[card4], card4);
      deck.splice(card4, 1);
      console.log(deck.length + "card4 removed");

    }
    else {
        console.log("That which is hidden: "+ deck[card4] +card4);
        //$('#two').append('<div>That which is hidden:<br> ' +deck[card4] + '</div>');
        pushDealtDeck(deck[card4], card4);
        deck.splice(card4, 1);
        console.log(deck.length + "card4 removed");;
    }

  card5 = (Math.floor((Math.random() * 22) + 1));
    if (card5 == card1 || card5 ==  card2 || card5 ==  card3 || card5 == card4) {
      card5 = (Math.floor((Math.random() * 22) + 1));
      pushDealtDeck(deck[card5], card5);
      deck.splice(card5, 1);
      console.log(deck.length + "card5 removed");
    }
    else {
        console.log( "Outward influences: " +deck[card5] +card5);
        //$("#eight").append('<div>Outward influences:<br> ' + deck[card5] + '</div>');
        pushDealtDeck(deck[card5], card5);
        deck.splice(card5, 1);
        console.log(deck.length + "card5 removed");
    }
}

var clickCounter = 0;

// var present = $("#five").append('<div> The present:<br> ' + deck[card1] + '</div');
// var past =    $('#four').append('<div>The past:<br> ' + deck[card2] +'</div');
// var future =  $('#six').append('<div>The future: ' + deck[card3] + '</div>');
// var hidden =  $('#two').append('<div>That which is hidden:<br> ' +deck[card4] + '</div>');
// var outward =   $("#eight").append('<div>Outward influences:<br> ' + deck[card5] + '</div>');

// major arcana
// 56 minor arana, 4 suits
// this shows the card
function  showCard(){
  if (clickCounter == 0) {
    $('#five').append('<div id="card"> The present:<br> ' + deck[card1][1] + '</div');
    clickCounter= clickCounter +1;
  }
  else if (clickCounter == 2) {
    $('#four').append('<div id="card">The past:<br> ' + deck[card2][1] +'</div');
    clickCounter= clickCounter +1;
  }
  else if (clickCounter == 4) {
    $('#six').append('<div id="card">The future:<br> ' + deck[card3][1] + '</div>');
    clickCounter= clickCounter +1;
  }
  else if (clickCounter == 6){
    $('#two').append('<div id="card">That which is hidden:<br> ' +deck[card4][1] + '</div>');
    clickCounter= clickCounter +1;
  }
  else
    $("#eight").append('<div id="card">Outward influences:<br> ' + deck[card5][1] + '</div>');
    clickCounter= clickCounter +1;

}

dealCards();
