// Assignment code here

// 1. promptuser for password criteria
//  1.1 prompt user upper case, lower case, numbers, special characters
//  1.2 password length 8-128 
// 2. valid input
// 3. generate password based on criteria
// 4. display password

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// add characters
var upperCase = ["A", "B", "C"]
var lowerCase = ["a", "b", "c"]
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
var symbols = ["!", "@", "#"]

function generatePassword() {
  var passwordOptions = []
  var finalPassword = []
  var length = prompt("how long would you like the password to be?")
  if (length < 8 || length > 128) {
    alert("CHOOSE APPROPRIATE LENGTH FOR PASSWORD (BETWEEN 8-128)")
    return
  }
  var hasUpperCase = confirm("would you like to use upper case letters?")
  var hasLowerCase = confirm("would you like to use lower case letters?")
  var hasNumbers = confirm("would you like to use numbers?")
  var hasSymbols = confirm("would you like to use upper case symbols?")
  if (hasUpperCase === false && hasLowerCase === false && hasNumbers === false && hasSymbols === false) {
    alert("PLEASE CHOOSE PASSWORD CHARACTER TYPE")
    return
  }

  if (hasUpperCase === true) {
    passwordOptions = passwordOptions.concat(upperCase)
  }

  if (hasLowerCase === true) {
    passwordOptions = passwordOptions.concat(lowerCase)
  }

  if (hasNumbers === true) {
    passwordOptions = passwordOptions.concat(number)
  }

  if (hasSymbols === true) {
    passwordOptions = passwordOptions.concat(symbols)
  }
  console.log(passwordOptions)
  for (let index = 0; index < length; index++) {
    finalPassword.push(passwordOptions[Math.floor(Math.random() * passwordOptions.length)])
    console.log(finalPassword)
  }
  return finalPassword.join("")
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// var generatePassword = window.prompt

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
