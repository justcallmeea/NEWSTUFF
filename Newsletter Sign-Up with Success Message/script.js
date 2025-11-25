"strict mode";
const subscribeBtn = document.querySelector(".subscribe-btn");
const signUpSection = document.querySelector(".mobile-signup");
const mobileSuccessSection = document.querySelector(".mobile-success");
const desktopSuccessSection = document.querySelector(".desktop-success");
const emailInput = document.querySelector("#email");
const invalidEmailError = document.querySelector(".invalid-message");
const mobileTargetEmail = document.querySelector(".mobile-target");
const desktopTargetEmail = document.querySelector(".desktop-target");
const form = document.querySelector(".form");

const generateSuccessPage = function (e) {
  e.preventDefault();
  const width = window.innerWidth;
  if (emailInput.value.includes("@") && width < 768) {
    signUpSection.classList.add("hidden");
    mobileSuccessSection.classList.remove("hidden");
    mobileTargetEmail.innerHTML = emailInput.value;
  } else if (emailInput.value.includes("@") && width >= 768) {
    signUpSection.classList.add("hidden");
    desktopTargetEmail.innerHTML = emailInput.value;
    desktopSuccessSection.classList.remove("hidden");
  } else {
    invalidEmailError.classList.remove("hidden");
    emailInput.classList.add("invalid-email");
  }
};

form.addEventListener("submit", generateSuccessPage);
