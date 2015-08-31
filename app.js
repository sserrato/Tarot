var deck =
[["tarot zero"], [" The Dreamer",""],
[" The hacker ","I"],
[" The burnt witch","III"],
[" The despina ","III"],
[" The patrician ","IV"],
[" The mason","V"],
[" The prophet","VI"],
[" The bicycle ","VII"],
[" The antifragile ","VIII"],
[" The voice ","IX"],
[" The immigrant","X"],
[" The anarcho-capitalist ","XI"],
[" The palisades ","XI"],
[" The asteroid ","XII"],
[" The black swan","XIV"],
[" Bret Easton Ellis","XV"],
[" The Tower","XVI"],
[" The Whistleblower","XVII"],
[" The shaman ","XVIII"],
[" The anarcho-capitalist ","XIX"],
[" The year zero","X"],
[" The multiverse","XI"]]
// ["The tarot zero position",
//   "The snake",
// "The walled city",
// "The Beast",
// "The Tower",
// "Walt Disney",
// "The Dreamer ",
// "The burnt witch",
// "The sea",
// "The Pumpkin Spice",
// "The early departed",
// "The bicycle ",
// "The year zero",
// "The despina ",
// "The man in full ",
// "The voice ",
// "The hacker ",
// "Bret Easton Ellis",
// "the House of the Rising Sun",
// "The operator",
// "The black swan",
// "The antifragile ",
// "The immigrant",
// "The killer cop",
// "The Whistleblower",
// "The patrician ",
// "The Matriarch ",
// "The Hagia Sophia ",
// "The mason",
// "The anarcho-capitalist ",
// "The podcaster",
// "The social justice warrior ",
// "The internet commenter ",
// "The photographer",
// "The advocate of liberty",
// "The neckbeard",
// "The renegade",
// "The tactical genius",
// "The strategist with skin in the game",
// "The fish ",
// "The caveman ",
// "The transformer",
// "The data master",
// "The asteroid ",
// "The pilot",
// "The shaman ",
// "The prophet",
// "The CEO ",
// "The bad customer",
// "The descendent",
// "The ancestor",
// "The thirsty ",
// "The sociopath",
// "The market square",
// "The domecile ",
// "The hate bakery ",
// "The coffee house",
// "The kiss",
// "The imperial capital",
// "The dome ",
// "The front door",
// "The joys of the underground",
// "The new emperors",
// "The Orange County School of Social Thought ",
// "The duchy of Brea ",
// "The palisades ",
// "The boat",
// "The Hayes Valley",
// "The train station",
// "The mage"
// ]
//




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
    console.log("The present:<br> " +deck[card1] + card1);

  card2 = (Math.floor((Math.random() * 22) + 1));
    if (card2 === card1) {
      card2 = (Math.floor((Math.random() * 22) + 1));
  //    $('#four').append('<div>The past:<br> ' + deck[card2] +'</div');
      pushDealtDeck(deck[card2], card2);
      console.log("The past: "+  deck[card2] + card2);
    }
    else {
    //  $('#four').append('<div>The past:<br> ' + deck[card2] +'</div');
      console.log("The past: "+  deck[card2] + card2);
      dealtDeck.push([deck[card2], card2]);
    }

  card3 = (Math.floor((Math.random() * 22) + 1));
    if (card3 == card1 || card3 == card2) {
      card3 = (Math.floor((Math.random() * 22) + 1));
      console.log("The future: " + deck[card3] + card3);
      //$('#six').append('<div>The future: ' + deck[card3] + '</div>')
      pushDealtDeck(deck[card3], card3);
    }
    else {

      console.log("The future: " + deck[card3] + card3);
      //$('#six').append('<div>The future: ' + deck[card3] + '</div>');
      pushDealtDeck(deck[card3], card3);
    }


  card4 = (Math.floor((Math.random() * 22) + 1));
    if (card4 == card1 || card4 == card2 || card4 == card3) {
      card4 = (Math.floor((Math.random() * 22) + 1));
      pushDealtDeck(deck[card4], card4);
    }
    else {
        console.log("That which is hidden: "+ deck[card4] +card4);
        //$('#two').append('<div>That which is hidden:<br> ' +deck[card4] + '</div>');
        pushDealtDeck(deck[card4], card4);
    }

  card5 = (Math.floor((Math.random() * 22) + 1));
    if (card5 == card1 || card5 ==  card2 || card5 ==  card3 || card5 == card4) {
      card5 = (Math.floor((Math.random() * 22) + 1));
      pushDealtDeck(deck[card5], card5);
    }
    else {
        console.log( "Outward influences: " +deck[card5] +card5);
        //$("#eight").append('<div>Outward influences:<br> ' + deck[card5] + '</div>');
        pushDealtDeck(deck[card5], card5);
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
function  showCard(){
  if (clickCounter == 0) {
    $("#five").append('<div id="card"> The present:<br> ' + deck[card1][0] + '</div');
    clickCounter= clickCounter +1;
  }
  else if (clickCounter == 2) {
    $('#four').append('<div id="card">The past:<br> ' + deck[card2][0] +'</div');
    clickCounter= clickCounter +1;
  }
  else if (clickCounter == 4) {
    $('#six').append('<div id="card">The future:<br> ' + deck[card3][0] + '</div>');
    clickCounter= clickCounter +1;
  }
  else if (clickCounter == 6){
    $('#two').append('<div id="card">That which is hidden:<br> ' +deck[card4][0] + '</div>');
    clickCounter= clickCounter +1;
  }
  else
    $("#eight").append('<div id="card">Outward influences:<br> ' + deck[card5][0] + '</div>');
    clickCounter= clickCounter +1;

}

dealCards();
