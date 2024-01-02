//// Global Variables
let userName, userEmail, userPassword, usersList, signUpBtn;

// get values from user
userName = document.getElementById("userName");
userEmail = document.getElementById("userEmail");
userPassword = document.getElementById("userPassword");
// sign up btn
signUpBtn = document.getElementById("btnSignUp");
// get to localstorage if there is existing users data  || or make empty array[]
usersList = JSON.parse(localStorage.getItem('usersList')) || [],
  // object to save every user data
  userInfo = {
    name: "user name",
    email: "user email",
    password: "user password"
  },
  usersList.push(userInfo);
// save usersList in localStorage
localStorage["usersList"] = JSON.stringify(usersList);

//=================================================================================================================
//=================================================================================================================
//=================================================================================================================
// ADDING NEW ACCOUNT ==>
signUpBtn.addEventListener("click", function (e) {
  e.preventDefault()
  // updating object with new user values 
  userInfo = {
    name: userName.value,
    email: userEmail.value,
    password: userPassword.value
  };
  // check if at least one of the feilds aren't empty
  if (userInfo.name === "" || userInfo.email === "" || userInfo.password === "") {
    document.getElementById("warnningEmptyInputs").classList.replace("d-none", "d-block")
  } else {
    document.getElementById("warnningEmptyInputs").classList.add("d-none");

    // check if user e-mail is already exist in the array of users data ==> "usersList"
    for (let i = 0; i < usersList.length; i++) {
      // check if all user inputs is valid
      if (validateUserName && validateUserEmail && validateUserPassword) {
        if (localStorage.getItem('usersList').includes(userEmail.value)) {
          document.getElementById("emailIsTaken").classList.replace("d-none", "d-block");
          break;
        } else {
          document.getElementById("emailIsTaken").classList.add("d-none");
          usersList.push(userInfo);
          localStorage["usersList"] = JSON.stringify(usersList);
          window.open("../index.html","_self");
          break;
        }
      }
    }
  }
});
//=================================================================================================================
//=================================================================================================================
///////==================================-----------VALIDATION-----------==================================////////
//// 1- Validate userName ===>
function validateUserName() {
  var regex = /^([a-z ,.'\s-]){5,25}$/gi;
  if (regex.test(userName.value)) {
    return true
  } else {
    return false
  }
}

userName.oninput = function validateOnName() {
  if (validateUserName()) {
    userName.style.border = "0.125rem solid #2F3E25";
    document.getElementById("nameNotValid").classList.add("d-none");
    document.getElementById("nameValidation").classList.add("d-none");
  } else {
    document.getElementById("nameNotValid").classList.replace("d-none", "d-block");
    document.getElementById("nameValidation").classList.replace("d-none", "d-block");
    userName.style.border = "0.125rem solid #FF0800"
  }
}
//=======================================================================
//=======================================================================
//// 2- Validate userEmail ===>
function validateUserEmail() {
  var regex = /(^[A-Za-z\._\-0-9]*[@][A-Za-z]*(\.com)$)/gi;
  if (regex.test(userEmail.value)) {
    return true
  } else {
    return false
  }
}

userEmail.oninput = function validateOnEmail() {
  if (validateUserEmail()) {
    document.getElementById("emailNotValid").classList.add("d-none");
    userEmail.style.border = "0.125rem solid #2F3E25"
  } else {
    document.getElementById("emailNotValid").classList.replace("d-none", "d-block");
    userEmail.style.border = "0.125rem solid #FF0800"
  }
}
//=======================================================================
//=======================================================================
//// 3- Validate userPassword ===>
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