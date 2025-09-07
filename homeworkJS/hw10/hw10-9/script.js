const box = document.getElementById('box');

let currentPrise = parseInt(localStorage.getItem('prise')) || 100;
let lastUpdate = +localStorage.getItem('lastUpdate');

const now = Date.now();

if(now - lastUpdate > 10000) {
    currentPrise += 10;
    localStorage.setItem('prise', currentPrise);
    localStorage.setItem('lastUpdate', now);
}




box.innerText = currentPrise + ' uan';