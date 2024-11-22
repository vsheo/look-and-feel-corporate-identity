// https://codepen.io/shooft/pen/WNVZYeZ



// wanneer de pagina inlaad is de details element met de class snapElement open
function openSnapElement() {
    const snapElement = document.querySelector(".snapElement");
    if (window.innerWidth >= 800) {
        snapElement.open = true;
    }
}
// run JS wanneer de pagina inlaad
window.addEventListener('load', openSnapElement);
// run JS wanneer de pagina verandert van grootte
window.addEventListener('resize', openSnapElement);




const snapDetails = document.querySelectorAll("details");

function scrollToCenter(e) {
// 	oude niet meer open
	const nuOpen = document.querySelector(".snapElement");
	if (nuOpen) {
        nuOpen.open = false;
		nuOpen.classList.remove("snapElement");
	}
	
// 	nieuwe naar het midden
	const theDetail = e.currentTarget;
	theDetail.scrollIntoView({ behavior: "smooth", block: "start" });
	theDetail.classList.add("snapElement");
}

snapDetails.forEach(section => {
	section.addEventListener("click", scrollToCenter);
});
