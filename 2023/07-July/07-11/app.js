//========================================//
//            CODE WARS PROBLEMS
//========================================//

// DAY 1:

// Numbers ending with zeros are boring.

// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// 1450 -> 145
// 960000 -> 96
// 1050 -> 105
// -1050 -> -105
// Zero alone is fine, don't worry about it. Poor guy anyway

function noBoringZeros(n) {
  // Exclude removing the 0 if it was alone.
  if (n === 0) {
    return n;
  }

  // Convert the number to a string
  let numberString = n.toString();

  // Remove trailing zeros
  while (numberString.endsWith("0")) {
    numberString = numberString.slice(0, -1);
  }

  // Convert the modified string back to a number
  const result = parseFloat(numberString);

  return result;
}

console.log(noBoringZeros(19500000000));
