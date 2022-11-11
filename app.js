/* Imports */

import { renderImp } from './render-utils.js';

/* Get DOM Elements */
const defeatedNumberEl = document.querySelector('#defeated-number');
const adventurerHPEl = document.querySelector('#adventurer-hp');
const adventurerImgEl = document.querySelector('#adventurer-img');
const form = document.querySelector('form');
const impListEl = document.querySelector('.imps');
const impContainer = document.getElementById('imp-container');

/* State */
let defeatedImpsCount = 0;
let playerHP = 10;
let imps = [
    { id: 1, name: 'Bingo', hp: 2 },
    { id: 2, name: 'Bongo', hp: 3 },
];
let currentId = 3;

/* Events */
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const impName = data.get('imp-name');

    const newImp = {
        id: currentId,
        name: impName,
        hp: Math.ceil(Math.random() * 5),
    };

    currentId++;

    imps.push(newImp);

    displayImps();
});

function impClickHandler(impData) {
    if (impData.hp <= 0) return;

    if (Math.random() < 0.66) {
        impData.hp--;
        alert(`you hit ${impData.name}!`);
    } else {
        alert(`you tried to hit ${impData.name}, but missed!`);
    }

    if (Math.random() < 0.5) {
        playerHP--;
        alert(`${impData.name} hit you! Ouch!`);
    } else {
        alert(`${impData.name} tried to hit you, but you dodged the attack!`);
    }

    if (impData.hp === 0) {
        defeatedImpsCount++;
    }

    if (playerHP === 0) {
        adventurerImgEl.classList.add('game-over');
        alert('GAME OVER!!!');
        impContainer.innerHTML = '<p id="game-over-message" >GAME OVER</p>';
    }

    adventurerHPEl.textContent = playerHP;
    defeatedNumberEl.textContent = defeatedImpsCount;

    const hpEl = document.getElementById(`imp-hp-${impData.id}`);
    hpEl.textContent = impData.hp < 0 ? 0 : impData.hp;

    const faceEl = document.getElementById(`imp-face-${impData.id}`);
    faceEl.textContent = impData.hp > 0 ? '😈' : '🔥';
}

function gameOverLockout() {
    if (playerHP === 0) {
        return;
    }
}

/* Display Functions */
function displayImps() {
    impListEl.textContent = '';

    for (let imp of imps) {
        const impEl = renderImp(imp);

        impEl.addEventListener('click', () => {
            impClickHandler(imp);
        });

        impListEl.append(impEl);
    }
}

displayImps();
// (don't forget to call any display functions you want to run on page load!)
