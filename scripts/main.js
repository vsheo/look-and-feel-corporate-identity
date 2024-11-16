

// meer info gaat weg als op de summary geklikt wordt
const allDetail = document.getElementsByTagName('details');

// Loop door alle detail elementen
for (let i = 0; i < allDetails.length; i++) {
  const detail = allDetails[i];

  // check welke detail element open is
  detail.addEventListener('toggle', function() {
    // maak een variable van de span binnen de summary element
    const summarySpan = detail.querySelector('summary > span');

    // als detail open wordt gemaakt, hide de span element
    if (detail.open) {
      summarySpan.classList.add('hidden');      
    } else {
      summarySpan.classList.remove('hidden');
    }
  });
}


// maak detail dicht als een nieuwe open gaat. dit werkt alleen voor mobile schermen.
const mobileQuery = window.matchMedia('(max-width: 600px)')
if (mobileQuery.matches) {
    // zoekt alle details elementen, en slaat het op in een const
    const closeDetail = document.querySelectorAll("details")

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
}

// --------------------------------------------------------------voor alle dagen van de week
function currentDay() {
    const now = new Date();
    var day = now.getDay();
    day += 1;
    console.log(day)
    const highlightDay = document.querySelector('week li:nth-of-type('+ day +')')
    console.log(highlightDay)
    // highlightDay.classList.add('highlight')
}
currentDay();


// check de tijd, als de tijd tussen 2 uren is dan krijgt de bijbehoorende ID een class
function currentProgramma() {
    const now = new Date();
    const currentTime = String(now.getHours()).padStart(2, '0');
    if (currentTime >= 0 && currentTime < 4) {
        const thisElement = document.getElementById('0_4')
        thisElement.classList.add('now_playing')
    }
    else if (currentTime >= 4 && currentTime < 6) {
        const thisElement = document.getElementById('4_6')
        thisElement.classList.add('now_playing')
    }
    else if (currentTime >= 6 && currentTime < 9) {
        const thisElement = document.getElementById('6_9')
        thisElement.classList.add('now_playing')
    }
    else if (currentTime >= 9 && currentTime < 12) {
        const thisElement = document.getElementById('9_12')
        thisElement.classList.add('now_playing')
    }
    else if (currentTime >= 12 && currentTime < 14) {
        const thisElement = document.getElementById('12_14')
        thisElement.classList.add('now_playing')
    }
    else if (currentTime >= 14 && currentTime < 16) {
        const thisElement = document.getElementById('14_16')
        thisElement.classList.add('now_playing')
    }
    else if (currentTime >= 16 && currentTime < 19) {
        const thisElement = document.getElementById('16_19')
        thisElement.classList.add('now_playing')
    }
    else if (currentTime >= 19 && currentTime < 21) {
        const thisElement = document.getElementById('19_21')
        thisElement.classList.add('now_playing')
    }
    else if (currentTime >= 21 && currentTime < 24) {
        const thisElement = document.getElementById('21_24')
        thisElement.classList.add('now_playing')
    }
}
// run de functie, en check elke minuut wat de tijd is
currentProgramma();
setInterval(currentProgramma, 60000);

// voor grote schermen is detail altijd open
function desktopScreen() {
    const mediaQuery = window.matchMedia('(min-width: 600px)')
    // Check if the media query is true
    if (mediaQuery.matches) {
        let details = document.body.querySelectorAll('details');
        details.forEach((detail) => {
            detail.setAttribute('open',true);
        });
        // haal de summary weg
        let summary = document.body.querySelectorAll('summary');
        summary.forEach((summary) => {
            summary.style.display = 'none';
        });
    }
}
desktopScreen();
