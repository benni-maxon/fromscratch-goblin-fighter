/* Imports */

import { renderGoblin } from './render-utils.js';

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

    for (let goblin of goblins) {
        const goblinEl = renderGoblin(goblin);

        // goblinEl.addEventListener('click', () => {
        //     goblinClickHandler(goblin);
        // });

        goblinListEl.append(goblinEl);
    }
}

displayGoblins();
// (don't forget to call any display functions you want to run on page load!)
