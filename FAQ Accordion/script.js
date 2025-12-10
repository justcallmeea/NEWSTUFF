"use strict";
const plusBtns = document.querySelectorAll(".plus-btn");
const minusBtns = document.querySelectorAll(".minus-btn");
const questions = document.querySelectorAll(".question");

// Adding handlers to all plusBtns
plusBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    this.classList.add("hidden");
    this.nextElementSibling.classList.remove("hidden");
    const parent = this.closest(".card__question");
    const hiddenText = parent.nextElementSibling;
    hiddenText.classList.remove("hidden");
  });
});

// Adding handlers to the questions
questions.forEach((q) => {
  q.addEventListener("click", function () {
    const parent = this.closest(".card__question");
    const hiddenText = parent.nextElementSibling;
    hiddenText.classList.toggle("hidden");
    const btn = this.nextElementSibling;
    const plusBtn = btn.children[0].classList.toggle("hidden");
    const minusBtn = btn.children[1].classList.toggle("hidden");
  });
});

// Resetting when you click minusBtn
minusBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    this.classList.add("hidden");
    this.previousElementSibling.classList.remove("hidden");
    const parent = this.closest(".card__question");
    const hiddenText = parent.nextElementSibling;
    hiddenText.classList.add("hidden");
  });
});
