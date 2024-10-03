// Exercise 1: Write a function `capitalizeWords` that takes a string and returns the string
// with the first letter of each word capitalized.
// Example: capitalizeWords("hello world") should return "Hello World".

const capitalizeWords = function (input) {
  return input
    .split(" ")
    .map((item, i) => item.charAt(0).toUpperCase() + item.substring(1))
    .join(" ");
};

console.log(capitalizeWords("hello world")); // Expected output: "Hello World"
