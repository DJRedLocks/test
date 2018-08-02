<<<<<<< HEAD
// array of objects for cards and metadata
var cards = [];
// place counter for current card
var currentCardCount = 0;
// contains names of cards to be processed into object
// [fileName, cardLocation, displayName, frontBkgndFile, backBkgndFile]
var currentSeriesCards = [
// card 1
['card1','/cards/card1', 'Card 1', 'cards/card1/flashCardFront.png', 'cards/card1/flashCardBack.png'],
// card 2
['card2','/cards/card2', 'Card 2', 'cards/card2/flashCardFront.png', 'cards/card2/flashCardBack.png'],
// card 3
['card3','/cards/card3', 'Card 3', 'cards/card3/flashCardFront.png', 'cards/card3/flashCardBack.png'],

];

// create new card object from currentSeriesCards array
function createCard(arr) {
  this.fileName = arr[0];
  this.cardLocation = arr[1];
  this.displayName = arr[2];
  this.frontBkgndFile = arr[3];
  this.backBkgndFile = arr[4];
}

// loop through 'currentSeriesCards'
function cardMetaToObjects() {
    for(var i = 0; i < currentSeriesCards.length; i++) {
      // create array of objects for each card
      var currentCard = new createCard(currentSeriesCards[i]);
      cards.push(currentCard);
    }
  //console.log(cards);
}

// Change of card events
function changeCard(arg) {
  // change 'currentCardCount' place counter
  if(arg === "right") { // next card
    // if end of series, return to beginning
    if(currentCardCount === currentSeriesCards.length-1) {
      currentCardCount = 0;
    } else {
      currentCardCount++;
    }
  } else if(arg === "left") { // previous card
    // if beginning of series, return to beginning
    if(currentCardCount === 0) {
      currentCardCount = currentSeriesCards.length-1;
    } else {
      currentCardCount--;
    }
  }
  console.log("card number: " + currentCardCount);
  // change backgrounds
  applyBG();
}

// Change backgrounds
function applyBG() {
  // Use 'currentCardCount'
  var count = currentCardCount;
  console.log('applyBG: ' + currentCardCount);
  // Set background of card front
  // Select corresponding object in 'cards' to 'currentCardCount'
  var frontHandle = cards[count].frontBkgndFile;
  console.log("current 'cards' object\'s location: " + frontHandle);
  // Change css background to match counter
  var str1 = "url(" + frontHandle + ") center no-repeat";
  $('#cardFront').css({
    'background': str1,
    'background-size': 'contain',
  });
// Set background of card back
  // Select corresponding object in 'cards' to 'currentCardCount'
  var backHandle = cards[count].backBkgndFile;
  console.log("current 'cards' object\'s location: " + backHandle);
  // Change css background to match counter
  var str2 = "url(" + backHandle + ") center no-repeat";
  $('#cardBack').css({
    'background': str2,
    'background-size': 'contain',
  });
}


// document handler
$(document).ready(function() {

  // Populate card object with flashcard metadata on document.ready
  cardMetaToObjects();
  // Apply background to card
  applyBG();
  // Card Front/Back Toggle
  $(".cardSide").on('click', function() {
    $("#cardFront").toggleClass("hideSide");
    $("#cardBack").toggleClass("hideSide");
    //console.log("Card Flip");
  });

  // Next Card on Arrow Press
  $(".arrow-overlay").on('click', function() {
    // Display current card in cards-array
    var thisData = $(this).attr('data');
    changeCard(thisData);
    //console.log(thisData);
    // Display card front
    $("#cardFront").removeClass("hideSide");
    $("#cardBack").addClass("hideSide");
  });
  
});



























=======
// array of objects for cards and metadata
var cards = [];
// place counter for current card
var currentCardCount = 0;
// contains names of cards to be processed into object
// [fileName, cardLocation, displayName, frontBkgndFile, backBkgndFile]
var currentSeriesCards = [
// card 1
['card1','/cards/card1', 'Card 1', 'cards/card1/flashCardFront.png', 'cards/card1/flashCardBack.png'],
// card 2
['card2','/cards/card2', 'Card 2', 'cards/card2/flashCardFront.png', 'cards/card2/flashCardBack.png'],
// card 3
['card3','/cards/card3', 'Card 3', 'cards/card3/flashCardFront.png', 'cards/card3/flashCardBack.png'],

];

// create new card object from currentSeriesCards array
function createCard(arr) {
  this.fileName = arr[0];
  this.cardLocation = arr[1];
  this.displayName = arr[2];
  this.frontBkgndFile = arr[3];
  this.backBkgndFile = arr[4];
}

// loop through 'currentSeriesCards'
function cardMetaToObjects() {
    for(var i = 0; i < currentSeriesCards.length; i++) {
      // create array of objects for each card
      var currentCard = new createCard(currentSeriesCards[i]);
      cards.push(currentCard);
    }
  //console.log(cards);
}

// Change of card events
function changeCard(arg) {
  // change 'currentCardCount' place counter
  if(arg === "right") { // next card
    // if end of series, return to beginning
    if(currentCardCount === currentSeriesCards.length-1) {
      currentCardCount = 0;
    } else {
      currentCardCount++;
    }
  } else if(arg === "left") { // previous card
    // if beginning of series, return to beginning
    if(currentCardCount === 0) {
      currentCardCount = currentSeriesCards.length-1;
    } else {
      currentCardCount--;
    }
  }
  console.log("card number: " + currentCardCount);
  // change backgrounds
  applyBG();
}

// Change backgrounds
function applyBG() {
  // Use 'currentCardCount'
  var count = currentCardCount;
  console.log('applyBG: ' + currentCardCount);
  // Set background of card front
  // Select corresponding object in 'cards' to 'currentCardCount'
  var frontHandle = cards[count].frontBkgndFile;
  console.log("current 'cards' object\'s location: " + frontHandle);
  // Change css background to match counter
  var str1 = "url(" + frontHandle + ") center no-repeat";
  $('#cardFront').css({
    'background': str1,
    'background-size': 'contain',
  });
// Set background of card back
  // Select corresponding object in 'cards' to 'currentCardCount'
  var backHandle = cards[count].backBkgndFile;
  console.log("current 'cards' object\'s location: " + backHandle);
  // Change css background to match counter
  var str2 = "url(" + backHandle + ") center no-repeat";
  $('#cardBack').css({
    'background': str2,
    'background-size': 'contain',
  });
}


// document handler
$(document).ready(function() {

  // Populate card object with flashcard metadata on document.ready
  cardMetaToObjects();
  // Apply background to card
  applyBG();
  // Card Front/Back Toggle
  $(".cardSide").on('click', function() {
    $("#cardFront").toggleClass("hideSide");
    $("#cardBack").toggleClass("hideSide");
    //console.log("Card Flip");
  });

  // Next Card on Arrow Press
  $(".arrow-overlay").on('click', function() {
    // Display current card in cards-array
    var thisData = $(this).attr('data');
    changeCard(thisData);
    //console.log(thisData);
    // Display card front
    $("#cardFront").removeClass("hideSide");
    $("#cardBack").addClass("hideSide");
  });
  
});



























>>>>>>> 1e698d3e105d991d8780130d31d1e2df83e61497
