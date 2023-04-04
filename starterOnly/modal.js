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
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelector(".close");
const radioButtons = document.querySelectorAll(".checkbox-input[type=radio]");
const formSubmit = document.getElementById("button");
const formulaire = document.querySelector(".modal-body");
const firstName = document.getElementById("first");
const firstNameMsg = document.getElementById("firstNameErrorMsg");
const lastName = document.getElementById("last");
const lastNameMsg = document.getElementById("lastNameErrorMsg");
const email = document.getElementById("email");
const emailMsg = document.getElementById("emailErrorMsg");
const birthdate = document.getElementById("birthdate");
const birthdateMsg = document.getElementById("birthdateErrorMsg");
const numberTournament = document.getElementById("quantity");
const numberTournamentMsg = document.getElementById("quantityErrorMsg");
const place = document.getElementById("location");
const locationMsg = document.getElementById("locationErrorMsg");
const checkbox1 = document.getElementById("checkbox1");
const checkbox2 = document.getElementsByClassName("checkbox2-label")[0];
const conditionMsg = document.getElementById("conditionErrorMsg");



// regex

const ruleName = new RegExp("^[A-Za-zÀ-ÖØ-öø-ÿ\ ]{2,}$");
const ruleEmail= new RegExp("^[a-z0-9\-_\.]+@[a-z0-9]+\.[a-z]{2,5}$")
const ruleNumber= new RegExp("^[0-9]{1,2}$");


// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));


// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
modalClose.addEventListener("click",closeModal => {
  modalbg.style.display = "none";
});

//verif modal input

const contact={
  firstName : "",
  lastName : "",
  email : "",
  numberTournament : "",
}
//firstName
formData[0].addEventListener("input",function(e){
  contact.firstName=e.target.value;
});

//lastName
formData[1].addEventListener("input",function(e){
  contact.lastName=e.target.value;
  });
  
//Email
formData[2].addEventListener("input",function(e){
  contact.email=e.target.value;
});

//Number of tournament
formData[4].addEventListener("input",function(e){
  contact.numberTournament=e.target.value;
});

//function who verify the form

function verifyFirstName() {
  if(!ruleName.test(contact.firstName)){
    firstName.style.border = "3px solid red";
    firstNameMsg.textContent = "Votre prénom ne doit pas contenir de chiffre, et faire plus de 2 lettres!";
    return false;
  }
  else{
    firstName.style.border = "3px solid green";
    firstNameMsg.textContent = "";
    return true;
  }
}

function verifyLastName(){
  if(!ruleName.test(contact.lastName)){
    lastName.style.border = "3px solid red";
    lastNameMsg.textContent = "Votre nom ne doit pas contenir de chiffre, et faire plus de 2 lettres!";
    return false;
  }
  else{
    lastName.style.border = "3px solid green";
    lastNameMsg.textContent = "";;
    return true;
  }
}

function verifyEmail(){
  if(!ruleEmail.test(contact.email)){
    emailMsg.textContent = "Veuillez entrer une Email valide!";
    email.style.border = "3px solid red";
    return false;
  }
  else{
    emailMsg.textContent = "";
    email.style.border = "3px solid green";;
    return true;
  }
}

function verifyBirthdate(){
  if(birthdate.value === ""){
    birthdateMsg.textContent = "Veuillez entrer votre date de naissance";
    birthdate.style.border = "3px solid red";
    return false;
  }
  else{
    birthdateMsg.textContent = "";
    birthdate.style.border = "3px solid green";
    return true;
  }
}

function verifyNumber(){
  if(!ruleNumber.test(contact.numberTournament)){
    numberTournamentMsg.textContent = "Veuillez entrer un nombre entre 0 et 99";
    numberTournament.style.border = "3px solid red";
    return false;
  }
  else{
    numberTournamentMsg.textContent = "";
    numberTournament.style.border = "3px solid green";
    return true;
  }
}

function verifyLocation(){
  for (let radio of radioButtons) {
		if(radio.checked === true){
      locationMsg.textContent = "";
      place.style.border = "none";
      return true;
    } 
	}
  place.style.border = "3px solid red";
  locationMsg.textContent = "Veuillez choisir un lieu";
	return false;
}

function verifyGeneralCondition(){
  if(checkbox1.checked){
    conditionMsg.textContent = "";
    return true;
  }
  else{
    checkbox2.style.border= "3px solid red";
    conditionMsg.textContent = "Veuillez accepter les conditions";
    return false;
  }
}
//checks if the form is filled out correctly

formSubmit.addEventListener("click",(e)=> {
  e.preventDefault();
  verifyFirstName();
  verifyLastName();
  verifyEmail();
  verifyBirthdate();
  verifyNumber();
  verifyLocation();
  verifyGeneralCondition();
//if the form is correctly filled close form and open validation message
  if(verifyFirstName() && verifyLastName() && verifyEmail() && verifyBirthdate() && verifyNumber() && verifyLocation() && verifyGeneralCondition()){
   formulaire.style.display = "none";
   document.querySelector(".validation").style.display = "block";
  }
  else{
    console.log("erreur");
  }
})

//close validation message

document.querySelector(".btn-validation").addEventListener("click",() => {
  modalbg.style.display = "none";
});