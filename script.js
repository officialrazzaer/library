"use strict";

const form = document.querySelector("form");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const pagesInput = document.getElementById("pages");
const titlePlaceholder = document.querySelector("label[for='title']");
const authorPlaceholder = document.querySelector("label[for='author']");
const pagesPlaceholder = document.querySelector("label[for='pages']");
const titleValidation = document.querySelector(".validation-text.title");
const authorValidation = document.querySelector(".validation-text.author");

// Function to handle placeholder animation
const handlePlaceholderAnimation = (input, placeholder) => {
  input.addEventListener("focus", () => {
    placeholder.style.top = "-24px";
    placeholder.style.left = "10px";
    placeholder.style.fontSize = "16px";
    placeholder.style.fontWeight = "bold";
    placeholder.style.color = "white";
  });

  input.addEventListener("blur", () => {
    if (input.value === "") {
      placeholder.style.top = "10px";
      placeholder.style.left = "10px";
      placeholder.style.fontSize = "16px";
      placeholder.style.fontWeight = "normal";
      placeholder.style.color = "black";
    }
  });
};

// Call the function for each input with placeholder
handlePlaceholderAnimation(titleInput, titlePlaceholder);
handlePlaceholderAnimation(authorInput, authorPlaceholder);
handlePlaceholderAnimation(pagesInput, pagesPlaceholder);

// Function to handle form submission and validation
form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (titleInput.value === "") {
    titleValidation.style.display = "block";
  } else {
    titleValidation.style.display = "none";
  }

  if (authorInput.value === "") {
    authorValidation.style.display = "block";
  } else {
    authorValidation.style.display = "none";
  }

  if (pagesInput.value <= 0) {
    pagesInput.nextElementSibling.style.display = "block";
  } else {
    pagesInput.nextElementSibling.style.display = "none";
    form.reset(); // Resets the form after successful submission
  }
});

let myLibrary = [];

function Book() {}
function addBookToLibrary() {}
