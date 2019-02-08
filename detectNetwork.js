// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.

  var pre2 = cardNumber.substring(0, 2);
  var pre3 = cardNumber.substring(0, 3);
  var pre4 = cardNumber.substring(0, 4);
  var pre6 = cardNumber.substring(0, 6);
  var length = cardNumber.length;

  if ((pre2 === "38" || pre2 === "39") && length === 14) {
    return "Diner's Club";
  }

  if ((pre2 === "34" || pre2 === "37") && length === 15) {
    return "American Express";
  }

  if (Number(pre2) <= 55 && Number(pre2) >= 51 && length === 16) {
    return "MasterCard";
  }

  if ((pre4 === "4903" || pre4 === "4905" || pre4 === "4911" || pre4 === "4936" ||
    pre6 === "564182" || pre6 === "633110" || pre4 === "6333" || pre4 === "6759") &&
    (length === 16 || length === 18 || length === 19)) {
    return "Switch";
  }

  if (cardNumber[0] === "4" && (length === 13 || length === 16 || length === 19)) {
    return "Visa";
  }

  if ((pre4 === "6011" || Number(pre3) >= 644 && Number(pre3) <= 649 ||
    pre2 === "65") && (length === 16 || length === 19)) {
    return "Discover";
  }

  if ((pre4 === "5018" || pre4 === "5020" || pre4 === "5038" || pre4 === "6304") &&
    (length >= 12 && length <= 19)) {
    return "Maestro";
  }

  if ((Number(pre6) >= 622126 && Number(pre6) <= 622925) ||
    (Number(pre3) >= 624 && Number(pre3) <= 626) ||
    (Number(pre4) >= 6282 && Number(pre4) <= 6288) && (length >= 16 && length <= 19)) {
    return "China UnionPay";
  }
};