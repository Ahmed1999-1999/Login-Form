//// Global Variables
// To get values from user
var
  siteName = document.getElementById("siteName"),
  siteUrl = document.getElementById("siteUrl"),
  bookmarkList,
  validationMessageBox = document.getElementById("invalidMessage"),
  addBtn = document.getElementById("addMarkbook"),
  closeBtn = document.getElementById("closeBtn");
// To get localStorage if exists, or to assign "bookmarKList" as an empty array
if (localStorage.getItem("list") == null) {
  bookmarkList = [];
} else {
  bookmarkList = JSON.parse(localStorage["list"])
  displayBookmark(bookmarkList);
}
//=================================================================================================================
//=================================================================================================================
//=================================================================================================================
//// CRUD Operations ===>

// C: Create "Add new entries" Opreation ==>
function addMarkbook() {
  if (validateBookmarkName() || validateBookmarkUrl()) {
    var bookmarks = {
      name: siteName.value,
      url: `https://www.` + siteUrl.value
    };

    bookmarkList.push(bookmarks);
    displayBookmark(bookmarkList);
    localStorage["list"] = JSON.stringify(bookmarkList);
    validateOff()
    clearForm();
  } else {
    addBtn.addEventListener("click", showMessage);
    function showMessage() {
      validationMessageBox.classList.replace("d-none", "d-flex")
      console.log("asdasd");
    }

    closeBtn.addEventListener("click", closeMessage);
    function closeMessage() {
      validationMessageBox.classList.replace("d-flex", "d-none")
    }
  };
};

////////==================================-----------VALIDATION-----------==================================////////
function validateBookmarkName() {
  var regex = /[a-zA-Z0-9]{3,8}$/gi;
  if (regex.test(siteName.value)) {
    return true
  } else {
    return false
  }
}

function validateBookmarkUrl() {
  // var regex = /^(www\.)[a-zA-Z\d]+(\.com)$/gi;
  var regex = /^[a-zA-Z\d]+(\.com)$/gi;
  if (regex.test(siteUrl.value)) {
    return true
  } else {
    return false
  }
}

function validateOnName() {
  if (validateBookmarkName()) {
    siteName.style.border = "0.125rem solid #2F3E25"
  } else {
    siteName.style.border = "0.125rem solid #FF0800"
  }
}

function validateOnUrl() {
  if (validateBookmarkUrl()) {
    siteUrl.style.border = "0.125rem solid #2F3E25"
  } else {
    siteUrl.style.border = "0.125rem solid #FF0800"
  }
}

function validateOff() {
    siteName.style.border = "none"
    siteUrl.style.border = "none"
}
//=================================================================================================================
//=================================================================================================================
//=================================================================================================================
//=================================================================================================================
//=================================================================================================================
//=================================================================================================================

// R: Retrieve "view existing entries" Operation ==>
function displayBookmark(bookmarks) {
  var cartona = ``;
  for (var i = 0; i < bookmarks.length; i++) {
    cartona += `<tr>
    <th class="align-middle">${i + 1}</th>
    <td class="align-middle">${bookmarks[i].name}</td>
    <td>
      <button class="btn btn-success btn-sm">
        <i class="bi bi-eye-fill"></i>
        <a href="${bookmarks[i].url}" target="_blank">
          Visit
        </a>
      </button>
    </td>
    <td>
      <button onclick = "deleteBookmark(${i})" class="btn btn-danger btn-sm">
        <i class="bi bi-trash3-fill"></i>
        Delete
      </button>
    </td>
  </tr>`;
  }
  document.getElementById("tBody").innerHTML = cartona;
};

function clearForm() {
  siteName.value = "";
  siteUrl.value = "";
};
//=================================================================================================================
//=================================================================================================================
//=================================================================================================================
//=================================================================================================================
//=================================================================================================================
//=================================================================================================================

// D: Delete "Remove existing entries" Opreation ==>
function deleteBookmark(index) {
  bookmarkList.splice(index, 1);
  localStorage["list"] = JSON.stringify(bookmarkList); // To update localStorage after deleting an object
  displayBookmark(bookmarkList)
};
//==================================================================================================================
//==================================================================================================================
//==================================================================================================================
//==================================================================================================================
//==================================================================================================================
// Welcoming user ==>
let 
// Getting user name from localStorage  ==>
  userName = localStorage.getItem('userName'),
// Welcoming message
  welcomeMessage = document.getElementById("welcomeUser"),
  span = document.createElement("span"),
  user_name = document.createTextNode(userName);
  
  span.appendChild(user_name);
  document.getElementById("welcomeUser").appendChild(span)