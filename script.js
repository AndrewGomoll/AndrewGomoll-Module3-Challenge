// Assignment code here



function generatePassword() {
  //prompts user to enter constraints for their password
  let length = prompt("Choose a length between 8-128 characters");
  let lowerCase = confirm("Include lowercase?")
  let upperCase = confirm("Include uppercase?")
  let numeric = confirm("Include numeric values?")
  let specialChar = confirm("Include special characters?")
//inititalize chars and password
  var chars = "";
  var password = "";
//if statements check it user added an option or not
  if (lowerCase == true) {
    chars = chars + "abcdefghijklmnopqrstuvwxyz"
  }
  
  if (upperCase == true) {
    chars = chars + "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }
  
  if (numeric == true) {
    chars = chars + "123456789"
  }
  
  if (specialChar == true) {
    chars = chars + "!@#$%^&*()?/|<>,.:;"
  }
//if statement checks that user accepted at least 1 option
  if(lowerCase == false && upperCase == false && numeric == false && specialChar == false)
  {
    return "Please include at least 1 of the options"
  }

  else
  {

  //for loop chooses a random password based on the options from the chars variable and returns the final password
  for (var i = 0; i <= length - 1; i++) {
  var randNum = Math.random() * chars.length;
  randNum = Math.floor(randNum);

  randChar = chars[randNum];

  password = password + randChar;
  }
  return password;
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
