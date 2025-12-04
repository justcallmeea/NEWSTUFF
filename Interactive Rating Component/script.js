"use strict";
const ratingCard = document.querySelector(".card");
const thankYouCard = document.querySelector(".thank-you-card");
const ratingBtns = document.querySelectorAll(".button");
console.log(ratingBtns);
const submitBtn = document.querySelector(".card__button--submit");
const errorMessage = document.querySelector(".error-message");
const thankYouRating = document.querySelector(".thank-you-card__rating");
// Applying style for selected rating button
ratingBtns.forEach((value) => {
  value.addEventListener("click", function (e) {
    ratingBtns.forEach((btn) => {
      btn.classList.remove("selected");
    });
    const clickedBtn = e.target;
    clickedBtn.classList.add("selected");
  });
});

// Submitting ratings
const arrBtns = Array.from(ratingBtns);

submitBtn.addEventListener("click", function () {
  if (arrBtns.some((btn) => btn.classList.contains("selected"))) {
    const [rating] = arrBtns.filter((btn) =>
      btn.classList.contains("selected")
    );
    const ratingValue = rating.value;
    thankYouRating.innerHTML = ratingValue;
    ratingCard.classList.toggle("hidden");
    thankYouCard.classList.toggle("hidden");
  } else {
    errorMessage.classList.remove("hidden");
  }
});
