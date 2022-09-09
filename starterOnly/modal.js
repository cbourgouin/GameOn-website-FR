function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const closeBtn = document.querySelectorAll(".close");
const submitBtn = document.querySelectorAll(".btn-submit");
const formData = document.querySelector(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// use close btn
closeBtn.forEach((btn) => btn.addEventListener("click",  closeLaunch));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// closing the modal form.
function closeLaunch() {
  modalbg.style.display = "none";
}

// validation des information du formulaire
function ValidationForm() {
  let prenom = document.forms["reserve"]["first"];
  let nom = document.forms["reserve"]["last"];
  let email = document.forms["reserve"]["email"];
  let birthDate = document.forms["reserve"]["birthdate"];
  let quantity = document.forms["reserve"]["quantity"];
  if (prenom.value.length <= 2) {
    alert("Please enter your name.");
    prenom.focus();
    return false;
  }
  if (nom.value.length <= 2) {
    nom.focus();
    return false;
  }
  if (email.value.length == 0) {
    email.focus();
    return false;
  }
  if (birthDate.value.length == 0) {
    birthDate.focus();
    return false;
  }
  if (quantity.value.length == 0) {
    quantity.focus();
    return false;
  }
  return true;
}