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
    $("#five").append('<div id="card"> The present:<br> ' + deck[card1][1] + '</div');
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
