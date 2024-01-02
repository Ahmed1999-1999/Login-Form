//// Global Variables
let userEmail, userPassword, usersList, loginBtn, existingEmails, existingPassword;

// get values from user
userEmail        = document.getElementById("userEmail"),
userPassword     = document.getElementById("userPassword"),
// sign up btn
loginBtn         = document.getElementById("btnLogin"),
// get localstorage if there is existing users data  || or make empty array[]
usersList        = JSON.parse(localStorage.getItem('usersList')) || [],
// Array of all names localStorage
existingNames   = usersList.map(a => a.name),
// Array of all emails in localStorage
existingEmails   = usersList.map(a => a.email),
// Array of all passwords in localStorage
existingPassword = usersList.map(a => a.password);
//=================================================================================================================
//=================================================================================================================
//================================================================================================================= 
// Login Button Function  ==>
loginBtn.addEventListener("click", function(e) {
  e.preventDefault()
  
  // hide all validation messages 
  document.getElementById("warnningEmptyInputs").classList.add("d-none");
  document.getElementById("emailNotFound").classList.add("d-block");
  document.getElementById("passwordNotCorrect").classList.add("d-none");

  // check if at least one of the feilds aren't empty
  if (userEmail.value === "" || userPassword.value === "") {
    document.getElementById("warnningEmptyInputs").classList.replace("d-none", "d-block")
  } else {
    // Check if e-mail is already in localStorage
    for (let i = 0; i < usersList.length; i++) {    
      if (validateUserEmail && validateUserPassword) {

  // Check if email is in localStorage
        if (existingEmails[i].includes(userEmail.value)) {
          document.getElementById("emailNotFound").classList.replace("d-block","d-none")

  // If email valid ==> check on password
          if(existingPassword[i] === userPassword.value) {
            document.getElementById("passwordNotCorrect").classList.replace("d-block","d-none");
            window.open("bookmark/home.html", "_self");
  // Saving index number in localStorage to use it in home page
            localStorage["userName"] = (existingNames[i]);
          } else {
            document.getElementById("passwordNotCorrect").classList.replace("d-none","d-block");
          }
          break;
        } else {
          document.getElementById("emailNotFound").classList.replace("d-none","d-block");
        }
      }
    }
  }
})
//=================================================================================================================
//=================================================================================================================
///////==================================-----------VALIDATION-----------==================================////////
// 1- Validate userEmail ===>
function validateUserEmail() {
  var regex = /(^[A-Za-z\._\-0-9]*[@][A-Za-z]*(\.com)$)/gi;
  if (regex.test(userEmail.value)) {
    return true
  } else {
    return false
  }
}

userEmail.addEventListener("input", function () {
  if (validateUserEmail()) {
    document.getElementById("emailNotValid").classList.add("d-none");
    userEmail.style.border = "0.125rem solid #2F3E25"
  } else {
    document.getElementById("emailNotValid").classList.replace("d-none", "d-block");
    userEmail.style.border = "0.125rem solid #FF0800"
  };

})
//=======================================================================
//=======================================================================
//// 2- Validate userPassword ===>
function validateUserPassword() {
  var regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,15}$/gi;
  if (regex.test(userPassword.value)) {
    return true
  } else {
    return false
  }
}

userPassword.oninput = function validateOnPassword() {
  if (validateUserPassword()) {
    userPassword.style.border = "0.125rem solid #2F3E25"
    document.getElementById("passwordNotValid").classList.add("d-none");
    document.getElementById("passwordValidation").classList.add("d-none");
  } else {
    userPassword.style.border = "0.125rem solid #FF0800"
    document.getElementById("passwordNotValid").classList.replace("d-none", "d-block");
    document.getElementById("passwordValidation").classList.replace("d-none", "d-block");
  }
}