// Acceder al botón hamburguesa desde javsacript
var menuToggle = document.querySelector(".menu-toggle");

// Acceder al menú (nav-menu) desde javascript 
var navMenu = document.querySelector(".nav-menu");

// Captura el evento click del botón hamburguesa
// para alternar la visualización del menú
menuToggle.onclick = () => {
    navMenu.classList.toggle("show");
}
/* 

*/