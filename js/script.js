const srcBrr = document.getElementById("s-bar");
const formBtn = document.getElementById("form-btn");
const caroselli = document.querySelectorAll(".carousel");

formBtn.addEventListener("click", () => {
  srcBrr.classList.toggle("hidden");
});

caroselli.forEach((carosello) => {
  const prwBtn = carosello.querySelector(".carousel-control-prev");
  const nxtBtn = carosello.querySelector(".carousel-control-next");
  const caroselloInterno = carosello.querySelector(".carousel-inner");

  prwBtn.addEventListener("click", () => {
    caroselloInterno.scrollBy({ left: -caroselloInterno.offsetWidth, behavior: "smooth" });
  });

  nxtBtn.addEventListener("click", () => {
    caroselloInterno.scrollBy({ left: caroselloInterno.offsetWidth, behavior: "smooth" });
  });
});
