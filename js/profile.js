const btnList = document.querySelectorAll(".d-flex.justify-content-center.gap-4 > button");
const check = document.querySelector(".check");
const check2 = document.querySelector(".check2");

// lasciando questa logica ne ho messa solo una obligatoria
check.addEventListener("change", (e) => {
  if (e.target.checked) {
    btnList.forEach((btn) => {
      console.log(e.target.checked);

      btn.removeAttribute("disabled");
    });
  } else {
    btnList.forEach((btn) => {
      console.log("false");
      btn.setAttribute("disabled", true);
    });
  }
});

// questo lo abbiamo visto insieme alle 17

// checkList.forEach((check) => {
//   check.addEventListener("change", (e) => {
//     if (e.target.checked) {
//       btnList.forEach((btn) => {
//         console.log(e.target.checked);

//         btn.removeAttribute("disabled");
//       });
//     } else {
//       btnList.forEach((btn) => {
//         console.log("false");
//         btn.setAttribute("disabled", true);
//       });
//     }
//   });
// });
