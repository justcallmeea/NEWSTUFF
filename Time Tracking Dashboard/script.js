"use strict";
const data = [
  {
    title: "Work",
    timeframes: {
      daily: { current: 5, previous: 7 },
      weekly: { current: 32, previous: 36 },
      monthly: { current: 103, previous: 128 },
    },
  },
  {
    title: "Play",
    timeframes: {
      daily: { current: 1, previous: 2 },
      weekly: { current: 10, previous: 8 },
      monthly: { current: 23, previous: 29 },
    },
  },
  {
    title: "Study",
    timeframes: {
      daily: { current: 0, previous: 1 },
      weekly: { current: 4, previous: 7 },
      monthly: { current: 13, previous: 19 },
    },
  },
  {
    title: "Exercise",
    timeframes: {
      daily: { current: 1, previous: 1 },
      weekly: { current: 4, previous: 5 },
      monthly: { current: 11, previous: 18 },
    },
  },
  {
    title: "Social",
    timeframes: {
      daily: { current: 1, previous: 3 },
      weekly: { current: 5, previous: 10 },
      monthly: { current: 21, previous: 23 },
    },
  },
  {
    title: "Self Care",
    timeframes: {
      daily: { current: 0, previous: 1 },
      weekly: { current: 2, previous: 2 },
      monthly: { current: 7, previous: 11 },
    },
  },
];

const displayDaily = document.querySelector(".usercard__daily");
const displayWeekly = document.querySelector(".usercard__weekly");
const displayMonthly = document.querySelector(".usercard__monthly");

const currentTimes = document.querySelectorAll(".card__time");
const previousTimes = document.querySelectorAll(".card__sort-level");

const renderCurrentTime = function (sort) {
  currentTimes.forEach((value, i) => {
    const hours = data[i].timeframes[sort].current;
    value.innerHTML = `${hours}${hours === 1 ? "hr" : "hrs"}`;
  });
};

const renderPreviousTime = function (sort) {
  previousTimes.forEach((value, i) => {
    const hours = data[i].timeframes[sort].previous;
    let keyword;
    if (sort === "daily") {
      keyword = "Yesterday";
    } else if (sort === "weekly") {
      keyword = "Last Week";
    } else if (sort === "monthly") {
      keyword = "Last Month";
    }
    value.innerHTML = `${keyword} - ${hours}${hours === 1 ? "hr" : "hrs"}`;
  });
};

displayDaily.addEventListener("click", function () {
  displayDaily.classList.add("active");
  displayWeekly.classList.remove("active");
  displayMonthly.classList.remove("active");
  renderCurrentTime("daily");
  renderPreviousTime("daily");
});

displayWeekly.addEventListener("click", function () {
  displayWeekly.classList.add("active");
  displayDaily.classList.remove("active");
  displayMonthly.classList.remove("active");
  renderCurrentTime("weekly");
  renderPreviousTime("weekly");
});

displayMonthly.addEventListener("click", function () {
  displayMonthly.classList.add("active");
  displayWeekly.classList.remove("active");
  displayDaily.classList.remove("active");
  renderCurrentTime("monthly");
  renderPreviousTime("monthly");
});
