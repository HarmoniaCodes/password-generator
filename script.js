// Assignment code here

// Create the generatePassword function that is called in writePassword()
function generatePassword() {
  console.log("Generate button clicked");
  newPassword = "This will be a password soon";
  return newPassword;
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
