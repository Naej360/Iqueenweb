// Script simple: abre y cierra el menú en pantallas pequeñas
document.addEventListener("DOMContentLoaded", function () {
  const boton = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".nav-links");

  if (boton && menu) {
    boton.addEventListener("click", function () {
      menu.classList.toggle("abierto");
    });
  }
});
