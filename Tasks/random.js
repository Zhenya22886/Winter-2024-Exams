// Generate random integer value in given range
// Step 1 change name 
// Step 2 added const and use strict

'use strict';

const random = (min, max) => {
  if (max === undefined) {
    max = min;
    return Math.floor(Math.random() * (max + 1));
  } else {
    return min + Math.floor(Math.random() * (max - min + 1));
  }
};

module.exports = random;
