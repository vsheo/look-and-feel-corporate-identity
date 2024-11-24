// op de desktop website worden classes gezet voor de kleur van de sections(radiozenders + programma kaartjes)


const sections = document.querySelectorAll('section');
const articles = document.querySelectorAll('article');

const primary = ["primary"]
const secondary = ["secondary"]

const primaryColor = ["veronica-primary", "slam-primary", "honderdp-primary", "sublime-primary"]
const secondaryColor =["veronica-secondary", "slam-secondary", "honderdp-secondary", "sublime-secondary"]

// alleen op desktop uit voeren
if (window.innerWidth >= 800) {
    for (let s = 0; s < primaryColor.length; s++) {
         // de classes "primary brand-primary" aan de sections toevoegen
        sections[s].classList.add(primary[0]);
        sections[s].classList.add(primaryColor[s]);
        
        // de classes "secondary brand-secondary" aan de articles toevoegen
        for (let a = 0; a < articles.length; a++) {
            q = 0
            articles[a].classList.add(secondary[0]);
            articles[a].classList.add(secondaryColor[q]);
        }
        q++
    }
}

