// als 1 details open gaat, dan gaan de andere op display none


detailButton.forEach((button) => {
    button.addEventListener('click', () => {
        if (detailElement.open) {
            details.forEach((overigDetail) => {
                if (overigDetail !== detailElement) {
                    overigDetail.classList.add('hidden');
                }
            });
        }
    });
});




    // 1 voor 1 door alle details elementen
    closeDetail.forEach((details) => {
        details.addEventListener("toggle", (e) => {
            // check als details open is
            if (details.open) {
                closeDetail.forEach((details) => {
                    // als een nieuwe open gaat, dan gaat de oude dicht
                    if (details != e.target && details.open) {
                        details.open = false
                    }
                })
            }
        })
    })



// const openNav = document.querySelector(".openNav");
// const radioMenu = document.querySelector(".radioMenu");

const detailButton = document.querySelectorAll('.openDetail');


detailButton.onclick = function () {
    const closeDetails = document.querySelectorAll("details");
    closeDetails.forEach((details) => {
        details.open = false;
    });
};


