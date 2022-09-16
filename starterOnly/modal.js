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
  let validation = true;
  let locationsIsChk = false;

  const prenom = document.forms["reserve"]["first"];
  const nom = document.forms["reserve"]["last"];
  const email = document.forms["reserve"]["email"];
  const birthDate = document.forms["reserve"]["birthdate"];
  const quantity = document.forms["reserve"]["quantity"];
  const locations = document.querySelectorAll('input[name="location"]');
  const conditionDUt = document.forms["reserve"]["checkbox1"];

  if (prenom.value.length <= 2) {
    prenom.parentElement.setAttribute('data-error-visible', 'true');
    validation = false;
  } else {
    prenom.parentElement.removeAttribute('data-error-visible');
  }
  if (nom.value.length <= 2) {
    nom.parentElement.setAttribute('data-error-visible', 'true');
    validation = false;
  } else {
    nom.parentElement.removeAttribute('data-error-visible');
  }
  if (email.value.length == 0) {
    email.parentElement.setAttribute('data-error-visible', 'true');
    validation = false;
  } else {
    email.parentElement.removeAttribute('data-error-visible');
  }
  if (birthDate.value.length == 0) {
    birthDate.parentElement.setAttribute('data-error-visible', 'true');
    validation = false;
  } else {
    birthDate.parentElement.removeAttribute('data-error-visible');
  }
  if (quantity.value.length == 0) {
    quantity.parentElement.setAttribute('data-error-visible', 'true');
    validation = false;
  } else {
    quantity.parentElement.removeAttribute('data-error-visible');
  }
  console.log(locations);
  for(const location of locations) {
    if (location.checked) {
      locationsIsChk = true;
    }
  }
  if(!locationsIsChk) {
    console.log(locations);
    locations[1].parentElement.setAttribute('data-error-visible', 'true');
    validation = false;
  } else {
    locations[1].parentElement.removeAttribute('data-error-visible');
  }
  if (!conditionDUt.checked) {
    conditionDUt.parentElement.setAttribute('data-error-visible', 'true');
    validation = false;
  } else {
    conditionDUt.parentElement.removeAttribute('data-error-visible');
  }

  if(validation) {
    alert("votre demande a bien été envoyé.");
  }
  return validation;
}