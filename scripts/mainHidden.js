// de week, tijd, nav en de player zijn standaard op display none
// met deze functie komt het op scherm als de details open gaat

const allDetails = document.getElementsByTagName('details');

const week = document.querySelector('.week');
const tijd = document.querySelector('.tijd');
const nav = document.querySelector('.radioMenu');
const player = document.querySelector('.player');

// Loop door alle detail elementen
for (let i = 0; i < allDetails.length; i++) {
    const detail = allDetails[i];

    // check welke detail element open is
    detail.addEventListener('toggle', function () {
        // als detail open wordt gemaakt, breng de week en tijd tevoorschijn
        if (detail.open) {
            week.classList.remove('hidden');
            tijd.classList.remove('hidden');
            nav.classList.remove('nav-hidden');
            player.classList.remove('hidden');
        }
    });
}
