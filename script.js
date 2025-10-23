const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const backBtn = document.querySelector(".back-btn");
const icon = menuToggle.querySelector(".material-symbols-outlined");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

backBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  icon.textContent = "menu";
});
