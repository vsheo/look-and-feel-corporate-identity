// de div week_tijd is tandaard op display none
// met deze functie komt het op scherm als de details open gaat

const allDetails = document.getElementsByTagName('details');

// Loop door alle detail elementen
for (let i = 0; i < allDetails.length; i++) {
    const detail = allDetails[i];

    // check welke detail element open is
    detail.addEventListener('toggle', function () {
        // maak een variable van de span binnen de summary element
        const week = document.querySelector('.week');
        const tijd = document.querySelector('.tijd');

        // als detail open wordt gemaakt, breng de week en tijd tevoorschijn
        if (detail.open) {
            week.classList.remove('hidden');
            tijd.classList.remove('hidden');
        }
    });
}
