window.onscroll = function () {
  myFunction();
};

var navbar = document.querySelector(".hero__nav");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.scrollY >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

const re =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const submit = document.getElementById("submit");
const firstNameField = document.getElementById("firstName");
const lastNameField = document.getElementById("lastName");
const commentsField = document.getElementById("comments");
const emailField = document.getElementById("email");

firstNameField.addEventListener("keyup", firstNameValidate);
lastNameField.addEventListener("keyup", lastNameValidate);
commentsField.addEventListener("keyup", commentsValidate);
emailField.addEventListener("keyup", emailValidate);
submit.addEventListener("click", validate);

function firstNameValidate(e) {
  e.preventDefault();
  let valid = true;
  if (!firstNameField.value.trim(firstNameField.value)) {
    const firstNameError = document.getElementById("firstNameError");
    firstNameError.classList.add("visible");
    firstNameField.classList.add("invalid");
    firstNameError.setAttribute("aria-hidden", false);
    firstNameError.setAttribute("aria-invalid", true);
  } else {
    firstNameError.classList.remove("visible");
    firstNameField.classList.remove("invalid");
    firstNameError.setAttribute("aria-hidden", true);
    firstNameError.setAttribute("aria-invalid", false);
  }
}

function lastNameValidate(e) {
  e.preventDefault();
  let valid = true;
  if (!lastNameField.value.trim(lastNameField.value)) {
    const lastNameError = document.getElementById("lastNameError");
    lastNameError.classList.add("visible");
    lastNameField.classList.add("invalid");
    lastNameError.setAttribute("aria-hidden", false);
    lastNameError.setAttribute("aria-invalid", true);
  } else {
    lastNameError.classList.remove("visible");
    lastNameField.classList.remove("invalid");
    lastNameError.setAttribute("aria-hidden", true);
    lastNameError.setAttribute("aria-invalid", false);
  }
}

function commentsValidate(e) {
  e.preventDefault();
  let valid = true;
  if (!commentsField.value.trim(commentsField.value)) {
    const commentsError = document.getElementById("commentsError");
    commentsError.classList.add("visible");
    commentsField.classList.add("invalid");
    commentsError.setAttribute("aria-hidden", false);
    commentsError.setAttribute("aria-invalid", true);
  } else {
    commentsError.classList.remove("visible");
    commentsField.classList.remove("invalid");
    commentsError.setAttribute("aria-hidden", true);
    commentsError.setAttribute("aria-invalid", false);
  }
}

function emailValidate(e) {
  e.preventDefault();
  let valid = true;
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!emailField.value) {
    const emailError = document.getElementById("emailError");
    emailError.classList.add("visible");
    emailField.classList.add("invalid");
    emailError.setAttribute("aria-hidden", false);
    emailError.setAttribute("aria-invalid", true);
  } else if (re.test(emailField.value) == false) {
    emailError.innerHTML = "Please enter valid email";
    emailError.classList.add("visible");
    emailField.classList.add("invalid");
    emailError.setAttribute("aria-hidden", false);
    emailError.setAttribute("aria-invalid", true);
  } else {
    emailError.classList.remove("visible");
    emailField.classList.remove("invalid");
    emailError.setAttribute("aria-hidden", true);
    emailError.setAttribute("aria-invalid", false);
  }
}

function validate(e) {
  let valid = true;

  if (!firstNameField.value.trim(firstNameField.value)) {
    const firstNameError = document.getElementById("firstNameError");
    firstNameError.classList.add("visible");
    firstNameField.classList.add("invalid");
    firstNameError.setAttribute("aria-hidden", false);
    firstNameError.setAttribute("aria-invalid", true);
    e.preventDefault();
  } else {
    firstNameError.classList.remove("visible");
    firstNameField.classList.remove("invalid");
    firstNameError.setAttribute("aria-hidden", true);
    firstNameError.setAttribute("aria-invalid", false);
  }
  if (!lastNameField.value.trim(lastNameField.value)) {
    const lastNameError = document.getElementById("lastNameError");
    lastNameError.classList.add("visible");
    lastNameField.classList.add("invalid");
    lastNameError.setAttribute("aria-hidden", false);
    lastNameError.setAttribute("aria-invalid", true);
    e.preventDefault();
  } else {
    lastNameError.classList.remove("visible");
    lastNameField.classList.remove("invalid");
    lastNameError.setAttribute("aria-hidden", true);
    lastNameError.setAttribute("aria-invalid", false);
  }

  if (!commentsField.value.trim(commentsField.value)) {
    const commentsError = document.getElementById("commentsError");
    commentsError.classList.add("visible");
    commentsField.classList.add("invalid");
    commentsError.setAttribute("aria-hidden", false);
    commentsError.setAttribute("aria-invalid", true);
    e.preventDefault();
  } else {
    commentsError.classList.remove("visible");
    commentsField.classList.remove("invalid");
    commentsError.setAttribute("aria-hidden", true);
    commentsError.setAttribute("aria-invalid", false);
  }

  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!emailField.value) {
    const emailError = document.getElementById("emailError");
    emailError.classList.add("visible");
    emailField.classList.add("invalid");
    emailError.setAttribute("aria-hidden", false);
    emailError.setAttribute("aria-invalid", true);
    e.preventDefault();
  } else if (re.test(emailField.value) == false) {
    emailError.innerHTML = "Please enter valid email";
    emailError.classList.add("visible");
    emailField.classList.add("invalid");
    emailError.setAttribute("aria-hidden", false);
    emailError.setAttribute("aria-invalid", true);
    e.preventDefault();
  } else {
    emailError.classList.remove("visible");
    emailField.classList.remove("invalid");
    emailError.setAttribute("aria-hidden", true);
    emailError.setAttribute("aria-invalid", false);
  }
  return true;
}
