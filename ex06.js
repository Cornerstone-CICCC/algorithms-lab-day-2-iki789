// Exercise 6: Write a function `getQueryParams` that takes a URL string and returns
// an object containing the query parameters as key-value pairs.
// Example: getQueryParams("https://example.com?search=test&page=2")
// should return { search: "test", page: "2" }.

const getQueryParams = (url) => {
  // const uri = new URL(url);
  if (!url.includes("?")) return {};
  const queryStrings = url.split("?")[1].split("&");
  const queryParams = {};

  for (let i = 0; i < queryStrings.length; i++) {
    console.log(queryStrings[i]);
    const [param, val] = queryStrings[i].split("=");
    queryParams[param] = val;
  }
  return queryParams;
};

console.log(getQueryParams("https://example.com?search=test&page=2")); // Expected output: { search: "test", page: "2" }
