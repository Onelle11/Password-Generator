// Assignment code here
/*
var lowerCase = "abcdef";
var upperCase = "ABCDEF";
var numbers = "12345";
var specialCharacters = "!@#$";


function generatePassword() {
  var length = parseInt(window.prompt("Type the length of the password. 8 characters not more than 128"));
  
  if (length < 8) {
    alert("the length entered is less than 8");
    return "error";
  }
  if (length > 128) {
    alert("the length entered is more than 128");
    return "error";
  }

  var output  = "";
  var passwordCharacters = lowerCase + upperCase + numbers + specialCharacters;
  for (var i = 0; i < length; i++) {
    output += passwordCharacters[Math.floor(passwordCharacters.length * Math.random())];
  }
    return output

}
*/
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialCharacters = "!@#$%^&*()-+";

var passwordCharacters = "";

function generatePassword() {
  var length = parseInt(window.prompt("Type the length of the password with 8 characters and not more than 128"));

  if (length < 8) {
    alert("The length entered is less than 8");
    return "error";
  }

  if (length > 128) {
    alert("The length entered is more than 128");
    return "error";
  }
  
  var pw = confirm("Do you want lowercase, uppercase, numbers, and special characters in your password?");

  if (confirm("Use lowercase") == true) {
    passwordCharacters += lowerCase;
  } 

  if (confirm("Use uppercase") == true) {
    passwordCharacters += upperCase;
  }

  if (confirm("Use numbers") == true) {
    passwordCharacters += numbers;
  }

  if (confirm("Use special characters") == true) {
    passwordCharacters += specialCharacters;
  }

  if (passwordCharacters.length == 0) {
    return "error";
  }
  

  

  var output = "";
  /* var passwordCharacters = lowerCase + upperCase + numbers + specialCharacters; */
  for (var i = 0; i < length; i++) {
    output += passwordCharacters[Math.floor(passwordCharacters.length * Math.random())];
  }
  return output

  
}


// Get references to the #generate element

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

