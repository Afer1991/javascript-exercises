const palindromes = function (str) {
  let myRegex = /[a-z0-9]/g;
  let newString = str.toLowerCase();
  let newArray = newString.match(myRegex);
  newString = newArray.join('');
  let reversedArray = newArray.reverse();
  let reversedString = reversedArray.join('');
  if (newString === reversedString) {
    return true;
  } else {
    return false;
  }  
};

// Do not edit below this line
module.exports = palindromes;
