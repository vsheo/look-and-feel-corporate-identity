// https://dev.to/iamdoctorj/locking-scroll-of-multiple-containers-simultaneously-2jcl

let tijd = document.querySelector(".tijd");
let section = document.querySelector(".snapElement");

let isFirstScrolling = false;
let isSecondScrolling = false;

tijd.addEventListener('scroll', (e) => {
  if(!isSecondScrolling) {
    isFirstScrolling = true;
    customDebounce("first");
    section.scrollLeft = e.target.scrollLeft;
  }
});

section.addEventListener('scroll', (e) => {
  if(!isFirstScrolling) {
    isSecondScrolling = true;
    customDebounce("second");
    tijd.scrollLeft = e.target.scrollLeft;
  }
});

let timeOut;

const customDebounce = (tracker) => {
  console.log(timeOut);
  clearTimeout(timeOut);
  console.log("cleared",timeOut);
  timeOut = setTimeout(() => {
    if(tracker === "first")
      isFirstScrolling = !isFirstScrolling;
    else
      isSecondScrolling = !isSecondScrolling;
  }, 700);
}
