// Exercise 2: Write a function `arrayDifference` that takes two arrays and returns an array
// containing the elements that are in the first array but not in the second array.
// Example: arrayDifference([1, 2, 3], [2, 3, 4]) should return [1].

const arrayDifference = (a, b) => {
  const first = a.filter((x) => !b.includes(x));
  const second = first.filter((x) => !a.includes(x));

  return [...first, ...second];
};

console.log(arrayDifference([1, 2, 3], [2, 3, 4])); // Expected output: [1]
