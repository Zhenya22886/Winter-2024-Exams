// Reverse dict, exchange keys and values
// Step 1 change name 
// Step 2 added const and use strict 
// Step 3 Improved readability
'use strict';

const reverseDictionary  = (data) => {
 const keys = Object.keys(data);
  const reversedData = {};
  
  for (const key of keys) {
    const value = data[key];
    reversedData[value] = key;
  }
  
  return reversedData;
};

module.exports = reverseDictionary ;
