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

//confirms -initialize as boolyeans ; when using confirm method, it returns as a boolyean
var confirmNum = false;
var confirmUpperCase = false;
var confirmSymbols = false; 
var confirmPasswordLength = 0;

// confirmed array of user choices with lowercase letters bc we assume the user wants lower case in their password
var confirmArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

// if statment for confirmPL
if (confirmPasswordLength < 8 || confirmPasswordLength > 128) {
    alert("Please enter a valid number between given range.");
}


]
function generatePassword() {
var confirmPasswordLength = prompt("How many characters would you like? Please enter a number between 8-128.");
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