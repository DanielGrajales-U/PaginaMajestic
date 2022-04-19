document.querySelector(".menu").addEventListener("click", () => {
  document.querySelector(".navbarFloat").classList.toggle("show");
});

document.querySelector(".btn").addEventListener("click", () => {
  document.querySelector(".apartado1").classList.toggle("visible");
  document.querySelector(".cards").classList.toggle("invisible");
});
