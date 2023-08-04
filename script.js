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
const readStatusInput = document.getElementById("read-status");

let myLibrary = [];

function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}

function addBookToLibrary() {
  const titleInputContents = titleInput.value;
  const authorInputContents = authorInput.value;
  const pagesInputContents = pagesInput.value;
  const readStatusInputContents = readStatusInput.checked;
  console.log(readStatusInputContents);

  const newBook = new Book(
    titleInputContents,
    authorInputContents,
    pagesInputContents,
    readStatusInputContents
  );
  myLibrary.push(newBook);
  displayBooks();

  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("pages").value = "";
  document.querySelector("input[name='readStatus']").checked = false;
}

function displayBooks() {
  const tableBody = document.getElementById("table-body");
  tableBody.innerHTML = "";

  for (let i = 0; i < myLibrary.length; i++) {
    const book = myLibrary[i];
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
          <td>${book.title}</td>
          <td>${book.author}</td>
          <td>${book.pages}</td>
          <td>${book.readStatus ? "Read" : "Not Read"}</td>
          <td><span class="remove-btn" onclick="removeBook(${i})">Remove</span></td>
        `;
    tableBody.appendChild(newRow);
  }
}

function removeBook(index) {
  myLibrary.splice(index, 1);
  displayBooks();
}

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

document.getElementById("add-book").addEventListener("click", addBookToLibrary);
