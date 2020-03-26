// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//declare function
function generatepassword() {
// code goes here
// prompt user for "would you like to make a new password?"
//confirm("Would you like to make a new password?")
// prompt user length (8-120); confirm
//prompt user upper case; confirm
// prompt user for lower case; confirm
// prompt user for numbers (1-9); confirm
// prompt user for special characters (!,$,&); confirm

// declare variables
var password = confirm("Would you like to make a new password?");
var passwordLength = prompt("How long would you like your new password to be? (6-120 characters)");
var lowerCase = confirm("Include lower case letters?");
var upperCase = confirm("Include upper case letters?");

}