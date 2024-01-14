// Return an remove without listed values
// Step 1 change name
//Step 2 added const, array and use strict
// Step 3 Improved readability

'use strict'

const skip = (array, ...elementsToRemove) => {
 const result = [];

    for (const value of array) {
        if (!elementsToRemove.includes(value)) {
            result.push(value);
        }
    }
   
    return result;
};

module.exports = skip;
