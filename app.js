var scores, roundScore, activePlayer, dice;

scores = [0,0];
roundScore = 0;
activePlayer = 0; // 0 is first player, 1 is second player

// Math.floor removes the decimals
// Math.random gives a random number between 0 and 1. We multiply that by 6 to get random number between 0 - 5. We add 1 to get random number between 1 - 6.
dice = Math.floor(Math.random() * 6) + 1;

console.log(dice);

// querySelector lets us select stuff exactly the way we do it in CSS. The only difference is that it selects the first element it finds
// like CSS to select ids, we use #
// textContent: gets or sets the text content of a node and its descendants. textContent can only set plain text, no HTML
document.querySelector('#current-0').textContent = dice;

// innerHTML lets us add html elements. (this is example of above line)
// document.querySelector('#current-0').innerHTML = '<em>' + dice + '</em>';

// getter: we get a value
var x = document.querySelector('#score-0').textContent;
console.log(x);

// we want to change the style to display:none because when the user first opens the webpage, the dice should not be visible
document.querySelector('.dice').style.display = 'none';
