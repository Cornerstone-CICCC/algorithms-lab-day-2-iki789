// Exercise 4: Write a function `mostFrequentChar` that takes a string and returns the character
// that appears the most times. If there is a tie, return the first character that reaches the maximum frequency.
// Example: mostFrequentChar("javascript") should return "a".

const mostFrequentChar = (string) => {
  let counts = {};
  let highestCount = 0;
  const arr = string.split("");

  for (let i = 0; i < arr.length; i++) {
    counts[arr[i]] = counts[arr[i]] ? counts[arr[i]] + 1 : 1;
    if (counts[arr[i]] > highestCount) {
      highestCount = counts[arr[i]];
    }
  }

  return Object.keys(counts).filter((key) => counts[key] === highestCount)[0];
};

console.log(mostFrequentChar("javascript")); // Expected output: "a"
