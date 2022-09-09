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
const submitBtn = document.getElementById(".btn-submit");
const formData = document.querySelectorAll(".formData");

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

function activeButtonSubmit() {
  document.getElementById(".btn-submit").disabled = false;
}