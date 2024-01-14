// Return an remove without listed values
// Step 1 change name
//Step 2 added const, array and use strict

'use strict'

const skip = (array, ...elementsToRemove) => {
 const index = 0;
   const result = [];
  for (const value of array) {
    for (const elementsToRemove of elementsToRemove) {
      if (value === elementsToRemove) {
        array.splice(index, 1);
      }
    }
    index++;
  }
  return array;
};

module.exports = skip;
