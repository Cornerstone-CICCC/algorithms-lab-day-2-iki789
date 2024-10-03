// Exercise 5: Write a function `countConsonants` that takes a string
// and returns the number of consonants in the string.
// Example: countConsonants("hello world") should return 7.

const countConsonants = (str) => {
  const validCharacters = ["a", "e", "i", "o", "u", " "];

  return str.split("").reduce((prev, curr) => {
    if (!validCharacters.includes(curr)) {
      return (prev += 1);
    }
    return prev;
  }, 0);
};

console.log(countConsonants("hello world")); // Expected output: 7
