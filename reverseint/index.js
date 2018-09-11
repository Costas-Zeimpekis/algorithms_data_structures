// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// Solution 1
// function reverseInt(n) {
//   const isNegative = Math.sign(n);

//   let rev = parseInt(
//     n
//       .toString()
//       .split('')
//       .filter(char => char !== '-')
//       .reverse()
//       .join('')
//   );

//   if (isNegative === -1) result = -rev;
//   else result = rev;

//   return result;
// }

// Solution 2
function reverseInt(n) {
  const rev = parseInt(
    n
      .toString()
      .split('')
      .reverse()
      .join('')
  );

  return rev * Math.sign(n);
}

module.exports = reverseInt;
