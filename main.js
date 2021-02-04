// Getting the DOM Elements
const inputSection = document.querySelector("#input-section");
const submitBtn = document.querySelector("#submit-btn");
const boxTitles = document.querySelectorAll(".box-title");

// Creating the variables
let inputValue;

// Creating the Functions
function doOperation(e) {
  e.preventDefault();
  inputValue = inputSection.value.toLowerCase();
  inputSection.value = null;
  boxTitles.forEach((boxTitle) => {
    boxTitleLower = boxTitle.innerText.toLowerCase();
    if (boxTitleLower.indexOf(inputValue) === -1) {
      boxTitle.parentElement.style.display = "none";
    } else {
      boxTitle.parentElement.style.display = "block";
    }
  });
}

submitBtn.addEventListener("click", doOperation);
