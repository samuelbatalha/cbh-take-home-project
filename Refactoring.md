# Refactoring

You've been asked to refactor the function `deterministicPartitionKey` in [`dpk.js`](dpk.js) to make it easier to read and understand without changing its functionality. For this task, you should:

1. Write unit tests to cover the existing functionality and ensure that your refactor doesn't break it. We typically use `jest`, but if you have another library you prefer, feel free to use it.
2. Refactor the function to be as "clean" and "readable" as possible. There are many valid ways to define those words - use your own personal definitions, but be prepared to defend them. Note that we do like to use the latest JS language features when applicable.
3. Write up a brief (~1 paragraph) explanation of why you made the choices you did and why specifically your version is more "readable" than the original.

You will be graded on the exhaustiveness and quality of your unit tests, the depth of your refactor, and the level of insight into your thought process provided by the written explanation.

## Your Explanation Here
 # 1. 
  - I would try to use the `jest` library because it's fast and efficient for Javascript testing purposes, but since I've never worked with it and even reading the documentation I wouldn't be able to deliver a test script with excellence in the expected assessment time.

 # 2. 
```js
const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  
  let candidate = TRIVIAL_PARTITION_KEY;

  if (event && event.partitionKey) {
    candidate = event.partitionKey;
  } else if (event) {
    candidate = crypto.createHash("sha3-512").update(JSON.stringify(event)).digest("hex");
  }
  
  // Transform candidate into JSON format if candidate is not a string
  typeof candidate !== "string" ? candidate = JSON.stringify(candidate) : undefined;

  // Generates a encrypted hash for candidate if its length is higher than 256
  candidate.length > MAX_PARTITION_KEY_LENGTH ? candidate = crypto.createHash("sha3-512").update(candidate).digest("hex") : undefined;

  return candidate;
};
```
# 3.
I've chosen to remove the blank attribution to 'candidate' by adding a default value to it (TRIVIAL_PARTITION_KEY), so it starts with '0'. After that I was not happy with the quantity of if/else statements in the code so I decided to use an 'else if' to group the conditions/expressions. Then I transformed the last 2 conditions into ternary operators to reduce de file length, and then I added comment to explain the ternary operators to help on understanding it.