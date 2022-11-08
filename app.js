/* Imports */

import { renderGoblin } from './render-utils.js';

/* Get DOM Elements */
const goblinListEl = document.querySelector('.goblins');
const form = document.querySelector('form');

/* State */
let goblins = [
    { id: 1, name: 'Bingo', hp: 2 },
    { id: 2, name: 'Bongo', hp: 3 },
];
let currentId = 3;

/* Events */
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const goblinName = data.get('goblin-name');

    const newGoblin = {
        id: currentId,
        name: goblinName,
        hp: Math.ceil(Math.random() * 5),
    };

    currentId++;

    goblins.push(newGoblin);

    displayGoblins();
});

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
