const menuIcon = document.querySelector(".menu-icon");
const nav = document.querySelector(".nav-ul");
const date = document.getElementById("date");
const loading = document.querySelector(".loading");

menuIcon.addEventListener("click", () => {
  nav.classList.toggle("nav-active");
});

let year = new Date().getFullYear();
date.textContent = year;
