const freeTestBtn = document.querySelector("#free-test-btn");
const firstName = document.querySelector("#first-name-input");
const lastName = document.querySelector("#last-name-input");
const emailInput = document.querySelector("#email-input");
const showPasswordBtn = document.querySelector("#toggle-password");
const pswInput = document.querySelector("#password");
const submitBtn = document.querySelector("#submit-btn");

const fnError = document.querySelector("#fn-error-text");
const lnError = document.querySelector("#ln-error-text");
const emailError = document.querySelector("#e-error-text");
const pswError = document.querySelector("#psw-error-text");

submitBtn.addEventListener("click", validationError);
showPasswordBtn.addEventListener("click", showPassword);
function validationError() {
  if (firstName.value == 0) {
    firstName.classList.add("error");
    fnError.style.display = "block";
  }
  if (lastName.value == 0) {
    lastName.classList.add("error");
    lnError.style.display = "block";
  }
  if (emailInput.value == 0) {
    emailInput.classList.add("error");
    emailError.style.display = "block";
  }
  if (pswInput.value == 0) {
    pswInput.classList.add("error");
    pswError.style.display = "block";
  }
  clearInputError();
}

function showPassword() {
  if (pswInput.type === "password") {
    showPasswordBtn.innerHTML = "Hide password";
    pswInput.type = "text";
  } else {
    showPasswordBtn.innerHTML = "Show password";
    pswInput.type = "password";
  }
}

// Just testing
function clearInputError() {
  if (firstName.value.length > 2) {
    firstName.classList.remove("error");
    fnError.style.display = "none";
  }
  if (lastName.value.length > 0) {
    lastName.classList.remove("error");
    lnError.style.display = "none";
  }
  if (emailInput.value.indexOf("@") > -1) {
    emailInput.classList.remove("error");
    emailError.style.display = "none";
  }
  if (pswInput.value.length >= 6) {
    pswInput.classList.remove("error");
    pswError.style.display = "none";
  }
}
