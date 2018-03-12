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
// textContent: gets or sets the text content of a node and its descendants
document.querySelector('#current-0').textContent = dice;
