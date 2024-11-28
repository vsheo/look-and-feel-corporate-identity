// op de desktop website worden classes gezet voor de kleur van de sections(radiozenders + programma kaartjes)

// selecteer de sections en de articles
const sections = document.querySelectorAll('section');
const articles = document.querySelectorAll('article');

// de classes die toegevoegd moeten worden
const primary = ["primary"]
const background = ["neutral"]

const primaryColor = ["veronica-primary", "slam-primary", "honderdp-primary", "sublime-primary"]
const backgroundColor =["veronica-neutral", "slam-neutral", "honderdp-neutral", "sublime-neutral"]

// Dit alleen op desktop versie uit voeren
if (window.innerWidth >= 800) {
    for (let s = 0; s < primaryColor.length; s++) {
         // de classes primary en brand-primary aan de sections toevoegen
        sections[s].classList.add(primary[0]);
        sections[s].classList.add(primaryColor[s]);
        
        // de classes secondary en brand-secondary aan de articles toevoegen
        for (let a = 0; a < articles.length; a++) {
            q = 0
            articles[a].classList.add(background[0]);
            articles[a].classList.add(backgroundColor[q]);
        }
    }
}

