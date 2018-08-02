<<<<<<< HEAD
// array of objects for cards and metadata
var cards = [];
// stores series of cards, "decks"
var decks;
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

// create new card objects from the array: givencurrentSeriesCards 
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
  console.log("card: " + cards[currentCardCount].displayName);
  // change backgrounds
  applyBG();
}

// Change background of card front and back
function applyBG() {
  // Use 'currentCardCount'
  var count = currentCardCount;
  //console.log('applyBG: ' + currentCardCount);
  // Set background of card front
  // Select corresponding object in 'cards' to 'currentCardCount'
  var frontHandle = cards[count].frontBkgndFile;
  //console.log("current 'cards' object\'s location: " + frontHandle);
  // Change css background to match counter
  var str1 = "url(" + frontHandle + ") center no-repeat";
  $('#cardFront').css({
    'background': str1,
    'background-size': 'contain',
  });
  // Set background of card back
  // Select corresponding object in 'cards' to 'currentCardCount'
  var backHandle = cards[count].backBkgndFile;
  //console.log("current 'cards' object\'s location: " + backHandle);
  // Change css background to match counter
  var str2 = "url(" + backHandle + ") center no-repeat";
  $('#cardBack').css({
    'background': str2,
    'background-size': 'contain',
  });
}

function hideDivs() {
  //$('#libraryWrapper').hide();
  $('#settingsWrapper').hide();
  $('#flashcardWrapper').hide();
}


// document handler
$(document).ready(function() {
  hideDivs();
  // Populate card object with flashcard metadata on document.ready
  cardMetaToObjects();
  // Apply background to card
  applyBG();


  /* **** **** Event Handlers **** *****/

  // Card Front/Back Toggle
  $(".cardSide").on('click', function() {
    $("#cardFront").toggleClass("hideSide");
    $("#cardBack").toggleClass("hideSide");
    //console.log("Card Flip");
    
  });

  // Next Card on Arrow Press
  $(".side-panel").on('click', function() {
    // Display current card in cards-array
    var thisData = $(this).attr('data');
    changeCard(thisData);
    //console.log(thisData);
    // Display card front
    $("#cardFront").removeClass("hideSide");
    $("#cardBack").addClass("hideSide");
  });

  // Menu Toggle
  $("#burgerMenu").on('click', function() {
    $("#menuList").toggle();
    //console.log("Card Flip");
  });

  // Top Menu Nav Button Events
  $(".navBtn").on('click', function() {
    // Change Main Menu Nav Button Styles
    // check if this button is the current menu item
    var thatClass = $(this).hasClass('menuCurrent');
    // if it is, 
    if(thatClass) {
        console.log('current button');
        // hide menu
        $("#menuList").toggle();
    // else...
    } else {
      // clear all navBtn classes
        $(".navBtn").removeClass('menuCurrent');
      // apply currentMenu class to this one
        $(this).addClass('menuCurrent');
      // find data target to switch screens
        var dataTarget = "#" + $(this).attr("data-screen-link") + "Wrapper";
        console.log(dataTarget);
      // hide all 'mainDiv's
        $(".mainDivWrapper").hide();
      // display id=dataTarget
        $(dataTarget).show();
      
    }

  });
  $('.mainDivWrapper').on('click', function() {
    // Close Menu
      $("#menuList").hide();
  });
});



























=======
// array of objects for cards and metadata
var cards = [];
// stores series of cards, "decks"
var decks;
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

// create new card objects from the array: givencurrentSeriesCards 
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
  console.log("card: " + cards[currentCardCount].displayName);
  // change backgrounds
  applyBG();
}

// Change background of card front and back
function applyBG() {
  // Use 'currentCardCount'
  var count = currentCardCount;
  //console.log('applyBG: ' + currentCardCount);
  // Set background of card front
  // Select corresponding object in 'cards' to 'currentCardCount'
  var frontHandle = cards[count].frontBkgndFile;
  //console.log("current 'cards' object\'s location: " + frontHandle);
  // Change css background to match counter
  var str1 = "url(" + frontHandle + ") center no-repeat";
  $('#cardFront').css({
    'background': str1,
    'background-size': 'contain',
  });
  // Set background of card back
  // Select corresponding object in 'cards' to 'currentCardCount'
  var backHandle = cards[count].backBkgndFile;
  //console.log("current 'cards' object\'s location: " + backHandle);
  // Change css background to match counter
  var str2 = "url(" + backHandle + ") center no-repeat";
  $('#cardBack').css({
    'background': str2,
    'background-size': 'contain',
  });
}

function hideDivs() {
  //$('#libraryWrapper').hide();
  $('#settingsWrapper').hide();
  $('#flashcardWrapper').hide();
}


// document handler
$(document).ready(function() {
  hideDivs();
  // Populate card object with flashcard metadata on document.ready
  cardMetaToObjects();
  // Apply background to card
  applyBG();


  /* **** **** Event Handlers **** *****/

  // Card Front/Back Toggle
  $(".cardSide").on('click', function() {
    $("#cardFront").toggleClass("hideSide");
    $("#cardBack").toggleClass("hideSide");
    //console.log("Card Flip");
    
  });

  // Next Card on Arrow Press
  $(".side-panel").on('click', function() {
    // Display current card in cards-array
    var thisData = $(this).attr('data');
    changeCard(thisData);
    //console.log(thisData);
    // Display card front
    $("#cardFront").removeClass("hideSide");
    $("#cardBack").addClass("hideSide");
  });

  // Menu Toggle
  $("#burgerMenu").on('click', function() {
    $("#menuList").toggle();
    //console.log("Card Flip");
  });

  // Top Menu Nav Button Events
  $(".navBtn").on('click', function() {
    // Change Main Menu Nav Button Styles
    // check if this button is the current menu item
    var thatClass = $(this).hasClass('menuCurrent');
    // if it is, 
    if(thatClass) {
        console.log('current button');
        // hide menu
        $("#menuList").toggle();
    // else...
    } else {
      // clear all navBtn classes
        $(".navBtn").removeClass('menuCurrent');
      // apply currentMenu class to this one
        $(this).addClass('menuCurrent');
      // find data target to switch screens
        var dataTarget = "#" + $(this).attr("data-screen-link") + "Wrapper";
        console.log(dataTarget);
      // hide all 'mainDiv's
        $(".mainDivWrapper").hide();
      // display id=dataTarget
        $(dataTarget).show();
      
    }

  });
  $('.mainDivWrapper').on('click', function() {
    // Close Menu
      $("#menuList").hide();
  });
});



























>>>>>>> 1e698d3e105d991d8780130d31d1e2df83e61497
