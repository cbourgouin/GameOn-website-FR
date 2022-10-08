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
closeBtn.forEach((btn) => btn.addEventListener("click", closeLaunch));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// closing the modal form.
function closeLaunch() {
  modalbg.style.display = "none";
  if (document.querySelector('.btn-submit').value === "Fermer") {
    const champs = document.querySelectorAll('.formData');
    for (const champ of champs) {
      champ.hidden = false;
    }
    document.querySelector('.validation').style.display = 'none';
    document.querySelector('.btn-submit').value = "C'est parti";
  }
}

// validation des information du formulaire
function ValidationForm() {
  const prenom = document.forms["reserve"]["first"];
  const nom = document.forms["reserve"]["last"];
  const email = document.forms["reserve"]["email"];
  const birthDate = document.forms["reserve"]["birthdate"];
  const quantity = document.forms["reserve"]["quantity"];
  const locations = document.querySelectorAll('input[name="location"]');
  const conditionDUt = document.forms["reserve"]["checkbox1"];
  const alertEvenement = document.forms["reserve"]["checkbox2"];

  if (document.querySelector('.btn-submit').value === "C'est parti") {
    let validation = true;
    let locationsIsChk = false;

    //vérification du prénom
    if (prenom.value.length < 2) {
      prenom.parentElement.setAttribute('data-error-visible', 'true');
      validation = false;
    } else {
      prenom.parentElement.removeAttribute('data-error-visible');
    }

    //vérification du nom
    if (nom.value.length < 2) {
      nom.parentElement.setAttribute('data-error-visible', 'true');
      validation = false;
    } else {
      nom.parentElement.removeAttribute('data-error-visible');
    }

    //vérification de l'email
    if (email.value.length == 0 || !verifEMail(email.value)) {
      email.parentElement.setAttribute('data-error-visible', 'true');
      validation = false;
    } else {
      email.parentElement.removeAttribute('data-error-visible');
    }

    //vérification de la date de naissance
    if (birthDate.value.length == 0) {
      birthDate.parentElement.setAttribute('data-error-visible', 'true');
      validation = false;
    } else {
      birthDate.parentElement.removeAttribute('data-error-visible');
    }

    //vérification de la quantité de coucours participé
    if (quantity.value.length == 0) {
      quantity.parentElement.setAttribute('data-error-visible', 'true');
      validation = false;
    } else {
      quantity.parentElement.removeAttribute('data-error-visible');
    }

    //vérification de l'emplacement demander
    for (const location of locations) {
      if (location.checked) {
        locationsIsChk = true;
      }
    }
    if (!locationsIsChk) {
      locations[1].parentElement.setAttribute('data-error-visible', 'true');
      validation = false;
    } else {
      locations[1].parentElement.removeAttribute('data-error-visible');
    }

    //vérification des conditions d'utilisations
    if (!conditionDUt.checked) {
      conditionDUt.parentElement.setAttribute('data-error-visible', 'true');
      validation = false;
    } else {
      conditionDUt.parentElement.removeAttribute('data-error-visible');
    }

    //Afficher le message de validation
    if (validation) {
      const champs = document.querySelectorAll('.formData');
      for (const champ of champs) {
        champ.hidden = true;
      }
      document.querySelector('.validation').style.display = 'flex';
      document.querySelector('.btn-submit').value = 'Fermer';
      prenom.value = '';
      nom.value = '';
      email.value = '';
      birthDate.value = '';
      quantity.value = '';
      locations[0].checked = true;
      alertEvenement.checked = false;
    }
  } else if (document.querySelector('.btn-submit').value === "Fermer") {
    closeLaunch();
  }
}

function verifEMail(_email) {
  let validation = true;
  let compteurDeA = 0;

  // vérification de chaque caractère
  for (let i = 0; i < _email.length; i++) {

    //vérification des caractère interdit 
    if (_email[i] !== '-' && _email[i] !== '.' && _email[i] < '0' || _email[i] > '9' && _email[i] !== '@' && _email[i] < 'A' || _email[i] > 'Z' && _email[i] < 'a' || _email[i] > 'z' && _email[i] !== '-' && _email[i] !== '.') {
      validation = false;
    }

    //compte du nombre de "@"
    if (_email[i] === '@') {
      compteurDeA++;
    }
  }

  //vérification de la quantité de "@" et la position des "."
  if (compteurDeA !== 1 || _email.indexOf('.', (_email.indexOf('@') + 2)) === -1) {
    validation = false;
  }

  //vérification du premier caractère
  if (_email[0] >= '0' && _email[0] <= '9') {
    validation = false;
  }

  return validation;
}