// Exercise 11: Write a function `countWordOccurrences` that takes a string and a word,
// and returns the number of times the word appears in the string.
// Example: countWordOccurrences("hello world hello", "hello") should return 2.

const countWordOccurrences = (str) => {
  const hash = {};
  let count = 0;
  str.split(" ").forEach((item) => {
    hash[item] = hash[item] ? hash[item] + 1 : 1;
    count = hash[item] > count ? hash[item] : count;
  });
  return count;
};

console.log(countWordOccurrences("hello world hello", "hello")); // Expected output: 2
