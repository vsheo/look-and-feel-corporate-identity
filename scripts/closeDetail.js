// als 1 details open gaat, dan gaan de andere op display none

const details = document.querySelectorAll('details');

details.forEach((detailElement) => {
    detailElement.addEventListener('toggle', () => {
        if (detailElement.open) {
            details.forEach((overigDetail) => {
                if (overigDetail !== detailElement) {
                    overigDetail.classList.add('hidden');
                }
            });
        }
    });
});
