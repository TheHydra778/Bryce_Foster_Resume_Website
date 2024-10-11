const hamburger_menu = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
let menuOpen = false;

hamburger_menu.addEventListener("click", () => {
    if (menuOpen == false) {
        navLinks.computedStyleMap.display = "block";
        menuOpen = true;
    }
    else if (menuOpen == true) {
        navLinks.computedStyleMap.apply.call.display = "none";
        menuOpen = false;
    }
});