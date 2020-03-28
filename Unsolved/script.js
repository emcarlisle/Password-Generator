// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//declare variables outside of function so that they can be used anytime (global) as arrays
// and not inside function since they can only be used within that function (local)
// when button is clicked, prompt user include numbers; confirm
//prompt user include upperCase; confirm
//prompt user include special chars; confirm
//prompt user for passwordLength 8-128; prompt
//variables for confirmed criteria
//array to contain confirmed criteria
//for loop for passwordLength
//criteria requirements
var num = ['0','1','2','3','4','5','6','7','8','9'];
var upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var symbols = ['!','@','#','$','%','&','-','+','=','*','?'];

//confirms -initialize as boolyeans ; when using confirm method, it returns as a boolyean ; to put into function genP
var confirmNum = false;
var confirmUpperCase = false;
var confirmSymbols = false; 
var confirmPasswordLength = 0;

// confirmed array of user choices with lowercase letters bc we assume the user wants lower case in their password
var confirmPasswordArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var password = '';



// when button generatePassword is clicked, series of prompts appear
function generatePassword() {
  //code goes here
  // local variables to prompt user
  var num = confirm("Would you like your password to include numbers?");
  var upperCase = confirm("Include upper case letters?");
  var symbols = confirm("Include special characters?");
  var confirmPasswordLength = prompt("How many characters would you like? Please enter a number between 8-128.");

  // if statment for confirms
  if (confirmNum === true) {
  confirmPasswordArr = confirmPasswordArr.concat(num); // .concat adds to array
  }
  if (confirmUpperCase === true) {
    confirmPasswordArr = confirmPasswordArr.concat(upperCase);
  }
  if (confirmSymbols === true) {
    confirmPasswordArr = confirmPasswordArr.concat(symbols);
  }
  if (confirm === true) {
    confirmPasswordArr = confirmPasswordArr.concat(num);
  }
  if (confirmPasswordLength < 8 || confirmPasswordLength > 128) {
    alert("Please enter a valid number between given range.");
  }

  // var confirmPasswordArr has lower case chars in the array, so when we have confirm vars, we can add to existing array.
  // the for loop will be used to only choose characters within the amount the user chooses
  // math.random & math.floor will pick random chars within array 
  //after for loop will be to return password

  for (var i = 0; i < confirmPasswordLength; i++); {

  }
  


  var password = prompt()
  return password;
}


var generateBtn = document.querySelector("#generate");

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
  
    passwordText.value = password;
  
  }