// Assignment code here

// Create the generatePassword function that is called in writePassword()
function generatePassword() {
  // Ask the user to set a password length
  var length = prompt('Choose a password length between 8-128 characters.');
  // check to see if length input is Not a Number (NaN)
  if (isNaN(length)) {
    var newPassword = "Invalid characters. Please input a number.";
    return newPassword;
  }
  // Check that length input is between 8-128
  else if (length < 8 || length > 128) {
    var newPassword = "Error. Please choose a number between 8-128."
    return newPassword;
  } else {
    // Ask the user for password options
    var caps = confirm('Capital Letters?');
    if (caps = true) {
      return newPassword = "capitals!"
    };
    var uppercase = confirm('Uppercase?');
    var lowercase = confirm('Lowercase?');
    var special = confirm('Special Characters?');
    return newPassword = "Time for the next part."
  }
  // } else if (typeof length !== NaN && length < 8 || length > 128) {
  //   var newPassword = "Continue";
  //   var caps = confirm('Capital Letters?');
  //   var uppercase = confirm('Uppercase?');
  //   var lowercase = confirm('Lowercase?');
  //   var special = confirm('Special Characters?');
  //   return newPassword;
  // }

  // Ask the user for password options
  // var caps = confirm('Capital Letters?');
  // var uppercase = confirm('Uppercase?');
  // var lowercase = confirm('Lowercase?');
  // var special = confirm('Special Characters?');
  // console.log("Generate button clicked");



  // newPassword = "This will be a password soon";
  // return newPassword;
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
