"use strict";

// ELEMENTS
const ratingElements = document.querySelectorAll(".value");
const questionSectionEl = document.querySelector(".question-section");
const thankYouSectionEl = document.querySelector(".thank-you--section");
const selectedValueEl = document.querySelector(".selected-value");

// BUTTON
const btnSubmit = document.querySelector(".btn-submit");

let selectedRating;

ratingElements.forEach(function (rating) {
  rating.addEventListener("click", function (e) {
    for (const element of ratingElements) {
      if (element === e.target) {
        element.classList.add("background-orange");
        selectedRating = Number(element.textContent);
      } else element.classList.remove("background-orange");
    }
  });
});

btnSubmit.addEventListener("click", function () {
  questionSectionEl.classList.add("hidden");
  thankYouSectionEl.classList.remove("hidden");
  selectedValueEl.textContent = selectedRating;
});
