// Exercise 15: Write a recursive function `findMax` that takes an array of numbers
// and returns the maximum number in the array.
// Example: findMax([3, 1, 4, 1, 5, 9]) should return 9.

const findMax = (arr) => {
  if (!arr.length) return 0;

  if (arr.length === 1) return arr[0];

  const [lhs, ...rest] = arr;

  const rhs = findMax(rest);

  return Math.max(lhs, rhs);
};

console.log(findMax([3, 1, 4, 1, 5, 9])); // Expected output: 9
