"use strict";
const billInput = document.querySelector(".bill__input");
const noOfPeopleInput = document.querySelector(".no-of-people__input");
const noOfPeopleError = document.querySelector(".no-of-people__error");
const tipFigure = document.querySelector(".results__tip-figure");
const totalFigure = document.querySelector(".results__total-figure");
const resetBtn = document.querySelector(".results__reset-button");
const customTip = document.querySelector(".select-tip__input");
const btns = document.querySelectorAll(".select-tip__button");

// Resetting Calculator
resetBtn.addEventListener("click", function () {
  totalFigure.innerHTML = `$0`;
  tipFigure.innerHTML = `$0`;
  billInput.value = "";
  noOfPeopleInput.value = "";
  noOfPeopleError.classList.add("hidden");
  noOfPeopleInput.classList.remove("error");
  btns.forEach((btn) => {
    btn.classList.remove("selected");
  });
  customTip.value = "";
});

// Calculating Tip
const renderFigures = function (btn) {
  const tipPercent = Number(btn.value);
  const billFigure = Number(billInput.value);
  const noOfPeople = Number(noOfPeopleInput.value);
  if (noOfPeople <= 0) {
    noOfPeopleError.classList.remove("hidden");
    noOfPeopleInput.classList.add("error");
  } else {
    btns.forEach((btn) => {
      btn.classList.remove("selected");
    });
    noOfPeopleError.classList.add("hidden");
    noOfPeopleInput.classList.remove("error");
    btn.classList.add("selected");
    const tipAmount = billFigure * tipPercent;
    const tipPerPerson = tipAmount / noOfPeople;
    const finalTip = tipPerPerson.toFixed(2);
    const totalAmount = billFigure + tipAmount;
    const totalPerPerson = totalAmount / noOfPeople;
    const finalTotal = totalPerPerson.toFixed(2);
    tipFigure.innerHTML = `$${finalTip}`;
    totalFigure.innerHTML = `$${finalTotal}`;
  }
};

// Adding EventListeners to buttons
btns.forEach((btn) => {
  btn.addEventListener("click", () => renderFigures(btn));
});

// Adding EventListener to Custom Field
customTip.addEventListener("input", (e) => {
  const amount = Number(e.target.value) / 100;
  const billFigure = Number(billInput.value);
  const noOfPeople = Number(noOfPeopleInput.value);
  if (noOfPeople <= 0) {
    noOfPeopleError.classList.remove("hidden");
    noOfPeopleInput.classList.add("error");
  } else {
    btns.forEach((btn) => {
      btn.classList.remove("selected");
    });
    noOfPeopleError.classList.add("hidden");
    noOfPeopleInput.classList.remove("error");
    const tipAmount = billFigure * amount;
    const tipPerPerson = tipAmount / noOfPeople;
    const finalTip = tipPerPerson.toFixed(2);
    const totalAmount = billFigure + tipAmount;
    const totalPerPerson = totalAmount / noOfPeople;
    const finalTotal = totalPerPerson.toFixed(2);
    tipFigure.innerHTML = `$${finalTip}`;
    totalFigure.innerHTML = `$${finalTotal}`;
  }
});
