const reverseString = function(string) {
    let content = "";
    for (let i = 0; i < string.length; i++) {
      content += string[string.length - 1 - i]
    }
    return content;
};

// Do not edit below this line
module.exports = reverseString;
