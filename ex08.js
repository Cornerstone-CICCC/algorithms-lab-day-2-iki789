// Exercise 8: Write a function `groupByAge` that takes an array of people objects (each with a `name` and `age`),
// and groups them by age into an object where the keys are ages and the values are arrays of people of that age.
// Example: groupByAge([{ name: "Alice", age: 25 }, { name: "Bob", age: 25 }, { name: "Charlie", age: 30 }])
// should return { 25: [{ name: "Alice", age: 25 }, { name: "Bob", age: 25 }], 30: [{ name: "Charlie", age: 30 }] }.]

const groupByAge = (arr) => {
  if (arr.length === 0) return;
  const result = {};

  for (let i = 0; i < arr.length; i++) {
    result[arr[i].age]
      ? result[arr[i].age].push(arr[i])
      : (result[arr[i].age] = [arr[i]]);
  }

  return result;
};

console.log(
  groupByAge([
    { name: "Alice", age: 25 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 30 },
  ])
); // Expected output: { 25: [{ name: "Alice", age: 25 }, { name: "Bob", age: 25 }], 30: [{ name: "Charlie", age: 30 }] }
