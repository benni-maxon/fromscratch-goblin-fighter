/* Imports */

/* Get DOM Elements */
const goblinListEl = document.querySelector('.goblins');

/* State */
let goblins = [
    { id: 1, name: 'Bingo', hp: 2 },
    { id: 2, name: 'Bongo', hp: 3 },
];
let currentId = 3;

/* Events */

/* Display Functions */
function displayGoblins() {
    goblinListEl.textContent = '';

    for (let goblin of goblins)
}

// (don't forget to call any display functions you want to run on page load!)
