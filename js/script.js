const srcBrr = document.getElementById("s-bar");
const formBtn = document.getElementById("form-btn");
const caroselli = document.querySelectorAll(".carousel");
const btnList = document.querySelectorAll(".d-flex.justify-content-center.gap-4 > button");
const checkList = document.querySelectorAll(".check");

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

// non sono riuscito ad aggiustarlo in tempo è un pò bruttino XD

checkList.forEach((check) => {
  if (check.checked) {
    btnList.forEach((btn) => {
      btn.disabled = false;
    });
  } else {
    btnList.forEach((btn) => {
      btn.disabled = true;
    });
  }
});
