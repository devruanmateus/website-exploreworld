let openMenu = document.querySelector("#open-menu");
let iconCloseMenu = document.querySelector("#icon-close-menu");
let iconMenu = document.querySelector("#icon-open-menu");

let menuNav = document.querySelector(".menu-nav");
menuNav.classList.add("hidden");

iconMenu.style.display = "block";
iconCloseMenu.style.display = "none";

openMenu.addEventListener("click", function () {
  if (iconMenu.style.display == "block") {
    iconMenu.style.display = "none";
    iconCloseMenu.style.display = "block";
  } else {
    iconMenu.style.display = "block";
    iconCloseMenu.style.display = "none";
  }

  menuNav.classList.toggle("hidden");
});

// Script para o carrossel de imagens
let radio = document.querySelector(".manual-btn");
let count = 1;

document.getElementById("radio1").checked = true;

setInterval(() => {
  nextImg();
}, 5000);

function nextImg() {
  count++;

  if (count > 2) {
    count = 1;
  }

  document.getElementById(`radio${count}`).checked = true;
}

/* Script para acessar as sub-listas de passagens aéreas */
let infoTickets = document.querySelectorAll(".info-tickets");

infoTickets.forEach((infoTicket) => {
  // Seleciona o botão arrow-down dentro do .info-tickets
  let showTickets = infoTicket.querySelector(".arrow-down");

  let tickets = infoTicket.querySelector(".tickets");

  showTickets.addEventListener("click", function () {
    // Captura o display atual
    let currentDisplay = getComputedStyle(tickets).display;

    if (currentDisplay === "none") {
      tickets.style.display = "block";
      showTickets.style.setProperty("--arrow", "url(../img/arrow-up.svg)");
    } else {
      tickets.style.display = "none";
      showTickets.style.setProperty("--arrow", "url(../img/arrow-down.svg)");
    }
  });
});
