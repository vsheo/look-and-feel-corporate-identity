// als 1 details open gaat, dan gaan de andere op display none

// selecteer alle details elementen
const details = document.querySelectorAll('details');

// kijk 1 voor 1 als een details element open gaat
details.forEach((detailElement) => {
    detailElement.addEventListener('toggle', () => {
        // als een details element open is, dan gaan alle overige details elementen op display none
        if (detailElement.open) {
            details.forEach((overigDetail) => {
                if (overigDetail !== detailElement) {
                    overigDetail.classList.add('hidden');
                }
            });
        }
    });
});
