// als de button in de nav geklikt wordt dan slide de restvan de nav in beeld.
// door een class toe te voegen aan de nav


const openNav = document.querySelector(".openNav");
const radioMenu = document.querySelector(".radioMenu");

openNav.onclick = function () {
    radioMenu.classList.toggle("nav-active");

    if (radioMenu.classList.contains("nav-active")) {
        openNav.textContent = ">";
    }
    else { openNav.textContent = "<";
    }
};
