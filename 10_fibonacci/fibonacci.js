const fibonacci = function(num) {
  let fibArray = [1, 1];
  if (num == 0) {
    return 0;
  } else if (num == 1 || num == 2) {
    return 1;
  } else if (num > 2) {
    for(i = 2; i < num; i++) {
      fibArray.push(fibArray[i-2] + fibArray[i-1]);
    }
    return fibArray[num - 1];
  } else {
    return 'OOPS';
  }
};

// Do not edit below this line
module.exports = fibonacci;
