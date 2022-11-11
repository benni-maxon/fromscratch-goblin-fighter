export function renderImp(impData) {
    const impEl = document.createElement('div');
    const faceEl = document.createElement('p');
    const nameEl = document.createElement('p');
    const hpEl = document.createElement('p');

    impEl.classList.add('imp');

    nameEl.textContent = impData.name;
    hpEl.id = `imp-hp-${impData.id}`;
    hpEl.textContent = impData.hp < 0 ? 0 : impData.hp;

    faceEl.id = `imp-face-${impData.id}`;
    faceEl.textContent = impData.hp > 0 ? '😈' : '🔥';

    if (impData.hp < 0) {
        impEl.classList.add('defeated');
    }

    impEl.append(nameEl, faceEl, hpEl);

    return impEl;
}
