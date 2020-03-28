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
var specialChar = ['!','@','#','$','%','&','-','+','=','*','?'];

// confirmed array of user choices
var confirmNum = ["Would you like numbers in your password?"];
var confirmUpperCase = ["Include upper case?"];
var confirmSpecialChar = ["Include special characters?"];
var confirmPasswordLength = prompt("How many characters would you like? Please enter a number between 8-128.");

// if statment for confirmPL
if (confirmPasswordLength < 8 || confirmPasswordLength > 128) {
    alert("Please enter a valid number between given range.");
}


]
function generatePassword() {
    //code goes here

    
    var password = prompt()
    return 
  }


var generateBtn = document.querySelector("#generate");

function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
  
    passwordText.value = password;
  
  }