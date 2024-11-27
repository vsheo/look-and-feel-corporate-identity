// als de button in de nav geklikt wordt dan slide de rest van de nav in beeld.
// door een class toe te voegen aan de nav

// selecteer de button
const openNav = document.querySelector(".openNav");
// selecteer het menu dat in beeld moet komen
const radioMenu = document.querySelector(".radioMenu");

openNav.onclick = function () {
    // voeg de class nav-active toe of haal het weg
    // deze class voert een transfrom uit, zodat de rest van de nav in beeld komt. of uit beeld gaat als het weg gehaald wordt
    radioMenu.classList.toggle("nav-active");

    // als de nav open of gesloten is verander de tekst in de button
    if (radioMenu.classList.contains("nav-active")) {
        openNav.textContent = ">";
    }
    else { openNav.textContent = "<";
    }
};
