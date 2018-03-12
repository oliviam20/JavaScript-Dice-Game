var scores, roundScore, activePlayer;

scores = [0,0];
roundScore = 0;
activePlayer = 0; // 0 is first player, 1 is second player


// CODE STARTS

// we want to change the style to display:none because when the user first opens the webpage, the dice should not be visible
document.querySelector('.dice').style.display = 'none';

// getElementById only works for ids but is faster than querySelector. Unlike querySelector, it doesn't need '#' for id because it know it's an id already
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0'; 

// addEventListener registers a single event listener on a single target. 2 args: 1. the event type e.g. click. 2. the function to be called when the event happens. note: you can use anonymous function as argument instead of external function like btn() on line 14 e.g. function() {}
function btn() {
  // 1. random number
  // Math.floor removes the decimals
  // Math.random gives a random number between 0 and 1. We multiply that by 6 to get random number between 0 - 5. We add 1 to get random number between 1 - 6.
  var dice = Math.floor(Math.random() * 6) + 1;

  //2. display result: unhiding the dice after 'rolling' it
  var diceDOM = document.querySelector('.dice');
  diceDOM.style.display = 'block';
  // changing the dice image src
  diceDOM.src = 'dice-' + dice + '.png';

  // 3. update the round score IF the rolled number is NOT a 1
}
document.querySelector('.btn-roll').addEventListener('click', btn);
// 2nd arg (function) we don't need to add () because we're not calling it, the event listener will call the function for us. This is known as callback function; a function that is not called by us, but by another function. The function that is pass into another function as an argument and this function (addEventListener method) will then call that function for us
// https://developer.mozilla.org/en-US/docs/Web/Events










// other notes

// querySelector lets us select stuff exactly the way we do it in CSS. The only difference is that it selects the first element it finds
// like CSS to select ids, we use #
// textContent: gets or sets the text content of a node and its descendants. textContent can only set plain text, no HTML
// document.querySelector('#current-0').textContent = dice;

// innerHTML lets us add html elements. (this is example of above line)
// document.querySelector('#current-0').innerHTML = '<em>' + dice + '</em>';

// getter: we get a value
// var x = document.querySelector('#score-0').textContent;
// console.log(x);
