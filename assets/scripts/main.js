var menuToggle = document.querySelector(".menu-toggle");

var navMenu = document.querySelector(".nav-menu");

menuToggle.onclick = () => {
    navMenu.classList.toggle("show");
}
