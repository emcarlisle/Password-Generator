// hw 3
var generateBtn = document.querySelector("#generate");

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
var confirmPasswordLength = 8;

// confirmed array of user choices with lowercase letters bc we assume the user wants lower case in their password
var confirmPasswordArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var password = '';



// when button generatePassword is clicked, series of prompts appear
function generatePassword() {
  //code goes here
  // local variables to prompt user ; not the same as var num bc var num is an array of strings of numbers
  confirmNum = confirm("Would you like your password to include numbers?");
  confirmUpperCase = confirm("Include upper case letters?");
  confirmSymbols = confirm("Include special characters?");
  console.log(confirmNum, confirmUpperCase, confirmSymbols);

  var confirmPasswordLength = prompt("How many characters would you like? Please enter a number between 8-128.");
  console.log(confirmPasswordLength);
  
  // if statment for confirms
  if (confirmPasswordLength < 8 || confirmPasswordLength > 128) {
    confirmPasswordLength = prompt("Please enter a valid number between given range.");
  }
  if (confirmNum === true) {
  confirmPasswordArr = confirmPasswordArr.concat(num); // .concat adds to array
  }
  if (confirmUpperCase === true) {
    confirmPasswordArr = confirmPasswordArr.concat(upperCase);
  }
  if (confirmSymbols === true) {
    confirmPasswordArr = confirmPasswordArr.concat(symbols);
  }
  console.log(confirmPasswordArr);
  

  // var confirmPasswordArr has lower case chars in the array, so when we have confirm vars, we can add to existing array.
  // the for loop will be used to only choose characters within the amount the user chooses
  // math.random & math.floor will pick random chars within array 
  //after for loop will be to return password

  for (var i = 0; i < confirmPasswordLength; i++) {
    password = password + confirmPasswordArr[Math.floor(Math.random() * confirmPasswordArr.length)] // inside function is math.random * length of conArr
    console.log(password); 
    
  }
  return password; // return password goes after the for loop
}


// given function by instrucor; moved to the end for better comprehension

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  
  passwordText.value = password;
}


  // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
