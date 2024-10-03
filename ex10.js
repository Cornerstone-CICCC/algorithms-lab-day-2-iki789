// Exercise 10: Write a function `convertToCamelCase` that takes a string
// with words separated by spaces or underscores, and returns the string in camelCase format.
// Example: convertToCamelCase("hello_world") should return "helloWorld".

const convertToCamelCase = (input) => {
  return input
    .split("_")
    .map((item, i) =>
      i !== 0 ? item.charAt(0).toUpperCase() + item.substring(1) : item
    )
    .join("");
};

console.log(convertToCamelCase("hello_world")); // Expected output: "helloWorld"
