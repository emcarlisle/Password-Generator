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


function generatePassword() {
  //code goes here
  // alerts to pop up asking the following prompts
  // prompt user include numbers; confirm
  // prompt user length (8-120); confirm
  //prompt user upper case; confirm
  // prompt user for lower case; confirm
  // prompt user for numbers (1-9); confirm
  // prompt user for special characters (!,$,&); confirm

  // declare variables; write prompts
  var password = confirm("Would you like to include numbers?");
  var passwordLength = prompt("How many characters between 8 and 128?");
  var lowerCase = confirm("Include lower case letters?");
  var upperCase = confirm("Include upper case letters?");
  var symbols = confirm("Include special characters?");
  
  
  var numbers = ['1','2','3','4','5','6','7','8','9']
  
  return ' ';
}
  



