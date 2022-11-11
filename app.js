/* Imports */

import { renderGoblin } from './render-utils.js';

/* Get DOM Elements */
const defeatedNumberEl = document.querySelector('#defeated-number');
const adventurerHPEl = document.querySelector('#adventurer-hp');
const adventurerImgEl = document.querySelector('#adventurer-img');
const form = document.querySelector('form');
const goblinListEl = document.querySelector('.goblins');
const goblinContainer = document.getElementById('goblin-container');

/* State */
let defeatedGoblinsCount = 0;
let playerHP = 1;
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

function goblinClickHandler(goblinData) {
    if (goblinData.hp <= 0) return;

    if (Math.random() < 0.66) {
        goblinData.hp--;
        alert(`you hit ${goblinData.name}!`);
    } else {
        alert(`you tried to hit ${goblinData.name}, but missed!`);
    }

    if (Math.random() < 0.5) {
        playerHP--;
        alert(`${goblinData.name} hit you! Ouch!`);
    } else {
        alert(`${goblinData.name} tried to hit you, but you dodged the attack!`);
    }

    if (goblinData.hp === 0) {
        defeatedGoblinsCount++;
    }

    if (playerHP === 0) {
        adventurerImgEl.classList.add('game-over');
        alert('GAME OVER!!!');
        goblinContainer.innerHTML = '<p id="game-over-message" >GAME OVER</p>';
    }

    adventurerHPEl.textContent = playerHP;
    defeatedNumberEl.textContent = defeatedGoblinsCount;

    const hpEl = document.getElementById(`goblin-hp-${goblinData.id}`);
    hpEl.textContent = goblinData.hp < 0 ? 0 : goblinData.hp;

    const faceEl = document.getElementById(`goblin-face-${goblinData.id}`);
    faceEl.textContent = goblinData.hp > 0 ? '😈' : '🔥';
}

function gameOverLockout() {
    if (playerHP === 0) {
        return;
    }
}

/* Display Functions */
function displayGoblins() {
    goblinListEl.textContent = '';

    for (let goblin of goblins) {
        const goblinEl = renderGoblin(goblin);

        goblinEl.addEventListener('click', () => {
            goblinClickHandler(goblin);
        });

        goblinListEl.append(goblinEl);
    }
}

displayGoblins();
// (don't forget to call any display functions you want to run on page load!)
