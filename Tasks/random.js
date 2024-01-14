// Generate random integer value in given range
// Step 1 change name 
// Step 2 added const and use strict
// Step 3 Improved readability

'use strict';

const random = (min, max) => {
  let result = min + Math.floor(Math.random() * (max - min + 1));
  return result;
}
module.exports = random;
