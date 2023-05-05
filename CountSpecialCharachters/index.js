// Basic app which returns the count of special charachters in string.

function countSpecialCharacters(str) {
    var specialChars = /[!@#$%^&*(),.?":{}|<>]/g; // Define the special characters using a regular expression
    var matches = str.match(specialChars); // Use the match() method to find all matches of special characters
    return matches ? matches.length : 0; // Return the count of matches, or 0 if no matches were found
  }


module.exports = {
    specialCharacters : countSpecialCharacters,

}