// Assignment code here

// Start with empty array; user will fill this with their options
var userOptionsArr = [];

// define the allowed characters
//allowed uppercase letters
const capitalsArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// allowed lowercase letters
const lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// allowed numbers
const numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// allowed special characters
const symbolsArr = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "[", "]", "=", "<", ">", "?", ",", ".", "/"];

// Create the generatePassword function that is called in writePassword()
function generatePassword() {
  // Ask the user to set a password length
  var passLength = prompt('Choose a password length between 8-128 characters.');
  // check to see if length input is Not a Number (NaN)
  if (isNaN(passLength)) {
    var newPassword = "Error. Invalid characters. Please input a number.";
    return newPassword;
  }
  // Check that length input is between 8-128
  else if (passLength < 8 || passLength > 128) {
    var newPassword = "Error. Password length must be between 8-128 characters."
    return newPassword;
  } else {
    // Ask the user for password options
    // if the user selects an option, concatenate the chosen array to the userOptionsArr array (userOptionsArr.concat)
    // Ask for capitals
    if (capsSelect = confirm('Include capital letters?') ? userOptionsArr = userOptionsArr.concat(capitalsArray) : capsSelect = false);
    // Ask for lowercase
    if (lowercaseSelect = confirm('Include lowercase letters?') ? userOptionsArr = userOptionsArr.concat(lowercaseArray) : lowercaseSelect = false);
    // Ask for numbers
    if (numbersSelect = confirm('Include numbers?') ? userOptionsArr = userOptionsArr.concat(numbersArr) : numbersSelect = false);
    // Ask for symbols
    if (symbolsSelect = confirm('Include special characters?') ? userOptionsArr = userOptionsArr.concat(symbolsArr) : symbolsSelect = false);

    // next step: Choose a number of random values from the userOptionsArray that is equal to user defined length
    // set the newPassword as a blank string
    var newPassword = "";
    // loop through the array

    for (let i = 0; i < passLength; i++) {
      // get a random index [i] and add it to the password string until the password string length = passLength
      var arrayIndex = Math.floor(Math.random() * userOptionsArr.length);
      newPassword = newPassword + userOptionsArr[arrayIndex];
    }
    return newPassword;
  }
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
