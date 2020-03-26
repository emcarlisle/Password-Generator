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
  // prompt user for special characters (!,$,&); confirm

  // declare variables; write prompts
  var password = confirm("Would you like to include numbers?"); // ok/cancel
  var numbers = ['1','2','3','4','5','6','7','8','9'] // array of strings of numbers

  

  var passwordLength = prompt("How many characters between 8 and 128?"); // user types num 8-128
  
  if (passwordLength < 8 || passwordLength > 128) {
    // error message
  }
  if (typeof(passwordLength) !== numbers) {
    // error message
  }
  
  
  var lowerCase = confirm("Include lower case letters?"); // ok/cancel
  var upperCase = confirm("Include upper case letters?");
  var symbols = confirm("Include special characters?");
  
  //create array to hold values user choices
  var confirmedPassword = confirm("Are you satisfied with this password?");
  var passwordArr = []; //holds value of user choices
  // if statement of if all prompts confirmed
  if () { // logic: if all prompts confirmed
    passwordArr = passwordArr.concat(numbers)
  }
  if () {
    passwordArr = passwordArr.concat(passwordLength)
  }
  if () {
    passwordArr = passwordArr.concat(upperCase)
  }
  if () {
    passwordArr = passwordArr.concat(lowerCase)
  }
  if () {
    passwordArr = passwordArr.concat(symbols)
  }
  return ' ';
}
  



